import Image from "next/image";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const galleryImages = [
  {
    id: 1,
    title: "Campus Main Building",
    category: "Campus",
    image: "/assets/3.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Library",
    category: "Campus",
    image: "/assets/1.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Clutural Event",
    category: "Annual Day",
    image: "/assets/2.jpeg",
    featured: true,
  },
  {
    id: 4,
    title: "Sports Complex",
    category: "Sports",
    image: "/assets/4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Annual Day Celebration",
    category: "Events",
    image: "/assets/5.jpeg",
    featured: true,
  },
  {
    id: 6,
    title: "Seminar Hall",
    category: "Seminar",
    image: "/assets/6.jpg",
    featured: false,
  },
];

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-md border"
        >
          <div className="relative h-32 w-full">
            <Image
              src={image.image || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium truncate">{image.title}</p>
                <p className="text-xs text-muted-foreground">
                  {image.category}
                </p>
              </div>
              {image.featured && (
                <span className="rounded-full bg-[#ff914d]/10 px-2 py-0.5 text-xs font-medium text-[#ff914d]">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="h-8 w-8">
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
        </div>
      ))}
    </div>
  );
}
