import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
          My Website
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          From your first viewing to the final key handover, Van der Berg provides comprehensive real estate services tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Learn More</a>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What We Offer</h2>
        <div className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
                alt="Sample Product 1"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 right-3 shadow-sm">New</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 1</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$49.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format"
                alt="Sample Product 2"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 2</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$79.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
                alt="Sample Product 3"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 right-3 shadow-sm">Popular</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 3</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$99.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
                alt="Sample Product 4"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 4</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$59.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format"
                alt="Sample Product 5"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 5</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$129.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format"
                alt="Sample Product 6"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Sample Product 6</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$89.99</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function FaqSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Common Questions About Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Find quick answers to your questions</p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-0" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">How can I get in touch?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              You can reach us via the contact form, email, or phone. We typically respond within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">What are the costs?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Our rates depend on your specific needs. Contact us for a custom quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">How long does the process take?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              The timeline varies per project. On average it takes 2-4 weeks, but we are happy to discuss the planning with you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg px-6 data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:bg-muted/30 transition-colors">
            <AccordionTrigger className="text-left hover:no-underline py-5">Do you offer support after delivery?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Yes, we offer various support packages. From basic support to full management.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Whether you are buying, selling, or just curious about your property value, we are here to help. Schedule a free consultation today.</p>
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
    document.title = 'Services | My Website'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ProductsSection1 />
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
