'use client';

import { MapPin } from 'lucide-react';

interface MapboxMapProps {
  address: string;
  latitude?: number;
  longitude?: number;
  className?: string;
}

export default function MapboxMap({ 
  address, 
  latitude = 20.3881, // San Juan del Río, Querétaro
  longitude = -99.9964,
  className = '' 
}: MapboxMapProps) {
  const encodedAddress = encodeURIComponent(address);
  
  // URL para abrir en Google Maps app/web
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  // URL para Mapbox Static Image - estilo light (blanco)
  const mapboxStaticUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+1E3A8A(${longitude},${latitude})/${longitude},${latitude},14,0/800x600@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}`;

  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted">
        {/* Imagen de mapa estático de Mapbox */}
        <img
          src={mapboxStaticUrl}
          alt={`Mapa de ubicación: ${address}`}
          className="h-full w-full object-cover"
          onError={(e) => {
            // Si falla la carga, mostrar placeholder
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Overlay con información */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity hover:opacity-100">
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <MapPin className="mx-auto mb-2 size-8 text-primary" />
            <p className="mb-1 text-sm font-medium">ACCOUR</p>
            <p className="mb-4 text-xs text-muted-foreground">{address}</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
