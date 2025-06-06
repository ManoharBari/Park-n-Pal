import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: "available" | "booked" | "occupied" | "upcoming" | "active" | "completed" | "expired" | "cancelled"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    available: {
      label: "Available",
      className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
    booked: {
      label: "Booked",
      className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    },
    occupied: {
      label: "Occupied",
      className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    },
    upcoming: {
      label: "Upcoming",
      className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    },
    active: {
      label: "Active",
      className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
    completed: {
      label: "Completed",
      className: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    },
    expired: {
      label: "Expired",
      className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    },
    cancelled: {
      label: "Cancelled",
      className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    },
  }

  const config = statusConfig[status]

  return <Badge className={cn(config.className, className)}>{config.label}</Badge>
}
