import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AdminHeader } from "@/components/admin-header"
import { DocumentsList } from "@/components/documents-list"

export default function Documents() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Documents" description="Upload and manage documents for the college website" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Document</CardTitle>
            <CardDescription>Add a new document to the website</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter document title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select category</option>
                  <option value="syllabus">Syllabus</option>
                  <option value="notice">Notice</option>
                  <option value="result">Result</option>
                  <option value="form">Form</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Document File (PDF)</Label>
                <Input id="file" type="file" accept=".pdf" />
                <p className="text-xs text-muted-foreground">Max file size: 10MB. Only PDF files are accepted.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input id="description" placeholder="Brief description of the document" />
              </div>

              <Button className="w-full">Upload Document</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>View and manage uploaded documents</CardDescription>
          </CardHeader>
          <CardContent>
            <DocumentsList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
