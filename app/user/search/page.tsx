"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { SlotCard } from "@/components/shared/slot-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, Search, SlidersHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

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
    status: "available" as const,
    timeWindow: "24 hours",
    distance: "0.5 miles",
    position: { x: 50, y: 30 },
  },
  {
    id: "3",
    name: "Market Square C3",
    address: "789 Market St",
    price: 6.25,
    status: "available" as const,
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

export default function SearchPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10])
  const [sortBy, setSortBy] = useState("distance")
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort slots
  const filteredSlots = mockSlots
    .filter((slot) => {
      const matchesSearch =
        slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slot.address.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = slot.price >= priceRange[0] && slot.price <= priceRange[1]
      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
        default:
          return 0
      }
    })

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar - Fixed */}
      <UserSidebar className="hidden w-64 md:block" />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <div className="flex h-16 items-center gap-4 px-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="flex-1 text-lg font-semibold">Search Parking</h1>
            <Button variant="ghost" size="icon" onClick={() => setShowFilters(!showFilters)} className="h-8 w-8">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-screen overflow-y-auto pb-20 md:pb-0">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="container mx-auto p-4 md:p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Search Parking</h1>
                <p className="text-muted-foreground">Find the perfect parking spot</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by location or address..."
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <Card className="md:hidden">
                <CardContent className="p-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider value={priceRange} onValueChange={setPriceRange} max={10} step={0.5} className="py-4" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distance">Distance</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                </span>
                <Slider value={priceRange} onValueChange={setPriceRange} max={10} step={0.5} className="w-32" />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
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
              <Badge variant="outline" className="whitespace-nowrap">
                Covered
              </Badge>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{filteredSlots.length} parking spots found</p>
              <Button variant="ghost" size="sm" className="md:hidden">
                Map View
              </Button>
            </div>

            {/* Results Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSlots.map((slot) => (
                <SlotCard key={slot.id} {...slot} />
              ))}
            </div>

            {/* Load More - Mobile */}
            <div className="text-center md:hidden">
              <Button variant="outline" className="w-full bg-transparent">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
