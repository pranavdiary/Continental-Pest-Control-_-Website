import Image from 'next/image';
import { MessageCircle, Phone, MapPin, Clock, Car, Send } from 'lucide-react';
import { PersonalizedText } from '@/components/LocationProvider';

export const metadata = {
  title: 'Contact Continental Pest Control | Nagpur Exterminators',
  description: 'Get an emergency pest control quote in Nagpur. Visit our Dharampeth office, call us, or chat on WhatsApp for immediate termite and pest eradication.',
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: 'Continental Pest Control',
    image: 'https://picsum.photos/800/600?random=30',
    url: 'https://continentalpest.in',
    telephone: '+919876543210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street, Dharampeth',
      addressLocality: 'Nagpur',
      addressRegion: 'MH',
      postalCode: '440001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1384,
      longitude: 79.0617
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00'
      }
    ]
  };

  return (
    <div className="w-full bg-brand-50 min-h-screen py-24">
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading text-brand-900 leading-[1.1]">
            Get Emergency Pest Control in <span className="text-primary-600"><PersonalizedText defaultText="Your Area" /></span> & Across Nagpur
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fast response times, guaranteed eradication, and transparent pricing. Contact our local experts today to reclaim your property.
          </p>
        </div>

        {/* Split-Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column (Action) */}
          <div className="space-y-8">
            
            {/* High-Contrast Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-primary-600 hover:bg-primary-600 text-white font-bold rounded-2xl transition-colors shadow-lg shadow-emerald-900/20">
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-3 w-full py-5 bg-brand-900 hover:bg-brand-900 text-white font-bold rounded-2xl transition-colors shadow-lg">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>

            {/* Clean Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-zinc-200 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-900">Request a Free Quote</h2>
                <p className="text-gray-500 mt-2">Fill out the form below and our team will get back to you within 15 minutes.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-700">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-brand-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-zinc-700">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-zinc-700">Pest Issue</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none" required>
                    <option value="">Select a service...</option>
                    <option value="termite">Termite Control</option>
                    <option value="cockroach">Cockroach Treatment</option>
                    <option value="rodent">Rodent Removal</option>
                    <option value="bedbug">Bed Bug Eradication</option>
                    <option value="commercial">Commercial Pest Control</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-700">Additional Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none" placeholder="Tell us about the signs of pests you've noticed..."></textarea>
                </div>

                <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-primary-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
                  Send Request <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Trust & NAP) */}
          <div className="space-y-8">
            
            {/* SEO-Safe Visual */}
            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm border border-zinc-200">
              <Image 
                src="https://picsum.photos/800/600?random=30" 
                alt="Continental Pest Control team office in Nagpur" 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-bold text-white">Visit Our Office</h2>
                <p className="text-primary-600 font-medium mt-1">Ready to deploy across Nagpur</p>
              </div>
            </div>

            {/* Exact NAP Data & Driving Directions */}
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-zinc-900">Headquarters</h3>
                      <p className="text-gray-600 mt-1">
                        Continental Pest Control<br />
                        123 Main Street, Dharampeth<br />
                        Nagpur, Maharashtra 440001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-zinc-900">Driving Directions</h3>
                      <p className="text-zinc-600 mt-1 text-sm">
                        Located near Traffic Park in Dharampeth, just 5 minutes from West High Court Road. Free parking available for clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-zinc-900">Contact</h3>
                      <p className="text-zinc-600 mt-1">
                        +91 98765 43210<br />
                        info@continentalpest.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-zinc-900">Business Hours</h3>
                      <p className="text-zinc-600 mt-1 text-sm">
                        Mon - Fri: 8:00 AM - 8:00 PM<br />
                        Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Business Profile Map Embed */}
              <div className="w-full h-64 rounded-xl overflow-hidden border border-zinc-200 bg-brand-50 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709462551!2d78.9798246415707!3d21.16108590632298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Continental Pest Control Nagpur Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
