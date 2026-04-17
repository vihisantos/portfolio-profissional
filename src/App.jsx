import { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Protection from './components/Protection';
import SalesModal from './components/SalesModal';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy';

// ScrollToTop component to handle scroll position on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// Wrapper for page transitions
function AnimatedPage({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}

function HomePage() {
    return (
        <AnimatedPage>
            <main>
                <Hero />
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="certificates"><Certificates /></section>
                <section id="pricing"><Pricing /></section>
                <section id="faq"><FAQ /></section>
                <section id="contact"><ContactForm /></section>
            </main>
        </AnimatedPage>
    );
}

function PrivacyWrapper() {
    return (
        <AnimatedPage>
            <PrivacyPolicy />
        </AnimatedPage>
    );
}

function AboutWrapper() {
    return (
        <AnimatedPage>
            <AboutPage />
        </AnimatedPage>
    );
}

// Layout wrapper for consistent header/footer/tools
function Layout({ children }) {
    return (
        <div className="app-container">
            <Protection />
            <SalesModal />
            <ScrollToTop />
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<AboutWrapper />} />
                <Route path="/privacidade" element={<PrivacyWrapper />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <AnimatedRoutes />
            </Layout>
        </Router>
    );
}

export default App;
