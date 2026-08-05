-- DNA Farma — Painel de Acompanhamento
-- Migração inicial: perfis/roles, fases, tarefas, auditoria, RLS, seed.
--
-- Como rodar: Supabase Dashboard → SQL Editor → cole este arquivo inteiro →
-- Run. O bloco 0 abaixo dropa tudo que este arquivo cria (se existir) antes
-- de recriar — então é seguro rodar de novo do zero, inclusive depois de
-- uma tentativa anterior que falhou no meio (o Postgres comita cada
-- statement individualmente; um erro na metade deixa objetos anteriores
-- criados). ⚠️ Isso apaga qualquer dado real já digitado nas tabelas do
-- painel — não rode em produção com dados que você quer manter.

-- ============================================================
-- 0. LIMPEZA (idempotência — seguro rodar o arquivo várias vezes)
-- ============================================================

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop function if exists public.can_write();
drop function if exists public.is_admin();
drop function if exists public.current_role();
drop table if exists public.audit_log cascade;
drop table if exists public.project_meta cascade;
drop table if exists public.tasks cascade;
drop table if exists public.milestones cascade;
drop table if exists public.phases cascade;
drop table if exists public.profiles cascade;
drop type if exists public.phase_status;
drop type if exists public.user_role;

-- ============================================================
-- 1. TIPOS
-- ============================================================

create type public.user_role as enum ('admin', 'editor', 'viewer');
create type public.phase_status as enum ('done', 'in_progress', 'not_started', 'blocked');

-- ============================================================
-- 2. TABELAS
-- ============================================================

-- Perfil de cada usuário autenticado. 1:1 com auth.users, criado
-- automaticamente pelo trigger handle_new_user() abaixo.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  role public.user_role not null default 'viewer',
  created_at timestamptz not null default now()
);

create table public.phases (
  id serial primary key,
  code text not null unique,          -- 'F1'..'F14'
  name text not null,
  time_window text not null,          -- ex.: 'S1–S2'. ("window" é palavra reservada no Postgres)
  weight int not null,                -- peso % no projeto (soma = 100)
  status public.phase_status not null default 'not_started',
  order_index int not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles (id)
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  phase_id int not null references public.phases (id) on delete cascade,
  title text not null,
  description text,
  owner text,
  due_date date,
  completed boolean not null default false,
  completed_at timestamptz,
  completed_by uuid references public.profiles (id),
  order_index int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles (id)
);

create table public.milestones (
  id serial primary key,
  code text not null unique,          -- 'M1', 'MD1', 'M2', 'M3', 'GOLIVE'
  name text not null,
  date date not null,
  criteria text not null,
  order_index int not null
);

-- Metadados gerais do projeto — linha única, campos que não pertencem a
-- nenhuma fase/tarefa específica (saúde do projeto, riscos, pendências).
-- Editável por admin/editor na página inicial.
create table public.project_meta (
  id int primary key default 1 check (id = 1),
  health text not null default 'ATENÇÃO',
  health_note text not null default '',
  active_risks int not null default 0,
  critical_risks int not null default 0,
  active_blockers int not null default 0,
  items_awaiting_response int not null default 0,
  go_live_date date not null default '2026-11-03',
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles (id)
);

-- Log de auditoria imutável (histórico de quem mudou o quê e quando).
-- Escrito pelas Server Actions da aplicação, não por trigger — cada ação
-- que muda phases/tasks grava sua própria linha aqui na mesma transação.
create table public.audit_log (
  id bigserial primary key,
  entity_type text not null,          -- 'phase' | 'task'
  entity_id text not null,
  field text not null,
  old_value text,
  new_value text,
  changed_by uuid references public.profiles (id),
  changed_at timestamptz not null default now()
);

create index audit_log_entity_idx on public.audit_log (entity_type, entity_id, changed_at desc);
create index tasks_phase_idx on public.tasks (phase_id, order_index);

-- ============================================================
-- 3. NOVO USUÁRIO → PERFIL AUTOMÁTICO
-- ============================================================

-- Convites (supabase.auth.admin.inviteUserByEmail) passam `role` e
-- `full_name` em user_metadata; esse trigger materializa isso em profiles.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    coalesce((new.raw_user_meta_data ->> 'role')::public.user_role, 'viewer')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 4. HELPERS DE ROLE (security definer — evita recursão de RLS)
-- ============================================================

create function public.current_role()
returns public.user_role
language sql
security definer
stable
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

create function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select public.current_role() = 'admin';
$$;

create function public.can_write()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select public.current_role() in ('admin', 'editor');
$$;

-- ============================================================
-- 5. RLS
-- ============================================================

alter table public.profiles enable row level security;
alter table public.phases enable row level security;
alter table public.tasks enable row level security;
alter table public.milestones enable row level security;
alter table public.audit_log enable row level security;
alter table public.project_meta enable row level security;

-- profiles: qualquer usuário autenticado vê todos os perfis (é uma equipe
-- pequena, útil pra saber quem é quem); só o próprio dono edita o nome; só
-- admin muda role de qualquer um.
create policy "profiles_select_authenticated" on public.profiles
  for select to authenticated using (true);

create policy "profiles_update_own_name" on public.profiles
  for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id and role = public.current_role());

create policy "profiles_admin_full_update" on public.profiles
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- phases / tasks / milestones: leitura para qualquer autenticado; escrita
-- para admin + editor.
create policy "phases_select_authenticated" on public.phases
  for select to authenticated using (true);
