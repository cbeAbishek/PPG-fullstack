import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AdminHeader } from "@/components/admin-header"
import { GalleryGrid } from "@/components/gallery-grid"

export default function Gallery() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Gallery" description="Upload and manage images for the college website gallery" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
            <CardDescription>Add a new image to the gallery</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter image title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select category</option>
                  <option value="campus">Campus</option>
                  <option value="events">Events</option>
                  <option value="classroom">Classroom</option>
                  <option value="laboratory">Laboratory</option>
                  <option value="sports">Sports</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" accept="image/*" />
                <p className="text-xs text-muted-foreground">Recommended size: 1200x800px. Max file size: 5MB.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="caption">Caption</Label>
                <Textarea id="caption" placeholder="Enter image caption" rows={3} />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="featured"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="featured" className="text-sm font-normal">
                  Feature this image on homepage
                </Label>
              </div>

              <Button className="w-full">Upload Image</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gallery Images</CardTitle>
            <CardDescription>View and manage uploaded images</CardDescription>
          </CardHeader>
          <CardContent>
            <GalleryGrid />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
