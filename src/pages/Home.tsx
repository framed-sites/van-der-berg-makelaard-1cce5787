import { useEffect } from 'react'
import { ArrowRight, CheckCircle, Users } from 'lucide-react'
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
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
          Your Trusted Partner in Delft Real Estate
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          For over 37 years, Van der Berg Makelaardij has been helping families find their perfect home in Delft. Personal service, local expertise, and a passion for what we do.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Browse Listings</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Get a Valuation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function FeaturesSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Hallo</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Everything you need for a successful home sale or purchase</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">Every detail matters to us, from professional photography to personal viewings</p>
            </CardContent>
          </Card>
          <Card className="text-center border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Local Experts</h3>
              <p className="text-muted-foreground">We know every corner of Delft and surrounding municipalities inside out</p>
            </CardContent>
          </Card>
          <Card className="text-center border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Fast & Efficient</h3>
              <p className="text-muted-foreground">We streamline the process and keep you informed every step of the way</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ProductsSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Featured Properties</h2>
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


function TestimonialsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Client Experiences</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Hear from people who found their dream home with us</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">"Exceptional service and attention to detail. Made buying our first home a breeze!"</p>
              <div className="pt-2 border-t">
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Homebuyer</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">"Professional, reliable, and truly caring. Highly recommend!"</p>
              <div className="pt-2 border-t">
                <p className="font-semibold text-foreground">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Seller</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">"Found our dream home thanks to their expertise and dedication."</p>
              <div className="pt-2 border-t">
                <p className="font-semibold text-foreground">Emily Rodriguez</p>
                <p className="text-sm text-muted-foreground">Homebuyer</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function StatsSection4() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="2,400+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Happy clients</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="37" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Years experience</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="150+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Properties sold yearly</div>
          </div>
          <div className="text-center space-y-2  px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="98%" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Customer satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}


function CtaSection5() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Find Your Dream Home?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Let us guide you every step of the way. Get a free valuation or schedule a viewing today.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="_self">Start Your Journey</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function HomePage() {
  useEffect(() => {
    document.title = 'My Website'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <FeaturesSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <ProductsSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection3 />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection4 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection5 />
      </ScrollReveal>
    </main>
  )
}
