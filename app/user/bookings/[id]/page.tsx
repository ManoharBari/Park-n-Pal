import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { StatusBadge } from "@/components/shared/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Car, Clock, Download, MapPin, QrCode } from "lucide-react"
import Link from "next/link"

// Mock booking data
const mockBooking = {
  id: "b1",
  slotName: "Downtown Parking A1",
  slotId: "s1",
  address: "123 Main St, Downtown",
  date: "2024-06-10",
  startTime: "10:00 AM",
  endTime: "12:00 PM",
  duration: "2 hours",
  price: 11.0,
  status: "upcoming" as const,
}

export default function BookingDetails({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the booking details using the ID
  const booking = mockBooking

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="w-64" />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Booking Details</h1>
                  <p className="text-muted-foreground">Booking #{params.id}</p>
                </div>
                <StatusBadge status={booking.status} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Parking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{booking.slotName}</div>
                      <div className="text-sm text-muted-foreground">Slot ID: {booking.slotId}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-muted-foreground">{booking.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-sm text-muted-foreground">{booking.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-sm text-muted-foreground">
                        {booking.startTime} - {booking.endTime} ({booking.duration})
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Parking Fee</span>
                    <span>${booking.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span>$1.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$0.96</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>${(booking.price + 1.0 + 0.96).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Payment Method</span>
                    <span>Credit Card (**** 1234)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  {booking.status === "completed" && (
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Receipt
                    </Button>
                  )}
                </CardFooter>
              </Card>

              {(booking.status === "upcoming" || booking.status === "active") && (
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Check-in Information</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 sm:flex-row">
                    <div className="flex h-48 w-48 items-center justify-center rounded-md border bg-muted/20">
                      <QrCode className="h-32 w-32 text-muted-foreground" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-medium">Scan to Check-in</h3>
                      <p className="mb-4 text-muted-foreground">
                        Present this QR code at the parking entrance to check in.
                      </p>
                      <Button className="gap-2">
                        <MapPin className="h-4 w-4" />
                        Navigate to Parking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mt-6 flex justify-between">
              <Link href="/user/bookings">
                <Button variant="outline">Back to Bookings</Button>
              </Link>
              {booking.status === "upcoming" && <Button variant="destructive">Cancel Booking</Button>}
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
