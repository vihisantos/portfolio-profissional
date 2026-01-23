import AnimatedSection from './AnimatedSection';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <p>Conheça a Profissional</p>
                        <h2>Sobre Mim</h2>
                    </div>
                </AnimatedSection>

                <div className="about-grid">
                    {/* Visual Side - Staggered Left */}
                    <AnimatedSection delay={0.2}>
                        <div className="about-image organic-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Consultório acolhedor com poltronas confortáveis"
                                className="organic-rounded"
                                loading="lazy"
                            />
                            {/* Decorative organic element */}
                            <div className="organic-deco"></div>
                        </div>
                    </AnimatedSection>

                    {/* Text Side - Staggered Right */}
                    <AnimatedSection delay={0.4}>
                        <div className="about-text">
                            <h3>Dra. Ana Silva - CRP 12/34567</h3>
                            <div className="about-description">
                                <p>
                                    Com mais de 10 anos de experiência clínica, dedico minha carreira a auxiliar
                                    pessoas a encontrarem equilíbrio emocional e autoconhecimento.
                                </p>
                                <p>
                                    Minha abordagem é baseada na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>,
                                    focada em resultados práticos e na mudança de padrões de pensamento que geram sofrimento.
                                </p>
                                <p>
                                    Acredito que a terapia é um espaço sagrado de escuta sem julgamentos,
                                    onde cada indivíduo pode se sentir seguro para ser quem realmente é.
                                </p>
                            </div>

                            <ul className="about-list">
                                <li>
                                    <span className="check-icon">✓</span> Especialista em Ansiedade e Depressão
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Pós-graduada em TCC pela USP
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Atendimento Humanizado e Acolhedor
                                </li>
                            </ul>

                            <br />
                            <a href="#contact" className="btn btn-secondary">
                                Agendar Conversa
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
