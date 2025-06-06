"use client"

import { useState } from "react"
import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { StatusBadge } from "@/components/shared/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for parking slots
const mockSlots = [
  {
    id: "1",
    name: "Downtown Parking A1",
    status: "available" as const,
    price: 5.5,
    timeWindow: "8:00 AM - 8:00 PM",
  },
  {
    id: "2",
    name: "City Center B2",
    status: "booked" as const,
    price: 4.75,
    timeWindow: "24 hours",
  },
  {
    id: "3",
    name: "Market Square C3",
    status: "occupied" as const,
    price: 6.25,
    timeWindow: "7:00 AM - 10:00 PM",
  },
  {
    id: "4",
    name: "Harbor View D4",
    status: "available" as const,
    price: 7.0,
    timeWindow: "6:00 AM - 12:00 AM",
  },
  {
    id: "5",
    name: "Central Park E5",
    status: "available" as const,
    price: 3.5,
    timeWindow: "9:00 AM - 6:00 PM",
  },
]

export default function ManageSlots() {
  const [slots, setSlots] = useState(mockSlots)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newSlot, setNewSlot] = useState({
    name: "",
    price: "",
    timeWindow: "",
  })

  const handleAddSlot = () => {
    const slot = {
      id: `${slots.length + 1}`,
      name: newSlot.name,
      status: "available" as const,
      price: Number.parseFloat(newSlot.price),
      timeWindow: newSlot.timeWindow,
    }
    setSlots([...slots, slot])
    setNewSlot({ name: "", price: "", timeWindow: "" })
    setIsAddModalOpen(false)
  }

  const handleStatusChange = (id: string, checked: boolean) => {
    setSlots(
      slots.map((slot) => {
        if (slot.id === id) {
          return {
            ...slot,
            status: checked ? "available" : "occupied",
          }
        }
        return slot
      }),
    )
  }

  const handleDeleteSlot = (id: string) => {
    setSlots(slots.filter((slot) => slot.id !== id))
  }

  return (
    <div className="flex min-h-screen">
      <OwnerSidebar className="w-64" />
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Manage Parking Slots</h1>
              <p className="text-muted-foreground">Add, edit, and manage your parking slots</p>
            </div>
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Slot
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Parking Slot</DialogTitle>
                  <DialogDescription>Enter the details for the new parking slot.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Slot Name</Label>
                    <Input
                      id="name"
                      value={newSlot.name}
                      onChange={(e) => setNewSlot({ ...newSlot, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price per Hour ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={newSlot.price}
                      onChange={(e) => setNewSlot({ ...newSlot, price: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="timeWindow">Time Window</Label>
                    <Input
                      id="timeWindow"
                      value={newSlot.timeWindow}
                      onChange={(e) => setNewSlot({ ...newSlot, timeWindow: e.target.value })}
                      placeholder="e.g. 8:00 AM - 8:00 PM"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddSlot}>Add Slot</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Parking Slots</CardTitle>
              <CardDescription>Manage your parking slots and their availability</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Slot Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Time Window</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {slots.map((slot) => (
                    <TableRow key={slot.id}>
                      <TableCell className="font-medium">{slot.name}</TableCell>
                      <TableCell>
                        <StatusBadge status={slot.status} />
                      </TableCell>
                      <TableCell>${slot.price.toFixed(2)}/hr</TableCell>
                      <TableCell>{slot.timeWindow}</TableCell>
                      <TableCell>
                        <Switch
                          checked={slot.status === "available"}
                          onCheckedChange={(checked) => handleStatusChange(slot.id, checked)}
                          disabled={slot.status === "booked"}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Edit className="h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2 text-destructive"
                              onClick={() => handleDeleteSlot(slot.id)}
                            >
                              <Trash className="h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
