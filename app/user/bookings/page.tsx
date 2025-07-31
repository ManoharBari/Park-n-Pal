import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { BookingTable } from "@/components/shared/booking-table"
import { StatusBadge } from "@/components/shared/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, MoreVertical } from "lucide-react"

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
const upcomingBookings = mockBookings.filter((booking) => booking.status === "upcoming" || booking.status === "active")
const pastBookings = mockBookings.filter(
  (booking) => booking.status === "completed" || booking.status === "cancelled" || booking.status === "expired",
)

// Mobile Booking Card Component
function MobileBookingCard({ booking }: { booking: (typeof mockBookings)[0] }) {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-sm">{booking.slotName}</h3>
            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{booking.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={booking.status} />
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreVertical className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>
              {booking.startTime} - {booking.endTime}
            </span>
          </div>
          <div className="text-sm font-medium">${booking.price.toFixed(2)}</div>
        </div>

        {booking.status === "upcoming" && (
          <div className="mt-3 flex gap-2">
            <Button size="sm" className="flex-1 h-8 text-xs">
              View Details
            </Button>
            <Button variant="outline" size="sm" className="flex-1 h-8 text-xs bg-transparent">
              Navigate
            </Button>
          </div>
        )}

        {booking.status === "active" && (
          <div className="mt-3">
            <Button size="sm" className="w-full h-8 text-xs">
              Check In
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function UserBookings() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="hidden w-64 md:block" />
        <main className="flex-1 pb-20 md:pb-0">
          {/* Mobile Header */}
          <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <h1 className="text-lg font-semibold">My Bookings</h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {upcomingBookings.length} Active
                </Badge>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4">
            {/* Desktop Header */}
            <div className="mb-6 hidden md:block">
              <h1 className="text-2xl font-bold">My Bookings</h1>
              <p className="text-muted-foreground">Manage your parking reservations</p>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="upcoming" className="text-sm">
                  Active ({upcomingBookings.length})
                </TabsTrigger>
                <TabsTrigger value="past" className="text-sm">
                  History ({pastBookings.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                {upcomingBookings.length > 0 ? (
                  <>
                    {/* Mobile View */}
                    <div className="md:hidden">
                      {upcomingBookings.map((booking) => (
                        <MobileBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block">
                      <BookingTable bookings={upcomingBookings} userType="car-owner" />
                    </div>
                  </>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <div className="text-center">
                        <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No active bookings</h3>
                        <p className="text-sm text-muted-foreground mb-4">Find and book your next parking spot</p>
                        <Button>Find Parking</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="past">
                {pastBookings.length > 0 ? (
                  <>
                    {/* Mobile View */}
                    <div className="md:hidden">
                      {pastBookings.map((booking) => (
                        <MobileBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block">
                      <BookingTable bookings={pastBookings} userType="car-owner" />
                    </div>
                  </>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <div className="text-center">
                        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No booking history</h3>
                        <p className="text-sm text-muted-foreground">Your completed bookings will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
