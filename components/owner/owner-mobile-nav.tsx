"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, BookMarked, ParkingCircle, Settings } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: BarChart3,
    href: "/owner/dashboard",
  },
  {
    label: "Slots",
    icon: ParkingCircle,
    href: "/owner/slots",
  },
  {
    label: "Bookings",
    icon: BookMarked,
    href: "/owner/bookings",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/owner/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/owner/settings",
  },
]

export function OwnerMobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800 md:hidden bottom-nav-blur">
      <div className="grid grid-cols-5 h-16">
        {routes.map((route) => {
          const isActive = pathname === route.href
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-2 py-2 text-xs font-medium transition-colors mobile-touch-target",
                isActive
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
              )}
            >
              <route.icon className={cn("h-5 w-5", isActive && "text-purple-600 dark:text-purple-400")} />
              <span className={cn("text-xs", isActive && "text-purple-600 dark:text-purple-400")}>{route.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="safe-area-bottom" />
    </div>
  )
}
