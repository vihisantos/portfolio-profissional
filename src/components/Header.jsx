import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' },
    ]

    return (
        <header>
            <div className="container header-inner">
                <a href="#" className="logo" aria-label="Voltar ao início">
                    Dra. Ana Silva
                </a>

                {/* Desktop Nav */}
                <nav className="nav-desktop" aria-label="Menu principal">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
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
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
