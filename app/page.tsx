"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { Car, Key, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold">Park'n'Pal</span>
          </div>
          {user ? (
            <div>
              <h1>Welcome, {user.email}</h1>
              <button onClick={() => supabase.auth.signOut()}>Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Smart Parking{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Made Simple
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Find, book, and navigate to available parking slots in real time.
            The smartest way to park your vehicle.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/user/dashboard">
              <Button size="lg" className="gap-2">
                <Car className="h-5 w-5" />
                Car Owner Demo
              </Button>
            </Link>
            <Link href="/owner/dashboard">
              <Button size="lg" variant="outline" className="gap-2">
                <Key className="h-5 w-5" />
                Lot Owner Demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Find Parking</CardTitle>
              <CardDescription>
                Discover available parking spots near you in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-md bg-blue-100 dark:bg-blue-900/20">
                <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Our interactive map shows you all available parking spots with
                real-time status updates.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Instantly</CardTitle>
              <CardDescription>
                Reserve your spot with just a few taps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-md bg-green-100 dark:bg-green-900/20">
                <Car className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Book parking spots in advance or on-the-go with our seamless
                booking system.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Your Lot</CardTitle>
              <CardDescription>
                For parking lot owners and managers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-md bg-purple-100 dark:bg-purple-900/20">
                <Key className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Optimize your parking lot operations with our management tools
                and analytics.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto mt-24 border-t px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-bold">Park'n'Pal</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Park'n'Pal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
