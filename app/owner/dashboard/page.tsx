"use client"

import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { OwnerMobileNav } from "@/components/owner/owner-mobile-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingTable } from "@/components/shared/booking-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Car,
  Clock,
  DollarSign,
  ParkingCircle,
  Bell,
  Menu,
  User,
  BarChart3,
  BookMarked,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Mock data for recent bookings
const recentBookings = [
  {
    id: "b1",
    slotName: "Downtown Parking A1",
    date: "2024-06-10",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    price: 11.0,
    status: "upcoming" as const,
  },
  {
    id: "b2",
    slotName: "City Center B2",
    date: "2024-06-08",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    price: 9.5,
    status: "active" as const,
  },
  {
    id: "b3",
    slotName: "Market Square C3",
    date: "2024-06-05",
    startTime: "9:00 AM",
    endTime: "11:00 AM",
    price: 12.5,
    status: "completed" as const,
  },
]

export default function OwnerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar - Fixed */}
      <div className="hidden md:block">
        <OwnerSidebar className="fixed left-0 top-0 h-screen w-64" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mobile-touch-target">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 p-0">
                  <div className="flex h-full flex-col">
                    <div className="flex h-14 items-center border-b px-4">
                      <Link href="/owner/dashboard" className="flex items-center gap-2 font-semibold">
                        <ParkingCircle className="h-5 w-5 text-purple-600" />
                        <span>Park'n'Pal</span>
                        <Badge variant="secondary" className="text-xs">
                          Owner
                        </Badge>
                      </Link>
                    </div>
                    <div className="flex-1 px-3 py-4">
                      <div className="space-y-1">
                        <Link
                          href="/owner/dashboard"
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          <BarChart3 className="h-4 w-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/owner/slots"
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                          <ParkingCircle className="h-4 w-4" />
                          Manage Slots
                        </Link>
                        <Link
                          href="/owner/bookings"
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                          <BookMarked className="h-4 w-4" />
                          Bookings
                        </Link>
                        <Link
                          href="/owner/analytics"
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                          <BarChart3 className="h-4 w-4" />
                          Analytics
                        </Link>
                        <Link
                          href="/owner/settings"
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                          <Settings className="h-4 w-4" />
                          Settings
                        </Link>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex items-center gap-3 rounded-md px-3 py-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                          <User className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Parking Manager</p>
                          <p className="text-xs text-gray-500">manager@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div>
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <p className="text-xs text-gray-500">Parking Operations</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="mobile-touch-target">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-screen overflow-y-auto pb-20 md:pb-0">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="container mx-auto p-4 md:p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Lot Owner Dashboard</h1>
                <p className="text-muted-foreground">Overview of your parking operations</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto p-4 space-y-4 md:space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              <Card className="mobile-card-spacing">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xs md:text-sm font-medium text-gray-600">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg md:text-2xl font-bold">$1,245</div>
                  <p className="text-xs text-green-600">+12.5%</p>
                </CardContent>
              </Card>

              <Card className="mobile-card-spacing">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xs md:text-sm font-medium text-gray-600">Active</CardTitle>
                  <Clock className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg md:text-2xl font-bold">24</div>
                  <p className="text-xs text-blue-600">4 pending</p>
                </CardContent>
              </Card>

              <Card className="mobile-card-spacing">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xs md:text-sm font-medium text-gray-600">Slots</CardTitle>
                  <ParkingCircle className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg md:text-2xl font-bold">48</div>
                  <p className="text-xs text-purple-600">75% occupied</p>
                </CardContent>
              </Card>

              <Card className="mobile-card-spacing">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xs md:text-sm font-medium text-gray-600">Customers</CardTitle>
                  <Car className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg md:text-2xl font-bold">156</div>
                  <p className="text-xs text-orange-600">+23 new</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions - Mobile Only */}
            <div className="md:hidden">
              <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/owner/slots">
                  <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                        <ParkingCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Manage Slots</p>
                        <p className="text-xs text-gray-500">Add or edit slots</p>
                      </div>
                    </div>
                  </Card>
                </Link>

                <Link href="/owner/bookings">
                  <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                        <BookMarked className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">View Bookings</p>
                        <p className="text-xs text-gray-500">Check reservations</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Charts - Desktop Only */}
            <div className="hidden md:block">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Occupancy Rate</CardTitle>
                    <CardDescription>Daily parking slot utilization</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex h-full items-center justify-center rounded-md border bg-muted/20">
                      <p className="text-sm text-muted-foreground">Occupancy Rate Chart</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trend</CardTitle>
                    <CardDescription>Weekly revenue breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex h-full items-center justify-center rounded-md border bg-muted/20">
                      <p className="text-sm text-muted-foreground">Revenue Trend Chart</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg md:text-xl">Recent Bookings</CardTitle>
                  <CardDescription className="text-sm">Latest parking reservations</CardDescription>
                </div>
                <Link href="/owner/bookings">
                  <Button variant="ghost" size="sm" className="gap-1 mobile-touch-target">
                    <span className="hidden md:inline">View All</span>
                    <span className="md:hidden">All</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="px-0 md:px-6">
                <div className="md:hidden">
                  {/* Mobile booking list */}
                  <div className="space-y-3 px-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-800"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{booking.slotName}</p>
                          <p className="text-xs text-gray-500">
                            {booking.date} • {booking.startTime}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">${booking.price}</p>
                          <Badge
                            variant={
                              booking.status === "active"
                                ? "default"
                                : booking.status === "upcoming"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <BookingTable bookings={recentBookings} userType="lot-owner" />
                </div>
              </CardContent>
            </Card>

            {/* Extra content to demonstrate scrolling */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key performance indicators for your parking business</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg dark:bg-green-900/20">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-green-700 dark:text-green-400">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                      <div className="text-2xl font-bold text-blue-600">4.8</div>
                      <div className="text-sm text-blue-700 dark:text-blue-400">Rating</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/20">
                      <div className="text-2xl font-bold text-purple-600">2.3h</div>
                      <div className="text-sm text-purple-700 dark:text-purple-400">Avg Duration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New booking confirmed</p>
                        <p className="text-xs text-gray-500">Slot A1 - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-gray-500">$15.50 - 3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Slot maintenance scheduled</p>
                        <p className="text-xs text-gray-500">Slot B3 - 5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <OwnerMobileNav />
    </div>
  )
}
