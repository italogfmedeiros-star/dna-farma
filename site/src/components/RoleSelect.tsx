"use client";

import { useTransition } from "react";
import { updateUserRole } from "@/app/actions/users";
import { roleLabel, type UserRole } from "@/lib/types";

const options = Object.entries(roleLabel) as [UserRole, string][];

export function RoleSelect({
  userId,
  role,
  disabled,
}: {
  userId: string;
  role: UserRole;
  disabled?: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={role}
      disabled={disabled || pending}
      onChange={(e) =>
        startTransition(() => updateUserRole(userId, e.target.value as UserRole))
      }
      className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs font-medium text-neutral-700 disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
    >
      {options.map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
