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
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Vind snel antwoord op uw vragen over de Delftse woningmarkt</p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="makelaar-kosten" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Wat kost een makelaar voor de verkoop van mijn woning?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              De kosten voor een makelaar bestaan meestal uit courtage (een percentage van de verkoopprijs). In Delft liggen deze tarieven gemiddeld tussen 1% en 1,5% excl. BTW. Wij bespreken alle kosten transparant tijdens een vrijblijvend gesprek, zonder verborgen afrekeningen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="waardebepaling" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Hoe werkt een gratis waardebepaling?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              U kunt via onze website een vrijblijvende waardebepaling aanvragen. Een van onze makelaars komt bij u langs om uw woning te bekijken en analyseert recente verkoopcijfers van vergelijkbare woningen in uw buurt in Delft. Binnen 24 uur ontvangt u een gedetailleerd rapport met de geschatte marktwaarde.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="verkooptijd" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Hoe lang duurt het verkopen van een woning in Delft?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              De gemiddelde verkooptijd in Delft varieert tussen de 4 en 12 weken, afhankelijk van de locatie, prijsstelling en type woning. Populaire wijken zoals het centrum en Tanthof verkopen doorgaans sneller. Met onze marktkennis en presentatie optimaliseren wij de verkoopsnelheid.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wijken-delft" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Welke wijken in Delft zijn het meest populair?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Delft kent diverse aantrekkelijke wijken. Het historische centrum is geliefd bij liefhebbers van karakteristieke panden, Tanthof en Voorhof bieden ruimere gezinswoningen, en de Buitenhof is populair bij jonge professionals. Bekijk onze pagina over wijken voor een uitgebreid overzicht van alle buurten.
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
              <a href="/contact">Neem Contact Op</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function FaqPage() {
  useEffect(() => {
    document.title = 'Veelgestelde Vragen | Makelaardij Delft'
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