"use client";

import { User, Settings, CreditCard, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MY ACCOUNT</h1>
          <p className="text-gray-400 text-lg">
            Manage your membership, bookings, and preferences all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: User,
              title: "PROFILE",
              description: "Update your personal information and preferences",
              action: "Edit Profile"
            },
            {
              icon: Settings,
              title: "PREFERENCES",
              description: "Customize your booking and notification settings",
              action: "Manage Settings"
            },
            {
              icon: CreditCard,
              title: "BILLING",
              description: "View and manage your payment methods and history",
              action: "View Billing"
            },
            {
              icon: History,
              title: "BOOKINGS",
              description: "Track your upcoming and past facility reservations",
              action: "View History"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-white/5 border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-full bg-blue-500/10">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <Button>{item.action}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}