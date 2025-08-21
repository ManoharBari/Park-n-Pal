"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { LiveMap } from "@/components/shared/live-map"
import { SlotCard } from "@/components/shared/slot-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Filter, MapPin, Search, User } from "lucide-react"

// Mock data for parking slots
const mockSlots = [
  {
    id: "1",
    name: "Downtown Parking A1",
    address: "123 Main St, Downtown",
    price: 5.5,
    status: "available" as const,
    timeWindow: "8:00 AM - 8:00 PM",
    distance: "0.3 miles",
    position: { x: 30, y: 40 },
  },
  {
    id: "2",
    name: "City Center B2",
    address: "456 Center Ave",
    price: 4.75,
    status: "booked" as const,
    timeWindow: "24 hours",
    distance: "0.5 miles",
    position: { x: 50, y: 30 },
  },
  {
    id: "3",
    name: "Market Square C3",
    address: "789 Market St",
    price: 6.25,
    status: "occupied" as const,
    timeWindow: "7:00 AM - 10:00 PM",
    distance: "0.7 miles",
    position: { x: 70, y: 60 },
  },
  {
    id: "4",
    name: "Harbor View D4",
    address: "321 Harbor Blvd",
    price: 7.0,
    status: "available" as const,
    timeWindow: "6:00 AM - 12:00 AM",
    distance: "1.2 miles",
    position: { x: 40, y: 70 },
  },
]

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter slots based on search
  const filteredSlots = mockSlots.filter((slot) => {
    const matchesSearch =
      slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar - Fixed */}
      <UserSidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Good morning</p>
                <p className="text-xs text-muted-foreground">John Doe</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-screen overflow-y-auto pb-20 md:pb-0">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="container mx-auto p-4 md:p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Find Parking</h1>
                <p className="text-muted-foreground">Discover available parking spots near you</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4 space-y-6">
            {/* Search Section */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Where do you want to park?"
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Quick Filters - Mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
                <Badge variant="secondary" className="whitespace-nowrap">
                  <MapPin className="mr-1 h-3 w-3" />
                  Nearby
                </Badge>
                <Badge variant="outline" className="whitespace-nowrap">
                  Available Now
                </Badge>
                <Badge variant="outline" className="whitespace-nowrap">
                  Under $5
                </Badge>
                <Badge variant="outline" className="whitespace-nowrap">
                  24 Hours
                </Badge>
              </div>

              {/* Desktop Filters */}
              <div className="hidden md:flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Badge variant="secondary">
                  <MapPin className="mr-1 h-3 w-3" />
                  Nearby
                </Badge>
                <Badge variant="outline">Available Now</Badge>
                <Badge variant="outline">Under $5</Badge>
              </div>
            </div>

            {/* Quick Stats - Mobile */}
            <div className="grid grid-cols-3 gap-3 md:hidden">
              <Card className="p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">24</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
              </Card>
              <Card className="p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">0.3mi</div>
                  <div className="text-xs text-muted-foreground">Nearest</div>
                </div>
              </Card>
              <Card className="p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">$4.75</div>
                  <div className="text-xs text-muted-foreground">From</div>
                </div>
              </Card>
            </div>

            {/* Map Section */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Nearby Parking</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[250px] md:h-[400px]">
                  <LiveMap slots={mockSlots} />
                </div>
              </CardContent>
            </Card>

            {/* Available Spots */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold md:text-xl">Available Spots</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>

              {/* Mobile: Horizontal scroll */}
              <div className="flex gap-4 overflow-x-auto pb-2 md:hidden">
                {filteredSlots.slice(0, 3).map((slot) => (
                  <div key={slot.id} className="min-w-[280px]">
                    <SlotCard {...slot} />
                  </div>
                ))}
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredSlots.map((slot) => (
                  <SlotCard key={slot.id} {...slot} />
                ))}
              </div>
            </div>

            {/* Recent Activity - Mobile */}
            <Card className="md:hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Booking confirmed</p>
                    <p className="text-xs text-muted-foreground">Downtown Parking A1 • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment successful</p>
                    <p className="text-xs text-muted-foreground">$11.00 • Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}
