"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock password reset - in real app, this would send reset email
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold">Park'n'Pal</span>
        </Link>
      </header>

      <main className="container mx-auto flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>
              {isSubmitted
                ? "Check your email for reset instructions"
                : "Enter your email to receive password reset instructions"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  We've sent password reset instructions to <strong>{email}</strong>. Please check your email and follow
                  the link to reset your password.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Reset Instructions
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link href="/login" className="flex items-center gap-2 text-sm text-muted-foreground hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Sign In
            </Link>
            {isSubmitted && (
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full">
                Try Different Email
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
