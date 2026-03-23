import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ListingsPage from './pages/Listings'
import NeighborhoodsPage from './pages/Neighborhoods'
import ValuationPage from './pages/Valuation'
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import TeamPage from './pages/Team'
import CareersPage from './pages/Careers'
import FaqPage from './pages/Faq'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="woningaanbod" element={<ListingsPage />} />
        <Route path="wijken" element={<NeighborhoodsPage />} />
        <Route path="waardebepaling" element={<ValuationPage />} />
        <Route path="over-ons" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="diensten" element={<ServicesPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="werken" element={<CareersPage />} />
        <Route path="veelgestelde-vragen" element={<FaqPage />} />
        <Route path="privacybeleid" element={<PrivacyPolicyPage />} />
        <Route path="algemene-voorwaarden" element={<TermsConditionsPage />} />
        <Route path="winkelwagen" element={<CartPage />} />
        <Route path="afrekenen" element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
}
