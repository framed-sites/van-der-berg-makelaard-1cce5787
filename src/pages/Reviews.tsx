import { useEffect } from 'react'
import { Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2">
          Van der Berg Makelaardij
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Welkom bij Van der Berg Makelaardij
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


function TestimonialsSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Wat onze klanten zeggen</h2>
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


export default function ReviewsPage() {
  useEffect(() => {
    document.title = 'reviews | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <TestimonialsSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection2 />
      </ScrollReveal>
    </main>
  )
}
