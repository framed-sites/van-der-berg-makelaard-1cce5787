import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

interface Property {
  id: number
  address: string
  price: number
  latitude?: number
  longitude?: number
}

interface MapProps {
  className?: string
}

export function Map({ className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch properties from API
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('/api/propertys?limit=100')
        const data = await response.json()
        setProperties(data.data || [])
      } catch (error) {
        console.error('Failed to fetch properties:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProperties()
  }, [])

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Hilversum coordinates
    const hilversumLat = 52.2222
    const hilversumLng = 5.1732

    const map = L.map(mapRef.current).setView([hilversumLat, hilversumLng], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Add property markers
  useEffect(() => {
    if (!mapInstanceRef.current || loading) return

    const map = mapInstanceRef.current
    const markers: L.Marker[] = []

    // Default Hilversum area coordinates if properties don't have lat/lng
    const defaultLocations = [
      { lat: 52.2222, lng: 5.1732 },
      { lat: 52.2250, lng: 5.1800 },
      { lat: 52.2180, lng: 5.1650 },
      { lat: 52.2290, lng: 5.1700 },
      { lat: 52.2150, lng: 5.1780 },
      { lat: 52.2270, lng: 5.1650 },
    ]

    properties.forEach((property, index) => {
      const lat = property.latitude || defaultLocations[index % defaultLocations.length].lat
      const lng = property.longitude || defaultLocations[index % defaultLocations.length].lng

      const marker = L.marker([lat, lng]).addTo(map)

      const popupContent = `
        <div class="p-2">
          <h3 class="font-semibold text-sm mb-1">${property.address || `Woning ${property.id}`}</h3>
          <p class="text-primary font-bold">€${property.price?.toLocaleString() || 'Prijs op aanvraag'}</p>
          <a href="/woningaanbod" class="text-xs text-primary hover:underline">Bekijk details →</a>
        </div>
      `

      marker.bindPopup(popupContent)
      markers.push(marker)
    })

    return () => {
      markers.forEach(marker => marker.remove())
    }
  }, [properties, loading])

  return (
    <div className={className}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
          <div className="text-sm text-muted-foreground">Woningen laden...</div>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-lg" />
    </div>
  )
}
