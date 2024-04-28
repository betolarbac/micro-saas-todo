import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";

import { PropsWithChildren } from "react";
import { SettingsSIdebar } from "./_components/settings-sidebar";

export default function layout({ children }: PropsWithChildren) {

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="grid grid-cols-[16rem_1fr] gap-12">
            <SettingsSIdebar />
          <div>{children}</div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}