create policy "phases_write_editors" on public.phases
  for update to authenticated using (public.can_write()) with check (public.can_write());

create policy "tasks_select_authenticated" on public.tasks
  for select to authenticated using (true);
create policy "tasks_write_editors" on public.tasks
  for all to authenticated using (public.can_write()) with check (public.can_write());

create policy "milestones_select_authenticated" on public.milestones
  for select to authenticated using (true);
create policy "milestones_write_admin" on public.milestones
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "project_meta_select_authenticated" on public.project_meta
  for select to authenticated using (true);
create policy "project_meta_write_editors" on public.project_meta
  for update to authenticated using (public.can_write()) with check (public.can_write());

-- audit_log: leitura para todo autenticado (transparência); inserção
-- restrita a quem tem permissão de escrita (a própria Server Action grava
-- a entrada, autenticada como o usuário que fez a mudança).
create policy "audit_log_select_authenticated" on public.audit_log
  for select to authenticated using (true);
create policy "audit_log_insert_editors" on public.audit_log
  for insert to authenticated with check (public.can_write());

-- ============================================================
-- 6. SEED — 14 fases (Seção 6.1 do documento mestre) + 5 marcos (Seção 6.2)
-- ============================================================

insert into public.phases (code, name, time_window, weight, status, order_index) values
  ('F1',  'Planejamento Estratégico',            'S1–S2',      5,  'in_progress', 1),
  ('F2',  'Jurídico e Regulatório',               'S1–S8',      11, 'in_progress', 2),
  ('F3',  'Infraestrutura Física',                'S1–S8',      13, 'in_progress', 3),
  ('F4',  'Laboratório e Qualidade',              'S3–S11',     15, 'not_started', 4),
  ('F5',  'Tecnologia (Infra + Segurança)',       'S2–S9',      7,  'not_started', 5),
  ('F6',  'ERP e Integrações',                    'S2–S10',     11, 'not_started', 6),
  ('F7',  'Financeiro',                           'S2–S10',     6,  'not_started', 7),
  ('F8',  'Recursos Humanos',                     'S2–S9',      7,  'not_started', 8),
  ('F9',  'Treinamentos',                         'S8–S12',     6,  'not_started', 9),
  ('F10', 'Processos e Operação',                 'S4–S12',     7,  'not_started', 10),
  ('F11', 'Pré-inauguração',                      'S11–S13',    4,  'not_started', 11),
  ('F12', 'Inauguração',                          'S13',        2,  'not_started', 12),
  ('F13', 'Pós Go-Live',                          'D+1 a D+90', 1,  'not_started', 13),
  ('F14', 'Presença Digital (Site + Social)',     'S1–S13',     5,  'in_progress', 14);

insert into public.project_meta (id, health, health_note, active_risks, critical_risks, active_blockers, items_awaiting_response, go_live_date) values
  (1, 'ATENÇÃO', 'prazo regulatório é o fator dominante', 18, 5, 0, 17, '2026-11-03');

insert into public.milestones (code, name, date, criteria, order_index) values
  ('M1',     'Baseline congelada',                  '2026-08-14', '17 perguntas respondidas + DEC-001 e DEC-005 tomadas', 1),
  ('MD1',    'Ativos digitais garantidos',           '2026-08-14', 'Domínio, @handles, INPI protocolado, e-mail corporativo', 2),
  ('M2',     'Obra concluída / equipe contratada',   '2026-09-25', 'Habite-se técnico + 100% dos cargos preenchidos', 3),
  ('M3',     'Sistemas em produção + simulação',     '2026-10-16', 'ERP operando + site no ar + operação-piloto', 4),
  ('GOLIVE', 'Go-Live',                              '2026-11-03', 'Checklist de inauguração 100%', 5);

-- Exemplo de tarefas para F14 (a única fase com detalhe granular hoje —
-- as demais fases começam sem tarefas; cadastre pela UI /fases/[code]).
insert into public.tasks (phase_id, title, owner, due_date, completed, order_index)
select id, t.title, t.owner, t.due_date::date, false, t.order_index
from public.phases, (values
  ('Inventário e reserva de ativos digitais', 'Italo', '2026-08-14', 1),
  ('Manual de Marca Digital DNA Farma', 'Italo', '2026-09-04', 2),
  ('Política de Comunicação e Compliance Digital', 'Italo', '2026-09-11', 3),
  ('Site institucional no ar', 'Italo', '2026-10-09', 4),
  ('Perfis sociais ativos com conteúdo rodando', 'Italo', '2026-09-18', 5),
  ('Google Business Profile verificado', 'Italo', '2026-10-09', 6),
  ('WhatsApp Business + automações', 'Italo', '2026-10-16', 7),
  ('Campanha de pré-lançamento', 'Italo', '2026-10-23', 8),
  ('Painel de KPIs digitais', 'Italo', '2026-10-30', 9)
) as t(title, owner, due_date, order_index)
where phases.code = 'F14';

-- ============================================================
-- 7. PRIMEIRO ADMIN
-- ============================================================
-- O trigger handle_new_user() cria todo mundo como 'viewer' por padrão
-- (a menos que o convite já passe role no metadata — ver app/admin/usuarios).
-- Para o SEU primeiro login virar admin, rode isto depois de criar sua
-- própria conta (substitua o e-mail):
--
-- update public.profiles set role = 'admin' where email = 'seu-email@aqui.com';
