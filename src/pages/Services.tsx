import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'
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
          Onze Diensten
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Van de eerste bezichtiging tot de laatste sleuteloverdracht biedt Van der Berg uitgebreide makelaarsdiensten op maat.
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


function ContentSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Wat Wij Bieden</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Diensten weergegeven als kaarten met iconen (zie EN voor details)</p>
          </div>
          <Button asChild>
            <a href="_self">Neem Contact Op</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Wat Wij Bieden"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function FaqSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Veelgestelde Vragen Over Onze Diensten</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Vind snel antwoord op uw vragen</p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-0" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Hoe kan ik contact opnemen?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              U kunt ons bereiken via het contactformulier, e-mail of telefoon. Wij reageren doorgaans binnen 24 uur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Wat zijn de kosten?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Onze tarieven zijn afhankelijk van uw specifieke behoeften. Neem contact met ons op voor een offerte op maat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Hoe lang duurt het proces?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              De doorlooptijd varieert per project. Gemiddeld duurt het 2-4 weken, maar wij bespreken de planning graag met u.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Bieden jullie ondersteuning na oplevering?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Ja, wij bieden verschillende supportpakketten aan. Van basis ondersteuning tot volledig beheer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}


function CtaSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Klaar om te Beginnen?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Of u nu koopt, verkoopt of gewoon benieuwd bent naar de waarde van uw woning, wij staan voor u klaar. Plan vandaag nog een gratis kennismakingsgesprek.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="_self">Plan een Gesprek</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Diensten | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ContentSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection3 />
      </ScrollReveal>
    </main>
  )
}
