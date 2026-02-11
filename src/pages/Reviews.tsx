import { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

function HeroSection0() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Welkom bij Van der Berg Makelaardij
        </h1>
        <p className="text-lg text-muted-foreground">
          Wij helpen u uw doelen te bereiken met professionele oplossingen.
        </p>
        <Button size="lg" asChild>
          <a href="#">Aan de slag</a>
        </Button>
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
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Van der Berg Makelaardij heeft ons fantastisch geholpen bij de verkoop van ons appartement. De communicatie was helder en ze hebben onze verwachtingen overtroffen!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Mevr. J. Bakker</p>
                  <p className="text-xs text-muted-foreground">Verkoper</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Dankzij Van der Berg Makelaardij hebben we ons droomhuis gevonden. Hun expertise en geduld maakten het proces veel minder stressvol.</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  D
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Dhr. P. de Vries</p>
                  <p className="text-xs text-muted-foreground">Koper</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">De begeleiding was van begin tot eind uitstekend. Professioneel, vriendelijk en altijd bereikbaar voor vragen. Een absolute aanrader!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  F
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Familie Jansen</p>
                  <p className="text-xs text-muted-foreground">Verkoper &amp; Koper</p>
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
      <TestimonialsSection1 />
      <CtaSection2 />
    </main>
  )
}
