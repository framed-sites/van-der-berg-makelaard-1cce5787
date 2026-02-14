import { useEffect } from 'react'
import { ArrowRight, Calendar, Star } from 'lucide-react'
import { AnimatedCounter } from '../components/ui/animated-counter'
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
          Vind Uw Thuis in het Hart van Delft
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Van der Berg Makelaardij helpt sinds 1987 gezinnen hun perfecte woning te vinden in Delft. Met diepgaande lokale kennis en een persoonlijke aanpak begeleiden wij u bij elke stap van het koop-, verkoop- of huurproces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="_self">Bekijk Woningaanbod</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="_self">Gratis Waardebepaling</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function StatsSection1() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="500+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Tevreden klanten</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="15+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Jaar ervaring</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="1000+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Projecten afgerond</div>
          </div>
          <div className="text-center space-y-2  px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="24/7" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Ondersteuning</div>
          </div>
        </div>
      </div>
    </section>
  )
}


function FeaturesSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Waarom Kiezen voor Van der Berg?
          </h2>

        </div>
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Professioneel</h3>
              <p className="text-muted-foreground leading-relaxed">Jarenlange ervaring en bewezen expertise</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format" alt="Professioneel" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Betrouwbaar</h3>
              <p className="text-muted-foreground leading-relaxed">U kunt altijd op ons rekenen</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format" alt="Betrouwbaar" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Innovatief</h3>
              <p className="text-muted-foreground leading-relaxed">Altijd op zoek naar de beste oplossingen</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format" alt="Innovatief" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Persoonlijk</h3>
              <p className="text-muted-foreground leading-relaxed">Maatwerk voor elke klant</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format" alt="Persoonlijk" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Uitgelichte Woningen</h2>
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


function TestimonialsSection4() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Wat Onze Klanten Zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">Uitstekende service en professionaliteit. Zeer tevreden met het resultaat!</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Anna de Jong</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">Snelle communicatie en geweldig resultaat. Absolute aanrader!</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  P
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Peter van Dijk</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">Fantastische ervaring van begin tot eind. Komt zeker terug.</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Maria Visser</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ContentSection5() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ontdek de Wijken van Delft</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Interactieve sectie met 6 wijkkaarten: Binnenstad (historisch centrum), TU-wijk (universiteitsbuurt), Voorhof (multicultureel, betaalbaar), Tanthof (gezinsvriendelijk), Buitenhof (groen, ruim), Vrijenban (dorps karakter). Elke kaart heeft een karakteristieke foto, gemiddelde prijsindicatie en een korte beschrijving. Klikken leidt naar de wijkdetailpagina.</p>
          </div>
          <Button asChild>
            <a href="_self">Ontdek Alle Wijken</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Ontdek de Wijken van Delft"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function CtaSection6() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Denkt u aan Verkopen?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Ontdek wat uw woning waard is met een gratis, vrijblijvende waardebepaling door een van onze gecertificeerde NVM-makelaars. Wij bezoeken uw woning, analyseren de lokale markt en bezorgen u binnen 48 uur een gedetailleerd waarderingsrapport.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="_self">Vraag Gratis Waardebepaling Aan</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


function BlogSection7() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Het Laatste Nieuws van de Delftse Woningmarkt</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
                alt="Hoe Wij Uw Bedrijf Laten Groeien"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Strategie</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-15</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Hoe Wij Uw Bedrijf Laten Groeien</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Ontdek onze bewezen strategieën voor duurzame groei.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                alt="5 Trends Die U Niet Mag Missen"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Trends</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-10</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">5 Trends Die U Niet Mag Missen</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Blijf voorop lopen met deze belangrijke ontwikkelingen in de sector.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
                alt="Succesverhaal: Een Klant aan het Woord"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Klanten</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-05</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Succesverhaal: Een Klant aan het Woord</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Lees hoe wij een klant hielpen hun doelen te bereiken.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function HomePage() {
  useEffect(() => {
    document.title = 'Home | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <StatsSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <ProductsSection3 />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection4 />
      </ScrollReveal>
      <ScrollReveal>
        <ContentSection5 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection6 />
      </ScrollReveal>
      <ScrollReveal>
        <BlogSection7 />
      </ScrollReveal>
    </main>
  )
}
