import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Início', href: '#hero', id: 'hero' },
        { name: 'Sobre', href: '#about', id: 'about' },
        { name: 'Serviços', href: '#services', id: 'services' },
        { name: 'Depoimentos', href: '#testimonials', id: 'testimonials' },
        { name: 'Contato', href: '#contact', id: 'contact' },
    ];

    // Scroll Spy Logic
    useEffect(() => {
        if (location.pathname !== '/') {
            if (location.pathname === '/sobre') setActiveSection('about');
            return;
        }

        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100; // Offset for header

            // Default to hero/home
            let current = 'hero';

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleNavClick = (e, href, id) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveSection(id);

        if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const section = document.getElementById(sectionId);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header>
            <div className="container header-inner">
                <Link to="/" className="logo" aria-label="Voltar ao início" onClick={() => window.scrollTo(0, 0)}>
                    Dra. Ana Silva
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-desktop" aria-label="Menu principal">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle & Nav (omitted for brevity, assume similar update or reuse) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Alternar menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {isOpen && (
                    <nav className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.id)}
                                className={activeSection === link.id ? 'active' : ''}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
