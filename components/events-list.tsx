import Image from "next/image"
import { CalendarDays, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2023",
    date: "October 15-17, 2023",
    location: "Main Campus",
    image: "/assets/3.jpeg",
  },
  {
    id: 2,
    title: "Research Symposium",
    date: "November 5, 2023",
    location: "Auditorium",
    image: "/assets/3.jpeg",
  },
  {
    id: 3,
    title: "Industry Connect Workshop",
    date: "September 28, 2023",
    location: "Seminar Hall",
    image: "/assets/3.jpeg",
  },
]

export function EventsList() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start gap-4 rounded-md border p-4">
          <div className="relative h-16 w-24 overflow-hidden rounded-md">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{event.title}</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.location}</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
