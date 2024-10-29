"use client";

import { Shield, Clock, Users, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">CLUB POLICIES</h1>
          <p className="text-gray-400 text-lg">
            Important guidelines and policies for all WSC members and guests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "FACILITY RULES",
              items: [
                "Proper athletic attire required",
                "Non-marking shoes only",
                "No outside food or beverages",
                "Follow equipment usage guidelines"
              ]
            },
            {
              icon: Clock,
              title: "BOOKING POLICIES",
              items: [
                "24-hour cancellation notice",
                "Maximum 2-hour reservations",
                "7-day advance booking window",
                "No-show fees apply"
              ]
            },
            {
              icon: Users,
              title: "GUEST POLICIES",
              items: [
                "Members must accompany guests",
                "Guest fees required",
                "Limited to 3 guests per visit",
                "Guest waiver required"
              ]
            },
            {
              icon: AlertCircle,
              title: "SAFETY GUIDELINES",
              items: [
                "Report injuries immediately",
                "Follow posted safety rules",
                "No unauthorized coaching",
                "Emergency procedures posted"
              ]
            }
          ].map((policy, index) => (
            <Card key={index} className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <policy.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">{policy.title}</h3>
              </div>
              <ul className="space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400">
            These policies are subject to change. Members will be notified of any updates
            via email and posted notices at the facility.
          </p>
        </div>
      </div>
    </main>
  );
}