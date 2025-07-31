"use client"

import type React from "react"

import { useState } from "react"
import { UserSidebar } from "@/components/user/user-sidebar"
import { MobileNav } from "@/components/user/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Camera,
  Car,
  ChevronRight,
  CreditCard,
  HelpCircle,
  Lock,
  LogOut,
  Moon,
  Shield,
  Sun,
  User,
} from "lucide-react"

// Mobile Settings Item Component
function SettingsItem({
  icon: Icon,
  title,
  description,
  action,
  onClick,
}: {
  icon: any
  title: string
  description?: string
  action?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <div
      className="flex items-center justify-between py-4 px-4 border-b last:border-b-0 cursor-pointer hover:bg-muted/50"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-lg">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
      {action || <ChevronRight className="h-4 w-4 text-muted-foreground" />}
    </div>
  )
}

export default function UserSettings() {
  const [notifications, setNotifications] = useState({
    bookingReminders: true,
    promotions: false,
    pushNotifications: true,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <UserSidebar className="hidden w-64 md:block" />
        <main className="flex-1 pb-20 md:pb-0">
          {/* Mobile Header */}
          <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <h1 className="text-lg font-semibold">Settings</h1>
            </div>
          </div>

          <div className="container mx-auto p-4 space-y-6">
            {/* Desktop Header */}
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            {/* Profile Section - Mobile */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" />
                      <AvatarFallback>
                        <User className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full"
                    >
                      <Camera className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Verified
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Account</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <SettingsItem icon={User} title="Personal Information" description="Update your profile details" />
                <SettingsItem icon={Car} title="Vehicle Information" description="Manage your registered vehicles" />
                <SettingsItem icon={CreditCard} title="Payment Methods" description="Manage cards and billing" />
                <SettingsItem
                  icon={Lock}
                  title="Password & Security"
                  description="Change password and security settings"
                />
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <SettingsItem
                  icon={Sun}
                  title="Theme"
                  description="Light mode"
                  action={
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      <Switch />
                      <Moon className="h-4 w-4" />
                    </div>
                  }
                />
                <SettingsItem icon={Bell} title="Notifications" description="Manage your notification preferences" />
              </CardContent>
            </Card>

            {/* Quick Notification Toggles - Mobile */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Booking Reminders</p>
                    <p className="text-xs text-muted-foreground">Get notified about upcoming bookings</p>
                  </div>
                  <Switch
                    checked={notifications.bookingReminders}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, bookingReminders: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Push Notifications</p>
                    <p className="text-xs text-muted-foreground">Receive notifications on your device</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Promotions</p>
                    <p className="text-xs text-muted-foreground">Receive special offers and deals</p>
                  </div>
                  <Switch
                    checked={notifications.promotions}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Support & Legal */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Support & Legal</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <SettingsItem icon={HelpCircle} title="Help Center" description="Get help and support" />
                <SettingsItem icon={Shield} title="Privacy Policy" description="Learn how we protect your data" />
                <SettingsItem icon={Shield} title="Terms of Service" description="Read our terms and conditions" />
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 text-destructive border-destructive/20 bg-transparent"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 text-destructive border-destructive/20 bg-transparent"
                >
                  <User className="h-4 w-4" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>

            {/* App Info - Mobile */}
            <div className="text-center text-xs text-muted-foreground space-y-1 md:hidden">
              <p>Park'n'Pal v1.0.0</p>
              <p>© 2024 Park'n'Pal. All rights reserved.</p>
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
