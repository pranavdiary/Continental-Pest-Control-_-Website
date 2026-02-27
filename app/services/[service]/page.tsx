import Link from 'next/link';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const formattedService = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="w-full">
      <section className="bg-primary-900 text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/1920/1080?random=40')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <Link href="/services" className="text-emerald-400 text-sm font-bold uppercase tracking-wider hover:text-emerald-300 flex items-center gap-2">
              &larr; All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display">
              {formattedService} in Nagpur
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Professional {formattedService.toLowerCase()} services. Fast, safe, and guaranteed eradication for your property.
            </p>
            <div className="pt-6">
              <a href="tel:+919876543210" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-lg font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg">
                Book Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg prose-zinc max-w-none">
              <h2 className="text-3xl font-bold text-zinc-900 font-display">Expert {formattedService}</h2>
              <p>
                Dealing with pests can be stressful and hazardous to your health and property. Our specialized {formattedService.toLowerCase()} targets the root cause of the infestation to ensure complete removal and long-term prevention.
              </p>
              
              <h3 className="text-2xl font-bold text-zinc-900 mt-8">Our Approach</h3>
              <ul className="space-y-4 mt-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong>1. Inspection:</strong> We conduct a thorough assessment to identify the extent of the infestation and vulnerable areas.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong>2. Targeted Treatment:</strong> Using government-approved, eco-friendly products, we apply treatments specifically designed for your pest problem.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong>3. Prevention:</strong> We provide actionable advice and preventative measures to keep your space pest-free.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 sticky top-24 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Get a Quote Today</h3>
              <p className="text-zinc-600">
                Protect your investment. Contact us for a customized treatment plan.
              </p>
              <ul className="space-y-3 text-sm font-medium text-zinc-700 pb-4 border-b border-zinc-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Site Inspection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Guaranteed Results</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Safe & Odorless</li>
              </ul>
              <a href="tel:+919876543210" className="flex items-center justify-center w-full py-4 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors">
                Call +91 98765 43210
              </a>
              <Link href="/contact" className="flex items-center justify-center w-full py-4 bg-white text-zinc-900 border border-zinc-200 font-bold rounded-xl hover:bg-zinc-50 transition-colors">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
