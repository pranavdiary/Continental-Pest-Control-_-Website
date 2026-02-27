'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      {/* Top Bar - NAP & Hours */}
      <div className="bg-brand-900 text-zinc-100 py-2 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary-600" />
              123 Main Street, Nagpur, Maharashtra 440001
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              Mon-Sat: 8AM - 8PM
            </span>
          </div>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-brand-900 uppercase">
            Continental <span className="text-primary-600">Pest Control</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight text-zinc-700">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <Link href="/locations" className="hover:text-emerald-600 transition-colors">Service Areas</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center justify-center px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
            WhatsApp Chat
          </a>
          <button 
            className="md:hidden p-2 text-brand-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 font-semibold text-lg tracking-tight text-zinc-700">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Home</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Services</Link>
            <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Service Areas</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Contact</Link>
          </nav>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-3 mt-2 bg-primary-600 text-white text-base font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
            WhatsApp Chat
          </a>
        </div>
      )}
    </header>
  );
}
