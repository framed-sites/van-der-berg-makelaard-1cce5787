import { useEffect } from 'react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Ons Woningaanbod
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Bekijk ons complete aanbod van te koop en te huur staande woningen in Delft en omgeving. Gebruik de filters om uw perfecte woning te vinden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Aan de slag</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Meer informatie</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function ProductsSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Beschikbare Woningen</h2>
        <div className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
                alt="Charmante herenhuis"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">Nieuw</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Charmante herenhuis</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">4 slaapkamers, 150 m², Energielabel B</p>
              <p className="text-lg font-bold text-primary">€ 575.000</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                alt="Licht appartement centrum"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">Populair</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Licht appartement centrum</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">2 slaapkamers, 75 m², Energielabel A</p>
              <p className="text-lg font-bold text-primary">€ 320.000</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
                alt="Ruime villa met tuin"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Ruime villa met tuin</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">5 slaapkamers, 220 m², Energielabel A+</p>
              <p className="text-lg font-bold text-primary">€ 980.000</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
                alt="Studiowoning in Schieoevers"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Studiowoning in Schieoevers</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">1 slaapkamer/studio, 45 m², Energielabel C</p>
              <p className="text-lg font-bold text-primary">€ 210.000</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format"
                alt="Gezinswoning in Hof van Delft"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Gezinswoning in Hof van Delft</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">3 slaapkamers, 130 m², Energielabel B</p>
              <p className="text-lg font-bold text-primary">€ 495.000</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format"
                alt="Modern appartement Harnaschpolder"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Modern appartement Harnaschpolder</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">3 slaapkamers, 90 m², Energielabel A</p>
              <p className="text-lg font-bold text-primary">€ 385.000</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Kunt u Niet Vinden Wat u Zoekt?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Meld u aan voor woningalerts en wees de eerste die het weet wanneer een passende woning op de markt komt. Of neem direct contact op - wij weten vaak van woningen voordat ze online staan.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="_self">Stel Woningalert In</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


export default function ListingsPage() {
  useEffect(() => {
    document.title = 'Woningaanbod | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ProductsSection1 />
      <CtaSection2 />
    </main>
  )
}
