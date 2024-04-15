
import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";
import { auth } from "@/services/auth";


export default function Page() {


  return (
    <DashboardPage >
    <DashboardPageHeader>
      <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
    </DashboardPageHeader>
    <DashboardPageMain>
      <h1>Settings</h1>
    </DashboardPageMain>
  </DashboardPage>
  );
}
