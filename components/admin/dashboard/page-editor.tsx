import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PageEditorProps {
  selectedPage: string;
  changes: string;
  onPageChange: (value: string) => void;
  onChangesUpdate: (value: string) => void;
  onSubmit: () => void;
}

const pages = [
  { id: "home", label: "Homepage" },
  { id: "tennis", label: "Tennis" },
  { id: "golf", label: "Golf" },
  { id: "fitness", label: "Fitness" }
];

export function PageEditor({
  selectedPage,
  changes,
  onPageChange,
  onChangesUpdate,
  onSubmit
}: PageEditorProps) {
  return (
    <Card className="bg-black border-white/10 p-8">
      <div className="space-y-6">
        <Select value={selectedPage} onValueChange={onPageChange}>
          <SelectTrigger className="bg-black border-white/10 text-white">
            <SelectValue placeholder="Select page to edit" />
          </SelectTrigger>
          <SelectContent className="bg-black border-white/10">
            {pages.map((page) => (
              <SelectItem 
                key={page.id} 
                value={page.id}
                className="text-white hover:bg-white/10"
              >
                {page.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Textarea
          value={changes}
          onChange={(e) => onChangesUpdate(e.target.value)}
          placeholder="Describe the changes you want to make..."
          className="min-h-[200px] bg-black border-white/10 text-white"
        />

        <Button
          onClick={onSubmit}
          disabled={!selectedPage || !changes}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Submit Changes
        </Button>
      </div>
    </Card>
  );
}