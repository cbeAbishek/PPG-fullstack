import { CalendarDays, FileText, LayoutDashboard, Megaphone, Plus, UploadCloud, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin-header"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Dashboard" description="Overview of your college website" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">24</div>
            <p className="text-xs text-muted-foreground">+2 added this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">12</div>
            <p className="text-xs text-muted-foreground">+3 added this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Documents Uploaded</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">45</div>
            <p className="text-xs text-muted-foreground">+8 added this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">5,234</div>
            <p className="text-xs text-muted-foreground">Current enrollment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Faculty</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">352</div>
            <p className="text-xs text-muted-foreground">Full-time and visiting</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">48</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
            <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff914d]">95%</div>
            <p className="text-xs text-muted-foreground">For 2023 batch</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Latest announcements posted on the website</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Megaphone className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Admission Open for 2024-25</p>
                  <p className="text-sm text-muted-foreground">Posted 2 days ago</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Megaphone className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Campus Recruitment Drive</p>
                  <p className="text-sm text-muted-foreground">Posted 5 days ago</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Megaphone className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Faculty Development Program</p>
                  <p className="text-sm text-muted-foreground">Posted 1 week ago</p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="mt-4 w-full">
              View All Announcements
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled in the coming weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CalendarDays className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Annual Tech Fest 2023</p>
                  <p className="text-sm text-muted-foreground">October 15-17, 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CalendarDays className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Research Symposium</p>
                  <p className="text-sm text-muted-foreground">November 5, 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CalendarDays className="mt-0.5 h-5 w-5 text-[#ff914d]" />
                <div>
                  <p className="font-medium">Industry Connect Workshop</p>
                  <p className="text-sm text-muted-foreground">September 28, 2023</p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="mt-4 w-full">
              View All Events
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Announcement
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
        <Button>
          <UploadCloud className="mr-2 h-4 w-4" /> Upload Document
        </Button>
      </div>
    </div>
  )
}
