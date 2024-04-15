import { cn } from "@/lib/utils"
import Link from "next/link"
import { Children } from "react"

export type SidebarGenericProps<T = unknown> = {
  Children: React.ReactNode
  className?: string
} & T

export function Sidebar({Children, className}: SidebarGenericProps) {
  return (
    <aside className={cn(['', className])}>
      {Children}
    </aside>
  )
}

export function SidebarHeader({Children, className}: SidebarGenericProps) {
  return (
    <header className={cn(['', className])}>
      {Children}
    </header>
  )
}

export function SidebarMain({Children, className}: SidebarGenericProps) {
  return (
    <main className={cn(['', className])}>
      {Children}
    </main>
  )
}

export function SidebarNav({Children, className}: SidebarGenericProps) {
  return (
    <nav className={cn(['', className])}>
      {Children}
    </nav>
  )
}

export function SidebarNavHeader({Children, className}: SidebarGenericProps) {
  return (
    <header className={cn(['', className])}>
      {Children}
    </header>
  )
}

export function SidebarNavHeaderTitle({Children, className}: SidebarGenericProps) {
  return (
    <h4 className={cn(['', className])}>
      {Children}
    </h4>
  )
}

export function SidebarNavMain({Children, className}: SidebarGenericProps) {
  return (
    <main className={cn(['', className])}>
      {Children}
    </main>
  )
}

type SidebarNavLinkProps = {
  href: string
}

export function SidebarNavLink({Children, className, href}: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link href={href} className={cn(['', className])}>
      {Children}
    </Link>
  )
}


export function SidebarFooter({Children, className}: SidebarGenericProps) {
  return (
    <footer className={cn(['', className])}>
      {Children}
    </footer>
  )
}