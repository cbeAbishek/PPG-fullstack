import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AdminHeader } from "@/components/admin-header"
import { EventsList } from "@/components/events-list"

export default function Events() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Events" description="Create and manage events for the college website" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Event</CardTitle>
            <CardDescription>Add a new event to the website</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter event title" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter event location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter event description" rows={5} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Event Image</Label>
                <Input id="image" type="file" accept="image/*" />
                <p className="text-xs text-muted-foreground">Recommended size: 800x400px. Max file size: 2MB.</p>
              </div>

              <Button className="w-full">Create Event</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>View and manage existing events</CardDescription>
          </CardHeader>
          <CardContent>
            <EventsList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
