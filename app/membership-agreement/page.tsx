"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MembershipAgreementPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MEMBERSHIP AGREEMENT</h1>
          <p className="text-gray-400 text-lg">
            Review our membership terms and conditions for WSC facilities and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Membership Benefits</h2>
            <div className="space-y-4">
              {[
                "Access to all WSC facilities during operating hours",
                "Priority booking for courts and facilities",
                "Member-exclusive rates on services and programs",
                "Access to member-only events and tournaments",
                "Complimentary fitness assessment",
                "Guest privileges (fees apply)",
                "Locker room access and amenities",
                "Pro shop discounts"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-8">
            {[
              {
                title: "Terms of Service",
                content: "Members agree to follow all club rules and regulations..."
              },
              {
                title: "Payment Terms",
                content: "Monthly dues are processed on the 1st of each month..."
              },
              {
                title: "Cancellation Policy",
                content: "30-day written notice required for membership cancellation..."
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-400">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Accept & Continue</Button>
          </div>
        </div>
      </div>
    </main>
  );
}