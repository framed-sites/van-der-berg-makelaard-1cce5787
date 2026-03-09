import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ListingsPage from './pages/Listings'
import NeighborhoodsPage from './pages/Neighborhoods'
import ValuationPage from './pages/Valuation'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import TeamPage from './pages/Team'
import CareersPage from './pages/Careers'
import FaqPage from './pages/Faq'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/woningaanbod" element={<ListingsPage />} />
        <Route path="/wijken" element={<NeighborhoodsPage />} />
        <Route path="/waardebepaling" element={<ValuationPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/vacatures" element={<CareersPage />} />
        <Route path="/veelgestelde-vragen" element={<FaqPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsConditionsPage />} />
      </Route>
    </Routes>
  )
}
