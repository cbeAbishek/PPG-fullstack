import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AdminHeader } from "@/components/admin-header"
import { AnnouncementsList } from "@/components/announcements-list"

export default function Announcements() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Announcements" description="Create and manage announcements for the college website" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Announcement</CardTitle>
            <CardDescription>Add a new announcement to the website</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter announcement title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select category</option>
                  <option value="academic">Academic</option>
                  <option value="admission">Admission</option>
                  <option value="event">Event</option>
                  <option value="placement">Placement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" placeholder="Enter announcement content" rows={5} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Publish Date</Label>
                <Input id="date" type="date" />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="featured"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="featured" className="text-sm font-normal">
                  Feature this announcement
                </Label>
              </div>

              <Button className="w-full">Create Announcement</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>View and manage existing announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <AnnouncementsList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
