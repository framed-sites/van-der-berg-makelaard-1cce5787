import { useEffect } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
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
          Actueel
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Blijf op de hoogte van de Delftse woningmarkt met expertanalyses, koop- en verkooptips, wijkspotlights en nieuws van Van der Berg.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#artikelen">Ontdek Artikelen</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="/contact">Neem Contact Op</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function ContentSection1() {
  return (
    <section id="artikelen" className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Laatste Artikelen</h2>
        
        {/* Featured Article */}
        <Card className="group overflow-hidden border hover:shadow-xl transition-all duration-300 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] md:aspect-auto bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format"
                alt="Ultieme SEO Gids 2026"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-4 left-4 bg-primary">Marktanalyse</Badge>
            </div>
            <CardContent className="py-6 md:py-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <time>15 februari 2026</time>
                <span className="ml-2 text-primary font-medium">Bijgewerkt voor 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                Ultieme SEO Gids voor Vastgoed in 2026: Verhoog Uw Online Zichtbaarheid
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ontdek de nieuwste SEO-strategieën voor makelaars in 2026. Van Google's AI-gedreven zoekopdrachten tot lokale zoekoptimalisatie - leer hoe u meer potentiële kopers en verkopers bereikt. Inclusief actuele statistieken, case studies uit Delft en praktische tips die u vandaag nog kunt toepassen.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">SEO 2026</Badge>
                <Badge variant="outline">Google Trends</Badge>
                <Badge variant="outline">Lokale Marketing</Badge>
                <Badge variant="outline">AI Zoeken</Badge>
              </div>
              <Button asChild className="mt-4">
                <a href="/blog/seo-guide-2026" className="inline-flex items-center">
                  Lees het volledige artikel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80&auto=format"
                alt="React Performance Tips 2026"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Technologie</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>12 februari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                React Performance Optimalisatie in 2026: Snellere Vastgoedwebsites
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Leer de nieuwste React 19 features en performance-technieken om uw vastgoedwebsite razendsnel te maken. Praktische voorbeelden met React Server Components, Suspense boundaries en moderne caching strategieën die laadtijden met 60% verbeteren.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">React 19</Badge>
                <Badge variant="outline" className="text-xs">Performance</Badge>
                <Badge variant="outline" className="text-xs">Web Vitals</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/react-performance-tips" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
                alt="Delftse Woningmarkt Q1 2026"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Marktanalyse</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>8 februari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Delftse Woningmarkt Q1 2026: Prijzen Stabiliseren, Vraag Blijft Hoog
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Een diepgaande analyse van de Delftse woningmarkt in het eerste kwartaal van 2026. Gemiddelde verkoopprijzen per wijk, mediane tijd op de markt en voorspellingen voor het komende kwartaal.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">Q1 2026</Badge>
                <Badge variant="outline" className="text-xs">Prijzen</Badge>
                <Badge variant="outline" className="text-xs">Delft</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/delft-q1-2026" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                alt="Kooptips voor Starters 2026"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Kooptips</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>5 februari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                10 Essentiële Kooptips voor Starters in 2026
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Van financiering tot bezichtiging - alles wat starters moeten weten om hun eerste woning te kopen in de huidige markt. Met actuele hypotheekvoorwaarden en subsidieregelingen.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">Starters</Badge>
                <Badge variant="outline" className="text-xs">Kooptips</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/kooptips-starters-2026" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
                alt="Binnenstad Spotlight"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Wijk Spotlight</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>1 februari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Wijk Spotlight: Delftse Binnenstad - Charme Ontmoet Historie
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Ontdek waarom de Binnenstad de meest gewilde wijk van Delft blijft. Van grachtenhuizen tot verborgen hofjes - een complete gids met prijzen en beschikbaarheid.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">Binnenstad</Badge>
                <Badge variant="outline" className="text-xs">Wijkgids</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/binnenstad-spotlight" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
                alt="Verkooptips 2026"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Verkooptips</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>28 januari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Zo Bereidt u Uw Woning Voor op Verkoop in 2026
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Van kleine reparaties tot professionele homestaging - praktische tips om uw verkoopprijs te maximaliseren. Met checklist en tijdschema.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">Verkooptips</Badge>
                <Badge variant="outline" className="text-xs">Homestaging</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/verkoop-voorbereiding" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format"
                alt="Van der Berg Nieuws"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Bedrijfsnieuws</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>25 januari 2026</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Van der Berg Breidt Uit: Nieuwe Makelaar Versterkt Ons Team
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Wij verwelkomen Sophie Vermeulen in ons team. Met 8 jaar ervaring in de Delftse markt en specialisatie in expat-begeleiding brengt zij waardevolle expertise mee.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <Badge variant="outline" className="text-xs">Team</Badge>
                <Badge variant="outline" className="text-xs">Nieuws</Badge>
              </div>
              <Button variant="ghost" asChild className="w-full justify-between group/btn mt-2">
                <a href="/blog/team-uitbreiding" className="inline-flex items-center">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Actueel - Vastgoed Nieuws & Tips | Van der Berg Makelaardij'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blijf op de hoogte van de Delftse woningmarkt met expertanalyses, SEO-strategieën 2026, React performance tips en actuele markttrends.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Blijf op de hoogte van de Delftse woningmarkt met expertanalyses, SEO-strategieën 2026, React performance tips en actuele markttrends.'
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ContentSection1 />
      </ScrollReveal>
    </main>
  )
}
