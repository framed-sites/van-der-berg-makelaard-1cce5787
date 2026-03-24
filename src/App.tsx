import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ListingsPage from './pages/Listings'
import NeighborhoodsPage from './pages/Neighborhoods'
import ValuationPage from './pages/Valuation'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ProductsPage from './pages/Products'
import ProductDetailPage from './pages/ProductDetail'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'
import TeamPage from './pages/Team'
import CareersPage from './pages/Careers'
import BlogPage from './pages/Blog'
import FaqPage from './pages/Faq'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/woningaanbod" element={<ListingsPage />} />
        <Route path="/wijken" element={<NeighborhoodsPage />} />
        <Route path="/waardebepaling" element={<ValuationPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/producten" element={<ProductsPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/winkelmand" element={<CartPage />} />
        <Route path="/afrekenen" element={<CheckoutPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsConditionsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/carriere" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/veelgestelde-vragen" element={<FaqPage />} />
      </Route>
    </Routes>
  )
}
