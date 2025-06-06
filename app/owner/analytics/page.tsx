import { OwnerSidebar } from "@/components/owner/owner-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen">
      <OwnerSidebar className="w-64" />
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Analytics</h1>
              <p className="text-muted-foreground">Insights and statistics for your parking lots</p>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="7days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24hours">Last 24 hours</SelectItem>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Utilization Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs text-muted-foreground">+5% from last period</p>
                <div className="mt-4 h-[120px] rounded-md bg-muted/20">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Utilization Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Booking Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 hours</div>
                <p className="text-xs text-muted-foreground">-0.3 hours from last period</p>
                <div className="mt-4 h-[120px] rounded-md bg-muted/20">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Duration Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue per Slot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24.50</div>
                <p className="text-xs text-muted-foreground">+$3.25 from last period</p>
                <div className="mt-4 h-[120px] rounded-md bg-muted/20">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Revenue Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="utilization" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="utilization">Utilization</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="peak-times">Peak Times</TabsTrigger>
            </TabsList>
            <TabsContent value="utilization">
              <Card>
                <CardHeader>
                  <CardTitle>Slot Utilization</CardTitle>
                  <CardDescription>Detailed breakdown of parking slot usage over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="flex h-full items-center justify-center rounded-md border bg-muted/20">
                    <p className="text-sm text-muted-foreground">Utilization Chart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="revenue">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Revenue breakdown by day, week, and month</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="flex h-full items-center justify-center rounded-md border bg-muted/20">
                    <p className="text-sm text-muted-foreground">Revenue Chart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="peak-times">
              <Card>
                <CardHeader>
                  <CardTitle>Peak Time Heatmap</CardTitle>
                  <CardDescription>Visualize the busiest hours and days for your parking lots</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="flex h-full items-center justify-center rounded-md border bg-muted/20">
                    <p className="text-sm text-muted-foreground">Peak Time Heatmap</p>
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
