"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { StatusBadge } from "@/components/shared/status-badge"
import { Clock, MapPin, Navigation, QrCode, Wallet } from "lucide-react"

interface ParkingSlot {
  id: string
  name: string
  address: string
  price: number
  status: "available" | "booked" | "occupied"
  timeWindow: string
}

interface SlotModalProps {
  slot: ParkingSlot
  isOpen: boolean
  onClose: () => void
}

export function SlotModal({ slot, isOpen, onClose }: SlotModalProps) {
  const handleBooking = () => {
    // In a real app, this would trigger the booking flow
    alert(`Booking slot: ${slot.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{slot.name}</span>
            <StatusBadge status={slot.status} />
          </DialogTitle>
          <DialogDescription>View details and book this parking slot</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{slot.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{slot.timeWindow}</span>
          </div>
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">${slot.price.toFixed(2)}/hour</span>
          </div>

          {slot.status === "available" && (
            <div className="rounded-md border p-4">
              <div className="mb-2 text-sm font-medium">Check-in with QR Code</div>
              <div className="flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-md bg-gray-100">
                  <QrCode className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="flex flex-col gap-2 sm:flex-row">
          {slot.status === "available" ? (
            <>
              <Button onClick={handleBooking} className="w-full sm:w-auto">
                Book Slot
              </Button>
              <Button variant="outline" className="w-full gap-2 sm:w-auto">
                <Navigation className="h-4 w-4" />
                Navigate Now
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={onClose} className="w-full">
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
