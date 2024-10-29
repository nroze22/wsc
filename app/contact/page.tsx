"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">GET IN TOUCH</h1>
          <p className="text-gray-400 text-lg">
            Have questions? We're here to help. Contact our team for membership
            inquiries, facility information, or general questions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Phone,
              title: "CALL US",
              details: ["Front Desk: (425) 487-1090", "Golf Desk: (425) 485-7319"],
              action: "Call Now"
            },
            {
              icon: Mail,
              title: "EMAIL US",
              details: ["info@woodinvillesportsclub.com", "Response within 24 hours"],
              action: "Send Email"
            },
            {
              icon: MapPin,
              title: "VISIT US",
              details: ["15327 140th Pl NE", "Woodinville, WA 98072"],
              action: "Get Directions"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-500/10 mb-6">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-400 mb-2">{detail}</p>
              ))}
              <Button className="mt-6">{item.action}</Button>
            </div>
          ))}
        </div>

        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.925528067669!2d-122.15!3d47.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQzJzQ4LjAiTiAxMjLCsDA5JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}