import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & NAP */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Continental <span className="text-primary-600">Pest Control</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nagpur&apos;s premier pest control service. We protect your home and business with safe, effective, and guaranteed solutions.
          </p>
          <div className="space-y-3 text-sm font-medium">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>123 Main Street, Dharampeth<br />Nagpur, Maharashtra 440001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <a href="mailto:info@continentalpest.in" className="hover:text-white transition-colors">info@continentalpest.in</a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Core Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Termite Control', path: '/termite-control' },
              { name: 'Rodent Control', path: '/services/rodent-control' },
              { name: 'Cockroach Treatment', path: '/services/cockroach-treatment' },
              { name: 'Bed Bug Eradication', path: '/services/bed-bug-eradication' },
              { name: 'Mosquito Fogging', path: '/services/mosquito-fogging' },
              { name: 'Commercial Pest Control', path: '/services/commercial' },
            ].map((service) => (
              <li key={service.path}>
                <Link href={service.path} className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Service Areas</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Dharampeth', path: '/locations/nagpur/dharampeth' },
              { name: 'Manish Nagar', path: '/locations/nagpur/manish-nagar' },
              { name: 'Sitabuldi', path: '/locations/nagpur/sitabuldi' },
              { name: 'Wardhaman Nagar', path: '/locations/nagpur/wardhaman-nagar' },
              { name: 'Sadar', path: '/locations/nagpur/sadar' },
              { name: 'Hingna', path: '/locations/nagpur/hingna' },
            ].map((area) => (
              <li key={area.path}>
                <Link href={area.path} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & CTA */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Business Hours</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>8:00 AM - 6:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Emergency Only</span></li>
          </ul>
          <div className="pt-4">
            <a href="tel:+919876543210" className="flex items-center justify-center w-full px-4 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-sm">
              Call Now for Inspection
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-zinc-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Continental Pest Control. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-zinc-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
