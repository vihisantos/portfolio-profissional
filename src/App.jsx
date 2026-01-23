import { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Protection from './components/Protection';
import SalesModal from './components/SalesModal';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';

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
                <section id="testimonials"><Testimonials /></section>
                <section id="contact"><ContactForm /></section>
            </main>
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
