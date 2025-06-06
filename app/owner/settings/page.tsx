"use client"

import { useState } from "react"
import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Building, Camera, CreditCard, Lock, MapPin, Shield, User } from "lucide-react"

export default function OwnerSettings() {
  const [profile, setProfile] = useState({
    companyName: "Downtown Parking Solutions",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@downtownparking.com",
    phone: "+1 (555) 987-6543",
    businessLicense: "BL-2024-001234",
    address: "123 Business District, City, State 12345",
    description: "Premium parking solutions in the heart of downtown.",
  })

  const [businessSettings, setBusinessSettings] = useState({
    autoApproveBookings: true,
    allowCancellations: true,
    cancellationWindow: "2", // hours
    defaultPricing: "5.00",
    currency: "USD",
    timezone: "America/New_York",
  })

  const [notifications, setNotifications] = useState({
    newBookings: true,
    cancellations: true,
    payments: true,
    systemUpdates: true,
    emailNotifications: true,
    smsNotifications: false,
  })

  return (
    <div className="flex min-h-screen">
      <OwnerSidebar className="w-64" />
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your business account and preferences</p>
          </div>

          <Tabs defaultValue="business" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="business">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                    <CardDescription>Update your business details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback>
                          <Building className="h-8 w-8" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" className="gap-2">
                          <Camera className="h-4 w-4" />
                          Change Logo
                        </Button>
                        <p className="mt-2 text-sm text-muted-foreground">
                          JPG, GIF or PNG. 1MB max. Recommended: 400x400px
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={profile.companyName}
                        onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profile.firstName}
                          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profile.lastName}
                          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Business Phone</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessLicense">Business License</Label>
                      <Input
                        id="businessLicense"
                        value={profile.businessLicense}
                        onChange={(e) => setProfile({ ...profile, businessLicense: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address</Label>
                      <Textarea
                        id="address"
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Business Description</Label>
                      <Textarea
                        id="description"
                        value={profile.description}
                        onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                        placeholder="Describe your parking business..."
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Verification Status</CardTitle>
                    <CardDescription>Your business verification and compliance status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium">Business License</div>
                            <div className="text-sm text-muted-foreground">Verified on March 15, 2024</div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium">Payment Processing</div>
                            <div className="text-sm text-muted-foreground">Connected and active</div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium">Location Verification</div>
                            <div className="text-sm text-muted-foreground">All parking lots verified</div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="operations">
              <Card>
                <CardHeader>
                  <CardTitle>Operational Settings</CardTitle>
                  <CardDescription>Configure how your parking business operates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-approve Bookings</Label>
                        <p className="text-sm text-muted-foreground">Automatically approve new booking requests</p>
                      </div>
                      <Switch
                        checked={businessSettings.autoApproveBookings}
                        onCheckedChange={(checked) =>
                          setBusinessSettings({ ...businessSettings, autoApproveBookings: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Allow Cancellations</Label>
                        <p className="text-sm text-muted-foreground">Allow customers to cancel their bookings</p>
                      </div>
                      <Switch
                        checked={businessSettings.allowCancellations}
                        onCheckedChange={(checked) =>
                          setBusinessSettings({ ...businessSettings, allowCancellations: checked })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cancellationWindow">Cancellation Window (hours)</Label>
                    <Select
                      value={businessSettings.cancellationWindow}
                      onValueChange={(value) => setBusinessSettings({ ...businessSettings, cancellationWindow: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="24">24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="defaultPricing">Default Hourly Rate ($)</Label>
                    <Input
                      id="defaultPricing"
                      type="number"
                      step="0.01"
                      value={businessSettings.defaultPricing}
                      onChange={(e) => setBusinessSettings({ ...businessSettings, defaultPricing: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <Select
                      value={businessSettings.currency}
                      onValueChange={(value) => setBusinessSettings({ ...businessSettings, currency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="CAD">CAD ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Select
                      value={businessSettings.timezone}
                      onValueChange={(value) => setBusinessSettings({ ...businessSettings, timezone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time</SelectItem>
                        <SelectItem value="America/Chicago">Central Time</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button>Save Operational Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you want to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Business Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>New Bookings</Label>
                          <p className="text-sm text-muted-foreground">Get notified when customers make new bookings</p>
                        </div>
                        <Switch
                          checked={notifications.newBookings}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, newBookings: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Cancellations</Label>
                          <p className="text-sm text-muted-foreground">Get notified when bookings are cancelled</p>
                        </div>
                        <Switch
                          checked={notifications.cancellations}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, cancellations: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Payment Notifications</Label>
                          <p className="text-sm text-muted-foreground">Get notified about payments and payouts</p>
                        </div>
                        <Switch
                          checked={notifications.payments}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, payments: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>System Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about system maintenance and updates
                          </p>
                        </div>
                        <Switch
                          checked={notifications.systemUpdates}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, systemUpdates: checked })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Delivery Methods</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) =>
                            setNotifications({ ...notifications, emailNotifications: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                        </div>
                        <Switch
                          checked={notifications.smsNotifications}
                          onCheckedChange={(checked) =>
                            setNotifications({ ...notifications, smsNotifications: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Button>Save Notification Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security & Account</CardTitle>
                  <CardDescription>Manage your account security and data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Lock className="h-4 w-4" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Shield className="h-4 w-4" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Download Business Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Manage Payment Settings
                  </Button>
                  <div className="pt-4">
                    <Button variant="destructive" className="w-full">
                      Delete Business Account
                    </Button>
                    <p className="mt-2 text-sm text-muted-foreground">
                      This action cannot be undone. All your parking lots and booking data will be permanently deleted.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
