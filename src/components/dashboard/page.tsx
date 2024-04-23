import { cn } from "@/lib/utils";

export type DashboardPagerGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardPage({ children, className }: DashboardPagerGenericProps) {
  return (
    <section className={cn(["h-screen", className])}>
      {children}
    </section>
  );
}

export function DashboardPageHeader({ children, className }: DashboardPagerGenericProps) {
  return (
    <header className={cn(["px-6 py-3 border-b border-border flex items-center justify-between", className])}>
      {children}
    </header>
  );
}

export function DashboardPageHeaderTitle({ children, className }: DashboardPagerGenericProps) {
  return (
    <h1 className={cn(["text-muted-foreground uppercase", className])}>
      {children}
    </h1>
  );
}

export function DashboardPageHeaderNav({ children, className }: DashboardPagerGenericProps) {
  return (
    <nav className={cn(["", className])}>
      {children}
    </nav>
  );
}

export function DashboardPageMain({ children, className }: DashboardPagerGenericProps) {
  return (
    <main className={cn(["p-6", className])}>
      {children}
    </main>
  );
}
