import Link from 'next/link';
import { ShieldCheck, Bug, Rat, Building2, ArrowRight, Leaf, Droplets, Flame } from 'lucide-react';
import { PersonalizedText } from '@/components/LocationProvider';

export const metadata = {
  title: 'Pest Control Services | Continental Pest Control',
  description: 'Explore our comprehensive pest control services including termite, rodent, cockroach, and commercial pest management.',
};

export default function ServicesPage() {
  return (
    <div className="w-full py-24 bg-brand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            Comprehensive Protection
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading text-brand-900 leading-[1.1]">
            Expert Pest Eradication in <br className="hidden sm:block" />
            <span className="text-primary-600"><PersonalizedText defaultText="Nagpur" /></span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            We utilize advanced, eco-friendly methods to eliminate pests at the source. Select a service below to learn how we can protect your property and family.
          </p>
        </div>

        {/* Bento-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* 1. Termite Control (Large Featured Card) */}
          <Link 
            href="/termite-control" 
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Bug className="w-64 h-64" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-inner">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-brand-900">
                  Targeted Termite Defense in <PersonalizedText defaultText="Your Area" />
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Worried about silent structural damage? We utilize advanced thermal imaging and deep-soil termiticides to eliminate colonies at the source, backed by a 5-year warranty.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-10">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white font-bold rounded-xl group-hover:bg-primary-600 transition-colors">
                Book Termite Inspection <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* 2. Rodent Removal (Medium Card) */}
          <Link 
            href="/services/rodent-control" 
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-1 lg:col-span-2 flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-brand-900 rounded-xl flex items-center justify-center text-primary-600">
                <Rat className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-white">Rapid Rodent Removal</h2>
                <p className="text-gray-400 leading-relaxed">
                  Concerned about disease and chewed wires? Our baiting and trapping strategies eradicate rats and mice fast while permanently sealing entry points.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-bold rounded-xl group-hover:bg-primary-600 transition-colors backdrop-blur-sm">
                Get a Rodent Quote <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* 3. Cockroach Treatment (Medium Card) */}
          <Link 
            href="/services/cockroach-treatment" 
            className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 md:col-span-1 lg:col-span-2 flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Advanced Cockroach Treatment</h2>
                <p className="text-zinc-600 leading-relaxed">
                  Tired of roaches contaminating your kitchen? We apply long-lasting gel baits and insect growth regulators to break the breeding cycle completely.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <span className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                Schedule Roach Treatment <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* 4. Commercial Pest Control (Wide Card) */}
          <Link 
            href="/services/commercial" 
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-900 to-emerald-950 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-3 lg:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold tracking-wide uppercase backdrop-blur-md border border-white/10">
                <Building2 className="w-4 h-4" />
                B2B Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Commercial Pest Control in <PersonalizedText defaultText="Nagpur" />
              </h2>
              <p className="text-emerald-100/80 text-lg leading-relaxed">
                Failing health inspections due to pests? We provide discreet, compliant, and highly effective pest management for restaurants, offices, and warehouses.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 text-lg font-bold rounded-xl group-hover:bg-emerald-50 transition-colors shadow-lg">
                Request Commercial Audit
              </span>
            </div>
          </Link>

          {/* 5. Bed Bug Eradication */}
          <Link 
            href="/services/bed-bug-eradication" 
            className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 md:col-span-1 lg:col-span-2 flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                <Flame className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Complete Bed Bug Eradication</h2>
                <p className="text-zinc-600 leading-relaxed">
                  Losing sleep over itchy bites? Our chemical and heat treatments penetrate deep into furniture to eliminate bed bugs at all life stages.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <span className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                Get Relief Today <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* 6. Mosquito Fogging */}
          <Link 
            href="/services/mosquito-fogging" 
            className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 md:col-span-2 lg:col-span-2 flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Mosquito Fogging & Source Reduction</h2>
                <p className="text-zinc-600 leading-relaxed">
                  Afraid of vector-borne diseases like Dengue? We identify and eliminate breeding sites alongside comprehensive outdoor fogging for long-lasting comfort.
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-50 text-zinc-900 font-bold rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                Book Mosquito Control <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
