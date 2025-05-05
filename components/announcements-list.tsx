import { Megaphone, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const announcements = [
  {
    id: 1,
    title: "Admission Open for 2024-25",
    category: "Admission",
    date: "2023-09-15",
    featured: true,
  },
  {
    id: 2,
    title: "Campus Recruitment Drive",
    category: "Placement",
    date: "2023-09-12",
    featured: false,
  },
  {
    id: 3,
    title: "Faculty Development Program",
    category: "Academic",
    date: "2023-09-08",
    featured: false,
  },
  {
    id: 4,
    title: "Mid-Term Examination Schedule",
    category: "Academic",
    date: "2023-09-05",
    featured: true,
  },
];

export function AnnouncementsList() {
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="flex items-start justify-between rounded-md border p-4"
        >
          <div className="flex items-start gap-3">
            <Megaphone className="mt-0.5 h-5 w-5 text-[#ff914d]" />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{announcement.title}</p>
                {announcement.featured && (
                  <span className="rounded-full bg-[#ff914d]/10 px-2 py-0.5 text-xs font-medium text-[#ff914d]">
                    Featured
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{announcement.category}</span>
                <span>•</span>
                <span>{announcement.date}</span>
              </div>
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
  );
}
