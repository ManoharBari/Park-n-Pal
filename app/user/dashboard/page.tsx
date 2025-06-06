"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { LiveMap } from "@/components/shared/live-map"
import { SlotCard } from "@/components/shared/slot-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Search } from "lucide-react"

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
  {
    id: "5",
    name: "Central Park E5",
    address: "555 Park Ave",
    price: 3.5,
    status: "available" as const,
    timeWindow: "9:00 AM - 6:00 PM",
    distance: "0.9 miles",
    position: { x: 60, y: 20 },
  },
]

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10])
  const [availability, setAvailability] = useState("all")

  // Filter slots based on search, price range, and availability
  const filteredSlots = mockSlots.filter((slot) => {
    const matchesSearch =
      slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = slot.price >= priceRange[0] && slot.price <= priceRange[1]
    const matchesAvailability = availability === "all" || slot.status === availability

    return matchesSearch && matchesPrice && matchesAvailability
  })

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="w-64" />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Find Parking</h1>
              <p className="text-muted-foreground">Discover available parking spots near you</p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location or address..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Slots</SelectItem>
                    <SelectItem value="available">Available Only</SelectItem>
                    <SelectItem value="booked">Booked Only</SelectItem>
                    <SelectItem value="occupied">Occupied Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 10]}
                max={10}
                step={0.5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>

            <div className="mb-6 h-[400px]">
              <LiveMap slots={mockSlots} />
            </div>

            <h2 className="mb-4 text-xl font-semibold">Nearby Parking Spots</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSlots.map((slot) => (
                <SlotCard key={slot.id} {...slot} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
