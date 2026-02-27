import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Service Areas in Nagpur | Continental Pest Control',
  description: 'We provide expert pest control services across all major neighborhoods in Nagpur, including Dharampeth, Manish Nagar, Sitabuldi, and more.',
};

const locations = [
  { id: 'dharampeth', name: 'Dharampeth' },
  { id: 'manish-nagar', name: 'Manish Nagar' },
  { id: 'sitabuldi', name: 'Sitabuldi' },
  { id: 'wardhaman-nagar', name: 'Wardhaman Nagar' },
  { id: 'sadar', name: 'Sadar' },
  { id: 'hingna', name: 'Hingna' },
];

export default function LocationsPage() {
  return (
    <div className="w-full py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-heading text-brand-900">
            Our Service Areas in Nagpur
          </h1>
          <p className="text-gray-600 text-lg">
            Rapid response pest control teams available across all major Nagpur neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link key={location.id} href={`/locations/nagpur/${location.id}`} className="group bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-brand-900">{location.name}</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
