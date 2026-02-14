import { useEffect } from 'react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
          Van der Berg Makelaardij
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Ons Woningaanbod
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
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
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
                alt="Product Voorbeeld 1"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 right-3 shadow-sm">Nieuw</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 1</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€49,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                alt="Product Voorbeeld 2"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 2</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€79,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
                alt="Product Voorbeeld 3"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 right-3 shadow-sm">Populair</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 3</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€99,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
                alt="Product Voorbeeld 4"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 4</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€59,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format"
                alt="Product Voorbeeld 5"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 5</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€129,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format"
                alt="Product Voorbeeld 6"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Product Voorbeeld 6</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€89,99</p>
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
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Kunt u Niet Vinden Wat u Zoekt?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Meld u aan voor woningalerts en wees de eerste die het weet wanneer een passende woning op de markt komt. Of neem direct contact op - wij weten vaak van woningen voordat ze online staan.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="_self">Stel Woningalert In</a>
            </Button>
          </div>
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
      <ScrollReveal>
        <ProductsSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection2 />
      </ScrollReveal>
    </main>
  )
}
