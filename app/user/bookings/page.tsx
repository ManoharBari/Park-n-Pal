import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { BookingTable } from "@/components/shared/booking-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export default function UserBookings() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="w-64" />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">My Bookings</h1>
              <p className="text-muted-foreground">Manage your parking reservations</p>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming & Active</TabsTrigger>
                <TabsTrigger value="past">Past Bookings</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                {upcomingBookings.length > 0 ? (
                  <BookingTable bookings={upcomingBookings} userType="car-owner" />
                ) : (
                  <div className="flex h-40 items-center justify-center rounded-md border">
                    <p className="text-muted-foreground">No upcoming bookings</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="past">
                {pastBookings.length > 0 ? (
                  <BookingTable bookings={pastBookings} userType="car-owner" />
                ) : (
                  <div className="flex h-40 items-center justify-center rounded-md border">
                    <p className="text-muted-foreground">No past bookings</p>
                  </div>
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
