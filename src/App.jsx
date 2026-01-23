import { useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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

function HomePage() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <ContactForm />
        </main>
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

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<AboutPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
