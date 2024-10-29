import { ProposedChange } from "@/lib/admin/types";
import { Card } from "@/components/ui/card";

interface AdminPreviewProps {
  changes: ProposedChange;
}

export function AdminPreview({ changes }: AdminPreviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Description</h3>
        <p className="text-gray-400">{changes.description}</p>
      </div>

      <div>
        <h3 className="font-medium mb-2">Files Changed</h3>
        <div className="space-y-4">
          {changes.files.map((file, index) => (
            <Card key={index} className="bg-black/50 border-white/10 p-4">
              <div className="text-sm text-blue-400 mb-2">{file.path}</div>
              {file.diff ? (
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {file.diff.split('\n').map((line, i) => (
                    <div
                      key={i}
                      className={`${
                        line.startsWith('+') ? 'text-green-400' :
                        line.startsWith('-') ? 'text-red-400' :
                        'text-gray-400'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </pre>
              ) : (
                <pre className="text-sm text-gray-400 whitespace-pre-wrap">
                  {file.content}
                </pre>
              )}
            </Card>
          ))}
        </div>
      </div>

      {changes.images && changes.images.length > 0 && (
        <div>
          <h3 className="font-medium mb-2">Images Changed</h3>
          <div className="grid grid-cols-2 gap-4">
            {changes.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={image.path}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2 text-xs bg-black/75 text-white px-2 py-1 rounded">
                  {image.path}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}