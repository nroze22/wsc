import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">WSC</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <p>15327 140th Pl NE</p>
                <p>Woodinville, WA 98072</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p>Front Desk: (425) 487-1090</p>
                  <p>Golf Desk: (425) 485-7319</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p>info@woodinvillesportsclub.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Hours</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Tennis</h4>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4" />
                  <div>
                    <p>Weekdays: 6:30AM - 11:00PM</p>
                    <p>Weekends: 7:00AM - 10:00PM</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gym</h4>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4" />
                  <div>
                    <p>Weekdays: 5:45AM - 10:00PM</p>
                    <p>Weekends: 7:00AM - 10:00PM</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Golf</h4>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4" />
                  <p>Everyday: 9:00AM - 10:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-xl font-bold mb-6">Sports</h3>
            <ul className="space-y-2">
              <li><Link href="/tennis" className="hover:text-blue-400 transition-colors">Tennis</Link></li>
              <li><Link href="/golf" className="hover:text-blue-400 transition-colors">Golf</Link></li>
              <li><Link href="/fitness" className="hover:text-blue-400 transition-colors">Fitness</Link></li>
              <li><Link href="/pickleball" className="hover:text-blue-400 transition-colors">Pickleball</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/account" className="hover:text-blue-400 transition-colors">My Account</Link></li>
              <li><Link href="/membership" className="hover:text-blue-400 transition-colors">Membership Agreement</Link></li>
              <li><Link href="/policies" className="hover:text-blue-400 transition-colors">Membership Policies</Link></li>
              <li><Link href="/covid" className="hover:text-blue-400 transition-colors">COVID-19 Guidelines</Link></li>
              <li><Link href="/areas" className="hover:text-blue-400 transition-colors">Areas We Serve</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition-colors">Admin</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-gray-400">
          <p>© 2024 Woodinville Sports Club. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}