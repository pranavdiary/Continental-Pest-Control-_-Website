import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, AlertTriangle, CheckCircle2, MessageCircle, Phone, Droplets, Award, MapPin, Search, Hammer, Shield } from 'lucide-react';
import { PersonalizedText } from '@/components/LocationProvider';

export const metadata = {
  title: 'Advanced Termite Control in Nagpur | Continental Pest Control',
  description: 'Professional anti-termite treatment in Nagpur. We offer guaranteed termite eradication, drill-fill-seal methods, and 5-year warranties. Book a termite inspection near me.',
};

export default function TermiteControlPage() {
  return (
    <div className="w-full bg-brand-50 min-h-screen pb-24">
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 p-4 z-50 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="https://wa.me/919876543210" className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-3 px-4 rounded-xl">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
        <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 bg-brand-900 text-white font-bold py-3 px-4 rounded-xl">
          <Phone className="w-5 h-5" /> Call Now
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Problem (Hero) */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wide uppercase border border-red-200">
                <AlertTriangle className="w-4 h-4" />
                Silent Destroyers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading text-brand-900 leading-[1.1]">
                Advanced Termite Control in <span className="text-primary-600"><PersonalizedText defaultText="Nagpur" /></span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Maharashtra&apos;s hot and humid climate creates the perfect breeding ground for subterranean termites. These silent destroyers compromise the structural integrity of your property long before they are visible. Protecting <PersonalizedText defaultText="Nagpur" /> homes from structural damage requires immediate, professional intervention.
              </p>
            </section>

            {/* Hero Image */}
            <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg border border-zinc-200">
              <Image 
                src="https://picsum.photos/1200/600?random=20" 
                alt="Professional termite inspection and treatment in Nagpur" 
                fill 
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="font-bold text-sm sm:text-base">Protecting properties with advanced thermal imaging and drill-fill-seal technology.</p>
              </div>
            </section>

            {/* Agitation (Signs of Damage) */}
            <section className="space-y-8 bg-white p-8 sm:p-10 rounded-[2rem] border border-zinc-200 shadow-sm">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-brand-900">
                  Signs of Termite Damage
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you are searching for a &quot;termite inspection near me,&quot; you might have already noticed the warning signs. Ignoring these indicators can lead to devastating repair bills that far exceed the anti-termite treatment cost.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Mud Tubes', desc: 'Pencil-sized mud tunnels on exterior or interior walls.' },
                  { title: 'Hollow Wood', desc: 'Doors, skirting boards, or furniture that sounds hollow when tapped.' },
                  { title: 'Discarded Wings', desc: 'Piles of wings near windowsills after a swarm.' },
                  { title: 'Frass (Droppings)', desc: 'Small, wood-colored pellets near wooden structures.' }
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 mt-1">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900">{sign.title}</h3>
                      <p className="text-sm text-zinc-600 mt-1">{sign.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution (Step-by-Step Process) */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                  Our Step-by-Step Treatment Process
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  We utilize a proven, scientific approach to eradicate termite colonies completely. Our methods are safe, odorless, and highly effective.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-primary-600 shrink-0">
                    <Search className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">1. Advanced Thermal Inspection</h3>
                    <p className="text-zinc-600">We use moisture meters and thermal imaging to locate hidden subterranean termite nests behind walls and under floors without unnecessary drilling.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Hammer className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">2. Drill-Fill-Seal Treatment</h3>
                    <p className="text-zinc-600">We drill precise holes at the wall-floor junction, inject premium termiticides (like Bayer or Syngenta) to create a chemical barrier, and seal them seamlessly with white cement.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">3. 5-Year Warranty & Prevention</h3>
                    <p className="text-zinc-600">Our post-construction anti-termite treatments are backed by a comprehensive 5-year warranty. We also provide actionable advice to reduce moisture and prevent future infestations.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sticky Sidebar (Trust Signals & CTA) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Lead Gen Card */}
              <div className="bg-brand-900 rounded-[2rem] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Get an Emergency Quote</h3>
                <p className="text-gray-400 mb-8">Fast response times across <PersonalizedText defaultText="Nagpur" />. Stop termite damage today.</p>
                
                <div className="space-y-4">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-primary-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-[2rem] p-8 border border-zinc-200 shadow-sm space-y-6">
                <h3 className="font-bold text-zinc-900 uppercase tracking-wider text-sm">Why Trust Us?</h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">Eco-Friendly Chemicals</p>
                      <p className="text-xs text-gray-500">Odorless, Bayer & Syngenta products.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">Licensed Professionals</p>
                      <p className="text-xs text-zinc-500">Govt. approved exterminators.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">5-Year Warranty</p>
                      <p className="text-xs text-zinc-500">Guaranteed long-term protection.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">Local Experts</p>
                      <p className="text-xs text-zinc-500">Serving <PersonalizedText defaultText="Nagpur" /> & surrounding areas.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
