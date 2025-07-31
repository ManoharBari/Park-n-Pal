"use client"

import { cn } from "@/lib/utils"
import { BookMarked, Home, Search, User, Wallet } from "lucide-react"
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
      label: "Search",
      icon: Search,
      href: "/user/search",
      active: pathname === "/user/search",
    },
    {
      label: "Bookings",
      icon: BookMarked,
      href: "/user/bookings",
      active: pathname === "/user/bookings",
    },
    {
      label: "Wallet",
      icon: Wallet,
      href: "/user/wallet",
      active: pathname === "/user/wallet",
    },
    {
      label: "Profile",
      icon: User,
      href: "/user/settings",
      active: pathname === "/user/settings",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex h-16 items-center">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-xs transition-colors",
              route.active ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full transition-all",
                route.active && "bg-primary/10",
              )}
            >
              <route.icon className={cn("h-5 w-5 transition-all", route.active && "scale-110")} />
            </div>
            <span className={cn("font-medium transition-all", route.active && "text-primary")}>{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
