"use client"

import { StatusBadge } from "@/components/shared/status-badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Eye } from "lucide-react"
import Link from "next/link"

interface Booking {
  id: string
  slotName: string
  date: string
  startTime: string
  endTime: string
  price: number
  status: "upcoming" | "active" | "completed" | "expired" | "cancelled"
}

interface BookingTableProps {
  bookings: Booking[]
  userType: "car-owner" | "lot-owner"
}

export function BookingTable({ bookings, userType }: BookingTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Slot</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.slotName}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>
                {booking.startTime} - {booking.endTime}
              </TableCell>
              <TableCell>${booking.price.toFixed(2)}</TableCell>
              <TableCell>
                <StatusBadge status={booking.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link href={`/${userType === "car-owner" ? "user" : "owner"}/bookings/${booking.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </Link>
                  {booking.status === "completed" && (
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download Receipt</span>
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
