'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext<string | null>(null);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if we already have it in sessionStorage to avoid repeated prompts/API calls
      const cachedLocation = sessionStorage.getItem('userLocation');
      if (cachedLocation) {
        setLocation(cachedLocation);
        return;
      }

      // If we previously hit a rate limit, don't keep hammering the API
      if (sessionStorage.getItem('locationApiRateLimited')) {
        return;
      }

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              // Use OpenStreetMap Nominatim API for reverse geocoding. 
              // Added email parameter to comply with Nominatim usage policy and prevent blocks.
              const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14&email=info@continentalpest.in`);
              
              if (!response.ok) {
                if (response.status === 429) {
                  console.warn('Location API rate limit exceeded. Falling back to default text.');
                  sessionStorage.setItem('locationApiRateLimited', 'true');
                } else {
                  console.warn(`Location API error: ${response.status}`);
                }
                return;
              }

              const data = await response.json();
              
              // Extract neighborhood, suburb, or city
              const area = data.address?.suburb || data.address?.neighbourhood || data.address?.city_district || data.address?.town || data.address?.city;
              if (area) {
                setLocation(area);
                sessionStorage.setItem('userLocation', area);
              }
            } catch (error) {
              console.error('Error fetching location:', error);
            }
          },
          (error) => {
            // Silently handle geolocation errors (e.g., user denied permission, timeout)
            // to prevent console errors and error overlays.
            console.warn('Geolocation unavailable or permission denied:', error.message);
          },
          { timeout: 10000, maximumAge: 300000 }
        );
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}

export function PersonalizedText({ defaultText }: { defaultText: string }) {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by rendering default text on the server
  if (!mounted) {
    return <span>{defaultText}</span>;
  }

  return <span>{location || defaultText}</span>;
}
