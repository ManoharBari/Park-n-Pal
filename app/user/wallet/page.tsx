"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowDownLeft, ArrowUpRight, CreditCard, DollarSign, Plus, TrendingUp, Wallet } from "lucide-react"

// Mock data for transactions
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

// Mobile Transaction Card
function MobileTransactionCard({ transaction }: { transaction: (typeof transactions)[0] }) {
  const isPositive = transaction.amount > 0

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-full ${
            transaction.type === "payment"
              ? "bg-red-100 text-red-600"
              : transaction.type === "topup"
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
          }`}
        >
          {transaction.type === "payment" ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownLeft className="h-4 w-4" />
          )}
        </div>
        <div>
          <p className="text-sm font-medium">{transaction.description}</p>
          <p className="text-xs text-muted-foreground">{transaction.date}</p>
        </div>
      </div>
      <div className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
      </div>
    </div>
  )
}

export default function UserWallet() {
  const [walletBalance] = useState(42.75)
  const [topupAmount, setTopupAmount] = useState("")
  const [isTopupModalOpen, setIsTopupModalOpen] = useState(false)

  const handleTopup = () => {
    setIsTopupModalOpen(false)
    setTopupAmount("")
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar - Fixed */}
      <UserSidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-lg font-semibold">Wallet</h1>
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-screen overflow-y-auto pb-20 md:pb-0">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="container mx-auto p-4 md:p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Wallet</h1>
                <p className="text-muted-foreground">Manage your payment methods and wallet balance</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4 space-y-6">
            {/* Balance Card - Mobile Optimized */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm opacity-90">Available Balance</p>
                    <p className="text-3xl font-bold">${walletBalance.toFixed(2)}</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-full">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Dialog open={isTopupModalOpen} onOpenChange={setIsTopupModalOpen}>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="flex-1">
                        <Plus className="mr-2 h-4 w-4" />
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

                  <Button variant="secondary" size="sm" className="flex-1">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards - Mobile */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-lg font-bold">$89.50</div>
                  <div className="text-xs text-muted-foreground">This Month</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold">$12.30</div>
                  <div className="text-xs text-muted-foreground">Savings</div>
                </CardContent>
              </Card>

              <Card className="md:block hidden">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-lg font-bold">2</div>
                  <div className="text-xs text-muted-foreground">Cards</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions - Mobile Optimized */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-1">
                  {transactions.slice(0, 5).map((transaction) => (
                    <MobileTransactionCard key={transaction.id} transaction={transaction} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods - Mobile */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Visa ending in 1234</p>
                      <p className="text-xs text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Default
                  </Badge>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
