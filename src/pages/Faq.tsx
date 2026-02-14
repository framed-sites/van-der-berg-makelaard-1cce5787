import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function ContentSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Veelgestelde Vragen</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Vind antwoorden op veelgestelde vragen over kopen, verkopen en huren in Delft. Kunt u niet vinden wat u zoekt? Neem direct contact met ons op.</p>
        </div>

      </div>
    </section>
  )
}

function FaqSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Alle Vragen</h2>
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


function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Nog Vragen?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Ons team staat klaar om u te helpen met al uw vragen over de Delftse woningmarkt.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="_self">Neem Contact Op</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function FaqPage() {
  useEffect(() => {
    document.title = 'Veelgestelde Vragen | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <ContentSection0 />
      <ScrollReveal>
        <FaqSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection2 />
      </ScrollReveal>
    </main>
  )
}
