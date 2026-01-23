import AnimatedSection from './AnimatedSection';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-organic">
            {/* Organic Wave Separator - Full Width */}
            <div className="footer-wave">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#2D3436" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Full Width Background Wrapper */}
            <div className="footer-bg-wrapper">
                <div className="container footer-content">
                    <div className="footer-grid">
                        {/* Column 1: Brand */}
                        <div className="footer-col">
                            <AnimatedSection delay={0.1}>
                                <a href="#" onClick={scrollToTop} className="footer-logo">Dra. Ana Silva</a>
                                <p className="footer-mission">
                                    Transformando vidas através do acolhimento e da ciência.
                                    Sua jornada de autoconhecimento começa aqui.
                                </p>
                            </AnimatedSection>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="footer-col">
                            <AnimatedSection delay={0.2}>
                                <h4>Navegação</h4>
                                <ul className="footer-links">
                                    <li><a href="#hero">Início</a></li>
                                    <li><a href="#about">Sobre Mim</a></li>
                                    <li><a href="#services">Serviços</a></li>
                                    <li><a href="#testimonials">Depoimentos</a></li>
                                </ul>
                            </AnimatedSection>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="footer-col">
                            <AnimatedSection delay={0.3}>
                                <h4>Contato</h4>
                                <ul className="footer-contact">
                                    <li>
                                        <span>📍</span> Av. Paulista, 1000 - São Paulo
                                    </li>
                                    <li>
                                        <span>📞</span> <a href="https://wa.me/5511937507066">+55 11 93750-7066</a>
                                    </li>
                                    <li>
                                        <span>✉️</span> contato@draanasilva.com
                                    </li>
                                </ul>
                            </AnimatedSection>
                        </div>
                    </div>

                    <AnimatedSection delay={0.4}>
                        <div className="footer-bottom">
                            <div className="footer-copyright">
                                <p>&copy; {currentYear} Dra. Ana Silva. Todos os direitos reservados.</p>
                            </div>
                            <button onClick={scrollToTop} className="back-to-top">
                                Voltar ao Topo ↑
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </footer>
    );
}
