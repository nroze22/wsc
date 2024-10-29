'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Key, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { AdminAuth } from "@/components/admin/auth";

export default function AdminSettings() {
  const [apiKey, setApiKey] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedKey = localStorage.getItem("wsc_gpt_key");
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem("wsc_gpt_key", apiKey);
      toast.success("API key saved successfully");
    } catch (error) {
      toast.error("Failed to save API key");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminAuth>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Settings</h1>
            <Button 
              variant="outline"
              onClick={() => router.push("/admin/dashboard")}
              className="text-white border-white/10 hover:bg-white/10"
            >
              Back to Dashboard
            </Button>
          </div>

          <Card className="bg-black border-white/10 p-8 max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Key className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold">OpenAI API Key</h2>
                <p className="text-gray-400">
                  Enter your GPT-4 API key to enable AI-powered website management
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your OpenAI API key"
                  className="bg-black border-white/10"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Your API key is stored securely in your browser's local storage
                </p>
              </div>

              <Button
                onClick={handleSave}
                disabled={isSaving || !apiKey}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isSaving ? (
                  "Saving..."
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save API Key
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </AdminAuth>
  );
}