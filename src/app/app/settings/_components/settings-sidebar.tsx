"use client";

import {
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export function SettingsSIdebar() {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarMain>
          <DashboardSidebarNavLink
            href="/app/settings"
            active={isActive("/app/settings")}
          >
            Meu perfil
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/theme"
            active={isActive("/app/settings/theme")}
          >
            Tema
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            Assinatura
          </DashboardSidebarNavLink>
        </DashboardSidebarMain>
      </DashboardSidebarNav>
    </aside>
  );
}

