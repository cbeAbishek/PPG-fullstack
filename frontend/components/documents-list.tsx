import {
  Download,
  FileText,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const documents = [
  {
    id: 1,
    title: "Academic Calendar 2023-24",
    category: "Notice",
    uploadDate: "2023-09-10",
    fileSize: "1.2 MB",
  },
  {
    id: 2,
    title: "B.Tech CSE Syllabus",
    category: "Syllabus",
    uploadDate: "2023-08-25",
    fileSize: "3.5 MB",
  },
  {
    id: 3,
    title: "Semester Examination Form",
    category: "Form",
    uploadDate: "2023-09-05",
    fileSize: "0.8 MB",
  },
  {
    id: 4,
    title: "Placement Statistics 2023",
    category: "Result",
    uploadDate: "2023-09-01",
    fileSize: "2.1 MB",
  },
];

export function DocumentsList() {
  return (
    <div className="space-y-4">
      {documents.map((document) => (
        <div
          key={document.id}
          className="flex items-start justify-between rounded-md border p-4"
        >
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 text-[#ff914d]" />
            <div>
              <p className="font-medium">{document.title}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{document.category}</span>
                <span>•</span>
                <span>{document.uploadDate}</span>
                <span>•</span>
                <span>{document.fileSize}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" title="Download">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
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
        </div>
      ))}
    </div>
  );
}
