"use client";

import { RequireAuth } from "@/components/providers/require-auth";
import { AppShell } from "@/components/layout/app-shell";

import { RepoDashboard } from "@/components/dashboard/repo-dashboard";

export default function OverviewPage() {
  return (
    <RequireAuth>
       <AppShell hideHeader>
        <RepoDashboard/>
      </AppShell>
    </RequireAuth>
  );
}