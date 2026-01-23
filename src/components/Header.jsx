import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Início', href: '#hero', type: 'anchor' },
        { name: 'Sobre', href: '#about', type: 'anchor' },
        { name: 'Serviços', href: '#services', type: 'anchor' },
        { name: 'Depoimentos', href: '#testimonials', type: 'anchor' },
        { name: 'Contato', href: '#contact', type: 'anchor' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        // If it's a section link
        if (href.startsWith('#')) {
            const sectionId = href.substring(1);

            // If we are NOT on home page, go home first, then scroll
            if (location.pathname !== '/') {
                navigate('/');
                // Small timeout to allow Home to mount
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // Already on home, just scroll
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
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
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Alternar menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <nav className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
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
