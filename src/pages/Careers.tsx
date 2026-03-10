 import { useEffect, useState } from 'react'
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { ScrollReveal } from '../components/ui/scroll-reveal'
import { Textarea } from '../components/ui/textarea'

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
          Makelaardij Van der Berg
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Werken bij Van der Berg
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Wij zijn altijd op zoek naar gepassioneerde mensen die van Delft houden en anderen willen helpen hun perfecte woning te vinden. Ontdek hoe het is om te werken bij een familiebedrijf waar elk teamlid ertoe doet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#vacatures">Vacatures bekijken</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#contact">Direct solliciteren</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function ContentSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Waarom Van der Berg?</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Bij Van der Berg Makelaardij draait het niet alleen om woningen, maar om mensen. Wij geloven dat tevreden medewerkers zorgen voor tevreden klanten. Daarom investeren wij in een prettige werksfeer, persoonlijke groei en goede arbeidsvoorwaarden.</p>
          <p>Als familiebedrijf met diepe wortels in Delft kennen wij de stad als geen ander. Wij delen onze kennis en passie voor Delft graag met ons team. Of je nu aan de slag gaat als makelaar of in een ondersteunende functie: bij ons werk je samen aan het vervullen van dromen van kopers en verkopers in onze prachtige stad.</p>
          <p>Wij bieden flexibele werktijden, ruimte voor initiatief en een informele werksfeer waarin hard werken en plezier maken hand in hand gaan. Daarnaast krijg je bij ons volop mogelijkheden om je te ontwikkelen door middel van trainingen en begeleiding van ervaren collega's.</p>
        </div>
      </div>
    </section>
  )
}

function JobsSection2() {
  return (
    <section id="vacatures" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Actuele Vacatures</h2>
        <div className="space-y-4">
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Commercieel Medewerker Woningaanbod</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Delft</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime / Parttime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Je bent verantwoordelijk voor het beheren en uitbreiden van ons woningaanbod en onderhoudt contact met verkopers.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#contact">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Assistent Makelaar</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Delft</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Je ondersteunt onze makelaars bij het adviseren van kopers en verkopers en bereidt waardebepalingen voor.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#contact">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Marketing & Communicatie Medewerker</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Delft</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Parttime (24-32 uur)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Je zorgt voor de zichtbaarheid van Van der Berg in Delft en omgeving via social media, woningsites en onze nieuwsbrief.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#contact">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Administratief Medewerker</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Delft</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime / Parttime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Je beheert de administratie rondom woningverkopen en -aankopen en ondersteunt het team bij dossierbeheer.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#contact">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ContactSection3() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Solliciteer Direct</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Naam</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefoon</Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vacancy">Gewenste vacature</Label>
              <Input type="text" id="vacancy" name="vacancy" placeholder="Bijv. Commercieel Medewerker" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Motivatie</Label>
              <Textarea id="message" name="message" rows={5} required placeholder="Vertel kort wie je bent en waarom je bij Van der Berg wilt werken..." />
            </div>
            <Button type="submit" className="w-full">
              Verstuur Sollicitatie
            </Button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">E-mail</h3>
                <p className="text-sm text-muted-foreground">vacatures@vandenberg.nl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Telefoon</h3>
                <p className="text-sm text-muted-foreground">+31 (0)15 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Adres</h3>
                <p className="text-sm text-muted-foreground">Oude Delft 123<br/>2611 BC Delft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function CareersPage() {
  useEffect(() => {
    document.title = 'Vacatures | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ContentSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <JobsSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection3 />
      </ScrollReveal>
    </main>
  )
}