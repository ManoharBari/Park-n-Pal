"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookMarked, Car, CreditCard, Home, LogOut, Menu, Settings, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface UserSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSidebar({ className }: UserSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/user/dashboard",
      active: pathname === "/user/dashboard",
    },
    {
      label: "My Bookings",
      icon: BookMarked,
      href: "/user/bookings",
      active: pathname === "/user/bookings",
    },
    {
      label: "Wallet",
      icon: CreditCard,
      href: "/user/wallet",
      active: pathname === "/user/wallet",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/user/settings",
      active: pathname === "/user/settings",
    },
  ]

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <MobileSidebar routes={routes} />
        </SheetContent>
      </Sheet>
      <div className={cn("hidden h-screen border-r md:block", className)}>
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/user/dashboard" className="flex items-center gap-2 font-semibold">
              <Car className="h-5 w-5 text-blue-600" />
              <span>Park'n'Pal</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-3 py-4">
            <div className="mb-10 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3 rounded-md px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="mt-2 w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

function MobileSidebar({ routes }: { routes: any[] }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/user/dashboard" className="flex items-center gap-2 font-semibold">
          <Car className="h-5 w-5 text-blue-600" />
          <span>Park'n'Pal</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="mb-10 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3 rounded-md px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="mt-2 w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
