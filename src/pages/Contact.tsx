import { useEffect, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { AnimatedCounter } from '../components/ui/animated-counter'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { ScrollReveal } from '../components/ui/scroll-reveal'
import { Textarea } from '../components/ui/textarea'

function FaqSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Get in Touch</h2>
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


function ContactSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Send Us a Message</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Verstuur Bericht
            </Button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+31 (0)20 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Adres</h3>
                <p className="text-sm text-muted-foreground">Keizersgracht 123, 1015 CJ Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function StatsSection2() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="500+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Happy clients</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="15+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Years experience</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="1000+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Projects completed</div>
          </div>
          <div className="text-center space-y-2  px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="24/7" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}


function MapSection3() {
  return (
    <section className="py-8 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl overflow-hidden border border-border/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d4.8946!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAzLjQiTiA0wrA1Myc0MC42IkU!5e0!3m2!1sen!2snl!4v1600000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | My Website'
  }, [])

  return (
    <main>
      <FaqSection0 />
      <ScrollReveal>
        <ContactSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection3 />
      </ScrollReveal>
    </main>
  )
}
