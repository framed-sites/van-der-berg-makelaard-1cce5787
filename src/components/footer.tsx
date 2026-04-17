import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-lg font-semibold text-foreground">
              My Website
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 My Website. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-4">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
