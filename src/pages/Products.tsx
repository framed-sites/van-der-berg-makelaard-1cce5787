import { useEffect } from 'react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2">
          framed-dev
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Welkom bij framed-dev
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Wij helpen u uw doelen te bereiken met professionele oplossingen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button size="lg" asChild>
            <a href="#">Aan de slag</a>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Products</h2>
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
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Klaar om te beginnen?</h2>
        <p className="text-lg text-muted-foreground">Neem vandaag nog contact met ons op.</p>
        <Button size="lg" asChild>
          <a href="#">Neem contact op</a>
        </Button>
      </div>
    </section>
  )
}


export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Products | framed-dev'
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
