"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Wallet } from "lucide-react"

interface SlotCardProps {
  id: string
  name: string
  address: string
  price: number
  distance?: string
  status: "available" | "booked" | "occupied"
  timeWindow: string
  onClick?: () => void
  className?: string
}

export function SlotCard({
  id,
  name,
  address,
  price,
  distance,
  status,
  timeWindow,
  onClick,
  className,
}: SlotCardProps) {
  const statusColors = {
    available: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    booked: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    occupied: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  }

  const statusLabels = {
    available: "Available",
    booked: "Booked",
    occupied: "Occupied",
  }

  return (
    <Card className={cn("overflow-hidden", className)} onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{address}</span>
            {distance && <span className="ml-auto text-xs">{distance}</span>}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{timeWindow}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Wallet className="h-4 w-4" />
            <span>${price.toFixed(2)}/hour</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={status === "available" ? "default" : "outline"}
          disabled={status !== "available"}
        >
          {status === "available" ? "Book Now" : "View Details"}
        </Button>
      </CardFooter>
    </Card>
  )
}
