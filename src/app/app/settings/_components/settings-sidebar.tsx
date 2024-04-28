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
            My profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/theme"
            active={isActive("/app/settings/theme")}
          >
            Theme
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarMain>
      </DashboardSidebarNav>
    </aside>
  );
}
