"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreditCard, DollarSign, Plus, Wallet } from "lucide-react"

// Mock data for payment methods and transactions
const paymentMethods = [
  {
    id: "1",
    type: "Credit Card",
    last4: "1234",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true,
  },
  {
    id: "2",
    type: "Credit Card",
    last4: "5678",
    brand: "Mastercard",
    expiryMonth: 8,
    expiryYear: 2026,
    isDefault: false,
  },
]

const transactions = [
  {
    id: "t1",
    date: "2024-06-10",
    description: "Parking at Downtown A1",
    amount: -11.0,
    type: "payment",
    status: "completed",
  },
  {
    id: "t2",
    date: "2024-06-08",
    description: "Wallet Top-up",
    amount: 50.0,
    type: "topup",
    status: "completed",
  },
  {
    id: "t3",
    date: "2024-06-05",
    description: "Parking at Market Square C3",
    amount: -12.5,
    type: "payment",
    status: "completed",
  },
  {
    id: "t4",
    date: "2024-06-03",
    description: "Refund - Cancelled Booking",
    amount: 7.0,
    type: "refund",
    status: "completed",
  },
]

export default function UserWallet() {
  const [walletBalance] = useState(42.75)
  const [topupAmount, setTopupAmount] = useState("")
  const [isTopupModalOpen, setIsTopupModalOpen] = useState(false)
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)

  const handleTopup = () => {
    // Mock topup - in real app, this would process payment
    setIsTopupModalOpen(false)
    setTopupAmount("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="w-64" />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Wallet</h1>
              <p className="text-muted-foreground">Manage your payment methods and wallet balance</p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${walletBalance.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">Available for parking</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">This Month</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$89.50</div>
                  <p className="text-xs text-muted-foreground">Total spent on parking</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Savings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12.30</div>
                  <p className="text-xs text-muted-foreground">Saved with Park'n'Pal</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6 flex gap-4">
              <Dialog open={isTopupModalOpen} onOpenChange={setIsTopupModalOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Money
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Money to Wallet</DialogTitle>
                    <DialogDescription>Choose an amount to add to your wallet balance.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="amount">Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        min="5"
                        max="500"
                        value={topupAmount}
                        onChange={(e) => setTopupAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" onClick={() => setTopupAmount("25")}>
                        $25
                      </Button>
                      <Button variant="outline" onClick={() => setTopupAmount("50")}>
                        $50
                      </Button>
                      <Button variant="outline" onClick={() => setTopupAmount("100")}>
                        $100
                      </Button>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsTopupModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleTopup} disabled={!topupAmount || Number.parseFloat(topupAmount) < 5}>
                      Add ${topupAmount || "0"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="outline">Auto Top-up Settings</Button>
            </div>

            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="transactions">Transaction History</TabsTrigger>
                <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
              </TabsList>
              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your recent wallet activity and parking payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  transaction.type === "payment"
                                    ? "destructive"
                                    : transaction.type === "topup"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {transaction.type}
                              </Badge>
                            </TableCell>
                            <TableCell
                              className={`text-right font-medium ${
                                transaction.amount > 0 ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payment-methods">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>Manage your saved payment methods</CardDescription>
                    </div>
                    <Dialog open={isAddCardModalOpen} onOpenChange={setIsAddCardModalOpen}>
                      <DialogTrigger asChild>
                        <Button className="gap-2">
                          <Plus className="h-4 w-4" />
                          Add Card
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Payment Method</DialogTitle>
                          <DialogDescription>Add a new credit or debit card to your account.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input id="cardName" placeholder="John Doe" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsAddCardModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setIsAddCardModalOpen(false)}>Add Card</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <div className="font-medium">
                                {method.brand} ending in {method.last4}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Expires {method.expiryMonth.toString().padStart(2, "0")}/{method.expiryYear}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {method.isDefault && <Badge variant="secondary">Default</Badge>}
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
