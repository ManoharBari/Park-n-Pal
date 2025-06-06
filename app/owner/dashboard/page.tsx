import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingTable } from "@/components/shared/booking-table"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Clock, DollarSign, ParkingCircle } from "lucide-react"
import Link from "next/link"

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
    <div className="flex min-h-screen">
      <OwnerSidebar className="w-64" />
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Lot Owner Dashboard</h1>
            <p className="text-muted-foreground">Overview of your parking operations</p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245.89</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">4 check-ins pending</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Slots</CardTitle>
                <ParkingCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">75% occupancy rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Unique Customers</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">+23 new this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
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

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest parking reservations</CardDescription>
              </div>
              <Link href="/owner/bookings">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <BookingTable bookings={recentBookings} userType="lot-owner" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
