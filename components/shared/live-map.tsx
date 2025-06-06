"use client"

import { useState } from "react"
import { SlotModal } from "@/components/shared/slot-modal"
import { MapPin } from "lucide-react"

interface ParkingSlot {
  id: string
  name: string
  address: string
  price: number
  status: "available" | "booked" | "occupied"
  timeWindow: string
  position: {
    x: number
    y: number
  }
}

interface LiveMapProps {
  slots: ParkingSlot[]
}

export function LiveMap({ slots }: LiveMapProps) {
  const [selectedSlot, setSelectedSlot] = useState<ParkingSlot | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePinClick = (slot: ParkingSlot) => {
    setSelectedSlot(slot)
    setIsModalOpen(true)
  }

  return (
    <div className="map-container dark:map-container-dark relative rounded-lg border">
      {/* This would be replaced with an actual map integration */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        <span className="text-sm">Interactive Map View</span>
      </div>

      {/* Parking slot pins */}
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`map-pin ${slot.status}`}
          style={{
            left: `${slot.position.x}%`,
            top: `${slot.position.y}%`,
          }}
          onClick={() => handlePinClick(slot)}
        >
          <MapPin className="h-full w-full" />
        </div>
      ))}

      {/* Slot details modal */}
      {selectedSlot && <SlotModal slot={selectedSlot} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}
