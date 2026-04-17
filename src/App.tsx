import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ListingsPage from './pages/Listings'
import CareersPage from './pages/Careers'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import ValuationPage from './pages/Valuation'
import NeighborhoodsPage from './pages/Neighborhoods'
import TeamPage from './pages/Team'
import FaqPage from './pages/Faq'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/valuation" element={<ValuationPage />} />
        <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Route>
    </Routes>
  )
}
