import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
      <div className="w-full max-w-md rounded-lg border bg-card p-8 shadow-lg">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="College Logo"
            width={60}
            height={60}
            className="rounded"
          />
          <h1 className="mt-4 text-2xl font-bold">Admin Login</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter your credentials to access the admin dashboard
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="admin@engineeringcollege.edu" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>

          <Button className="w-full" asChild>
            <Link href="/admin/dashboard">Login</Link>
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/" className="text-primary hover:underline">
            Back to Website
          </Link>
        </div>
      </div>
    </div>
  )
}
