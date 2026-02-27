import Link from 'next/link';
import { MapPin, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export default async function NeighborhoodPage({ params }: { params: Promise<{ neighborhood: string }> }) {
  const { neighborhood } = await params;
  const formattedNeighborhood = neighborhood.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="w-full">
      <section className="bg-primary-900 text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?random=50')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-400 text-sm font-bold tracking-wide uppercase backdrop-blur-md border border-white/10">
            <MapPin className="w-4 h-4" />
            Serving {formattedNeighborhood}, Nagpur
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display max-w-4xl mx-auto">
            Expert Pest Control in {formattedNeighborhood}
          </h1>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Continental Pest Control provides rapid, reliable, and guaranteed pest eradication services for residential and commercial properties in {formattedNeighborhood}.
          </p>
          <div className="pt-8">
            <a href="tel:+919876543210" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-lg font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg">
              Call Local Team: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-zinc-900 font-display">
              Your Local Exterminators in {formattedNeighborhood}
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We understand the unique pest challenges in {formattedNeighborhood}, from seasonal mosquito swarms to persistent cockroach issues. Our local teams are equipped to handle any infestation quickly and efficiently.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900">Services Popular in {formattedNeighborhood}:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Anti-Termite Treatment',
                  'Cockroach Gel Treatment',
                  'Rodent Control',
                  'Mosquito Fogging',
                  'Bed Bug Eradication',
                  'Commercial Kitchen Pest Control'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-zinc-800 font-medium text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
               <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                Book an inspection in {formattedNeighborhood} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 sm:p-12 rounded-3xl border border-zinc-200 relative">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-black text-emerald-600">4.9</div>
                <div className="flex justify-center text-amber-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Local Reviews</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                </div>
                <p className="text-zinc-600 italic">&quot;Excellent service! They resolved the pest issue in our {formattedNeighborhood} property quickly and professionally. Highly recommended.&quot;</p>
                <p className="text-sm font-bold text-zinc-900">- Local Resident, {formattedNeighborhood}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
