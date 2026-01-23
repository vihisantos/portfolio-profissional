import Header from './components/Header'
import Protection from './components/Protection'
import SalesModal from './components/SalesModal'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
    return (
        <div className="app-container">
            <Protection />
            <SalesModal />
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
