import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Bug, Rat, Home, Building2, CheckCircle2, ArrowRight, Star, MessageCircle, HelpCircle, MapPin, Search, Crosshair, Phone } from 'lucide-react';
import { PersonalizedText } from '@/components/LocationProvider';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Geolocation Banner */}
      <div className="bg-primary-900 text-white text-sm font-medium py-2.5 text-center px-4 tracking-wide">
        📍 Fast dispatch teams currently operating in <span className="font-bold text-primary-600"><PersonalizedText defaultText="Nagpur" /></span>.
      </div>

      {/* Mobile-First Background Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image 
          src="https://i.postimg.cc/4dKMLhg1/Hero-Section-Image.png" 
          alt="Pest Control Professional" 
          fill 
          priority 
          className="object-cover object-center -z-10" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/40 md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent -z-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-12 pb-20">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wide uppercase border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              The Best Pest Control in Nagpur
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter font-display text-brand-900 leading-[1.1]">
              Eradicate Pests. <br />
              <span className="text-emerald-600">Reclaim Your Home.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl font-medium">
              Looking for reliable residential pest control in <PersonalizedText defaultText="Nagpur" />? We provide fast, safe, and guaranteed extermination services. Don&apos;t let pests take over—get a free inspection today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/20">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Social Proof (Above the Fold) */}
            <div className="pt-6">
              <p className="text-slate-800 font-bold flex items-center gap-2">
                <span className="text-amber-500 tracking-widest text-lg">⭐⭐⭐⭐⭐</span> 
                4.8/5 Rating from 120+ Local Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Customer Concern */}
      <section className="py-16 bg-primary-50 text-brand-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight font-display">
            Worried About Toxic Chemicals Around Your Family?
          </h2>
          <p className="text-lg text-emerald-100/90 max-w-3xl mx-auto leading-relaxed">
            Your family&apos;s safety is our #1 priority. We exclusively use government-approved, eco-friendly, and odorless products from trusted brands like Bayer and Syngenta. Our targeted treatments eradicate pests completely while remaining 100% safe for children and pets once dry.
          </p>
        </div>
      </section>

      {/* Trust & Partners Strip */}
      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Trusted by & Using Premium Products</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale">
            <div className="flex items-center gap-2 font-black text-xl text-zinc-800"><ShieldCheck className="w-6 h-6"/> ISO 9001</div>
            <div className="flex items-center gap-2 font-black text-xl text-zinc-800">Bayer</div>
            <div className="flex items-center gap-2 font-black text-xl text-zinc-800">syngenta</div>
            <div className="flex items-center gap-2 font-black text-xl text-zinc-800"><CheckCircle2 className="w-6 h-6"/> Govt. Approved</div>
            <div className="flex items-center gap-2 font-black text-xl text-zinc-800">100% Pet Safe</div>
          </div>
        </div>
      </section>

      {/* Top 3 Services Overview */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-zinc-900">
              Our Top-Rated Pest Solutions
            </h2>
            <p className="text-zinc-600 text-lg">
              We utilize advanced, eco-friendly methods to eliminate pests at the source. Whether you need an exterminator for your <PersonalizedText defaultText="Manish Nagar" /> apartment or commercial pest management in Sitabuldi, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Termite Control */}
            <Link href="/termite-control" className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-zinc-200 hover:shadow-md transition-all flex flex-col justify-between min-h-[320px]">
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  <Bug className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Anti-Termite Treatment</h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  Protect your property&apos;s structural integrity with our deep-soil and wood-borer termite eradication systems. 5-year warranty included.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-emerald-600 font-bold mt-8 group-hover:gap-3 transition-all">
                Explore Termite Solutions <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Residential */}
            <Link href="/services/residential" className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-zinc-200 hover:shadow-md transition-all flex flex-col justify-between min-h-[320px]">
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  <Home className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Residential Pest Control</h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  Comprehensive home protection against cockroaches, ants, spiders, and rodents. Safe for children and pets.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-emerald-600 font-bold mt-8 group-hover:gap-3 transition-all">
                View Home Packages <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Commercial */}
            <Link href="/services/commercial" className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[320px]">
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Commercial Management</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Discreet, compliant, and highly effective pest control for restaurants, offices, and warehouses across Nagpur.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-emerald-400 font-bold mt-8 group-hover:gap-3 transition-all">
                Get Commercial Quote <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pests We Eradicate Grid */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-zinc-900">
              Comprehensive Pest Eradication
            </h2>
            <p className="text-zinc-600 text-lg">
              From structural damage to health risks, we handle Nagpur&apos;s most stubborn pests with specialized, targeted treatments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Termites', desc: 'Deep-soil & wood treatments', icon: Bug },
              { name: 'Cockroaches', desc: 'Gel baiting systems', icon: Bug },
              { name: 'Rodents', desc: 'Trapping & bait stations', icon: Rat },
              { name: 'Bed Bugs', desc: 'Chemical & heat treatments', icon: Bug },
              { name: 'Mosquitoes', desc: 'Fogging & source reduction', icon: Bug },
              { name: 'Ants', desc: 'Colony eradication', icon: Bug },
              { name: 'Wood Borers', desc: 'Injection treatments', icon: Bug },
              { name: 'Spiders', desc: 'Web removal & spraying', icon: Bug },
            ].map((pest, i) => {
              const Icon = pest.icon;
              return (
                <div key={i} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group">
                  <Icon className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-zinc-900 text-lg">{pest.name}</h3>
                  <p className="text-sm text-zinc-500 mt-1">{pest.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust Signals */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-zinc-900">
              Why Nagpur Trusts <br />Continental Pest Control
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Nagpur&apos;s unique climate brings specific pest challenges. We don&apos;t just spray chemicals; we implement integrated pest management (IPM) strategies to ensure long-term eradication and safety for your family and pets.
            </p>
            <ul className="space-y-4">
              {[
                'Government Approved & Certified Technicians',
                'Eco-Friendly, Odorless Chemicals (Bayer/Syngenta)',
                '100% Satisfaction Guarantee on All Services',
                'Same-Day Emergency Response in Nagpur'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-zinc-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                Chat with our local experts <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3] bg-zinc-100">
             <Image src="https://picsum.photos/800/600?random=10" fill alt="Professional pest control technician inspecting a home in Nagpur" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 border border-black/5 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 bg-primary-50 text-brand-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display">
              Our Proven 3-Step Process
            </h2>
            <p className="text-zinc-400 text-lg">
              We don&apos;t just treat the symptoms; we eliminate the root cause of your pest problems to ensure they never return.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-zinc-800" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center text-emerald-400 mb-4">
                <Search className="w-10 h-10" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm -mt-10 mb-2 ring-4 ring-zinc-950">1</div>
              <h3 className="text-2xl font-bold">Inspect & Identify</h3>
              <p className="text-zinc-400 leading-relaxed">
                We conduct a rigorous inspection of your property using advanced tools to locate hidden nests and entry points.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center text-emerald-400 mb-4">
                <Crosshair className="w-10 h-10" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm -mt-10 mb-2 ring-4 ring-zinc-950">2</div>
              <h3 className="text-2xl font-bold">Targeted Treatment</h3>
              <p className="text-zinc-400 leading-relaxed">
                We apply eco-friendly, government-approved treatments (Bayer/Syngenta) specifically formulated for the identified pest species.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm -mt-10 mb-2 ring-4 ring-zinc-950">3</div>
              <h3 className="text-2xl font-bold">Long-Term Prevention</h3>
              <p className="text-zinc-400 leading-relaxed">
                We seal entry points, create chemical barriers, and provide actionable advice to ensure your home remains pest-free for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-zinc-900">
              Loved by Nagpur Residents
            </h2>
            <p className="text-zinc-600 text-lg">
              Don&apos;t just take our word for it. See what your neighbors are saying about our pest control services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic leading-relaxed">
                &quot;We had a severe termite problem in our Dharampeth bungalow. Continental Pest Control responded the same day, explained the process clearly, and eradicated the issue completely. Highly recommended!&quot;
              </p>
              <div className="pt-4 border-t border-zinc-100">
                <p className="font-bold text-zinc-900">Rajesh K.</p>
                <p className="text-sm text-zinc-500">Dharampeth, Nagpur</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic leading-relaxed">
                &quot;The best residential pest control in Nagpur. We use them for our apartment in Manish Nagar for cockroach and ant treatments. The chemicals are truly odorless and safe for our toddler.&quot;
              </p>
              <div className="pt-4 border-t border-zinc-100">
                <p className="font-bold text-zinc-900">Priya M.</p>
                <p className="text-sm text-zinc-500">Manish Nagar, Nagpur</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic leading-relaxed">
                &quot;Running a restaurant in Sadar means we can&apos;t take chances with pests. Continental handles our commercial pest management discreetly and effectively. Five stars for their professionalism.&quot;
              </p>
              <div className="pt-4 border-t border-zinc-100">
                <p className="font-bold text-zinc-900">Amit S.</p>
                <p className="text-sm text-zinc-500">Sadar, Nagpur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Schema Ready) */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-lg">
              Common questions about our pest control services in Nagpur.
            </p>
          </div>

          <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <h3 itemProp="name" className="text-xl font-bold text-zinc-900 mb-3">Is your pest control treatment safe for kids and pets?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-zinc-600 leading-relaxed">
                  Yes, absolutely. We use government-approved, eco-friendly, and odorless chemicals from trusted brands like Bayer and Syngenta. Our residential pest control treatments in Nagpur are designed to be 100% safe for your family and pets once the application dries.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <h3 itemProp="name" className="text-xl font-bold text-zinc-900 mb-3">Which areas in Nagpur do you serve?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-zinc-600 leading-relaxed">
                  We provide rapid-response pest control services across all major neighborhoods in Nagpur, including Dharampeth, Sadar, Manish Nagar, Sitabuldi, Wardhaman Nagar, Hingna, and Civil Lines.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <h3 itemProp="name" className="text-xl font-bold text-zinc-900 mb-3">Do you offer a warranty on termite control?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-zinc-600 leading-relaxed">
                  Yes! Our post-construction anti-termite treatments come with a comprehensive 5-year warranty. If termites return within the warranty period, we will re-treat the affected area at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperlocal CTA Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?random=11')] bg-cover bg-center mix-blend-overlay" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800/50 text-emerald-400 mb-4 border border-emerald-700">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display">
            Need Pest Control Near You in Nagpur?
          </h2>
          <p className="text-xl text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
            From the bustling streets of Sitabuldi to the quiet lanes of <PersonalizedText defaultText="Dharampeth" /> and Sadar, our rapid-response exterminators are ready to inspect and treat your property today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 text-lg font-bold rounded-xl hover:bg-zinc-100 transition-colors shadow-xl">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white text-lg font-bold rounded-xl hover:bg-emerald-700 transition-colors border border-emerald-700">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
