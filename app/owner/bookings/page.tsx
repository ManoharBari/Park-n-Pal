import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { BookingTable } from "@/components/shared/booking-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

// Mock data for bookings
const mockBookings = [
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
  {
    id: "b4",
    slotName: "Harbor View D4",
    date: "2024-06-03",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    price: 14.0,
    status: "completed" as const,
  },
  {
    id: "b5",
    slotName: "Central Park E5",
    date: "2024-06-01",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    price: 7.0,
    status: "cancelled" as const,
  },
]

// Filter bookings by status
const activeBookings = mockBookings.filter((booking) => booking.status === "upcoming" || booking.status === "active")
const pastBookings = mockBookings.filter(
  (booking) => booking.status === "completed" || booking.status === "cancelled" || booking.status === "expired",
)

export default function OwnerBookings() {
  return (
    <div className="flex min-h-screen">
      <OwnerSidebar className="w-64" />
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Manage Bookings</h1>
            <p className="text-muted-foreground">View and manage all parking reservations</p>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search bookings..." className="pl-8" />
            </div>
            <Button variant="outline">Export Data</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="active">Active & Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past Bookings</TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                  {activeBookings.length > 0 ? (
                    <BookingTable bookings={activeBookings} userType="lot-owner" />
                  ) : (
                    <div className="flex h-40 items-center justify-center rounded-md border">
                      <p className="text-muted-foreground">No active bookings</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="past">
                  {pastBookings.length > 0 ? (
                    <BookingTable bookings={pastBookings} userType="lot-owner" />
                  ) : (
                    <div className="flex h-40 items-center justify-center rounded-md border">
                      <p className="text-muted-foreground">No past bookings</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
