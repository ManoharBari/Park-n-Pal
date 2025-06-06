"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
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
import { Camera, Car, Lock, Moon, Shield, Sun, User } from "lucide-react"

export default function UserSettings() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Regular commuter who loves finding convenient parking spots.",
  })

  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "en",
    currency: "USD",
    distanceUnit: "miles",
  })

  const [notifications, setNotifications] = useState({
    bookingReminders: true,
    promotions: false,
    newFeatures: true,
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
  })

  const [privacy, setPrivacy] = useState({
    shareLocation: true,
    shareBookingHistory: false,
    allowAnalytics: true,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="w-64" />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your personal information and profile picture</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" />
                          <AvatarFallback>
                            <User className="h-8 w-8" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <Button variant="outline" className="gap-2">
                            <Camera className="h-4 w-4" />
                            Change Photo
                          </Button>
                          <p className="mt-2 text-sm text-muted-foreground">
                            JPG, GIF or PNG. 1MB max. Recommended: 400x400px
                          </p>
                        </div>
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
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          placeholder="Tell us a bit about yourself..."
                        />
                      </div>
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vehicle Information</CardTitle>
                      <CardDescription>Manage your registered vehicles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <Car className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <div className="font-medium">2022 Honda Civic</div>
                              <div className="text-sm text-muted-foreground">License: ABC-1234</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Primary</Badge>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Add Vehicle
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>App Preferences</CardTitle>
                    <CardDescription>Customize your app experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select
                        value={preferences.theme}
                        onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex items-center gap-2">
                              <Sun className="h-4 w-4" />
                              Light
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            <div className="flex items-center gap-2">
                              <Moon className="h-4 w-4" />
                              Dark
                            </div>
                          </SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select
                        value={preferences.language}
                        onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Currency</Label>
                      <Select
                        value={preferences.currency}
                        onValueChange={(value) => setPreferences({ ...preferences, currency: value })}
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
                      <Label>Distance Unit</Label>
                      <Select
                        value={preferences.distanceUnit}
                        onValueChange={(value) => setPreferences({ ...preferences, distanceUnit: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="miles">Miles</SelectItem>
                          <SelectItem value="kilometers">Kilometers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Choose what notifications you want to receive</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Booking Notifications</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Booking Reminders</Label>
                            <p className="text-sm text-muted-foreground">Get reminded about upcoming bookings</p>
                          </div>
                          <Switch
                            checked={notifications.bookingReminders}
                            onCheckedChange={(checked) =>
                              setNotifications({ ...notifications, bookingReminders: checked })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Marketing</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Promotions & Offers</Label>
                            <p className="text-sm text-muted-foreground">Receive special offers and promotions</p>
                          </div>
                          <Switch
                            checked={notifications.promotions}
                            onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>New Features</Label>
                            <p className="text-sm text-muted-foreground">Learn about new app features</p>
                          </div>
                          <Switch
                            checked={notifications.newFeatures}
                            onCheckedChange={(checked) => setNotifications({ ...notifications, newFeatures: checked })}
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
                            <Label>Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
                          </div>
                          <Switch
                            checked={notifications.pushNotifications}
                            onCheckedChange={(checked) =>
                              setNotifications({ ...notifications, pushNotifications: checked })
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

              <TabsContent value="privacy">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>Control your privacy and data sharing preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Share Location Data</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to use your location to find nearby parking
                            </p>
                          </div>
                          <Switch
                            checked={privacy.shareLocation}
                            onCheckedChange={(checked) => setPrivacy({ ...privacy, shareLocation: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Share Booking History</Label>
                            <p className="text-sm text-muted-foreground">
                              Help improve recommendations based on your parking history
                            </p>
                          </div>
                          <Switch
                            checked={privacy.shareBookingHistory}
                            onCheckedChange={(checked) => setPrivacy({ ...privacy, shareBookingHistory: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Analytics & Performance</Label>
                            <p className="text-sm text-muted-foreground">
                              Help us improve the app with anonymous usage data
                            </p>
                          </div>
                          <Switch
                            checked={privacy.allowAnalytics}
                            onCheckedChange={(checked) => setPrivacy({ ...privacy, allowAnalytics: checked })}
                          />
                        </div>
                      </div>
                      <Button>Save Privacy Settings</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account Security</CardTitle>
                      <CardDescription>Manage your account security settings</CardDescription>
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
                        Download My Data
                      </Button>
                      <Button variant="destructive" className="w-full">
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
