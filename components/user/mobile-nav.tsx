"use client"

import { cn } from "@/lib/utils"
import { BookMarked, Home, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/user/dashboard",
      active: pathname === "/user/dashboard",
    },
    {
      label: "Bookings",
      icon: BookMarked,
      href: "/user/bookings",
      active: pathname === "/user/bookings",
    },
    {
      label: "Profile",
      icon: User,
      href: "/user/settings",
      active: pathname === "/user/settings",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t bg-background md:hidden">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex h-full w-full flex-col items-center justify-center gap-1 text-xs",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          <route.icon className="h-5 w-5" />
          <span>{route.label}</span>
        </Link>
      ))}
    </div>
  )
}
