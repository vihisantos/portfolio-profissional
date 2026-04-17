import AnimatedSection from './AnimatedSection';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <span className="section-label">Conheça</span>
                        <h2>Sobre a Profissional</h2>
                    </div>
                </AnimatedSection>

                <div className="about-grid">
                    <AnimatedSection delay={0.2}>
                        <div className="about-image-container">
                            <div className="about-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Consultório acolhedor"
                                    className="about-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="about-badge">
                                <div className="about-badge-number">+10</div>
                                <div className="about-badge-text">Anos de experiência</div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <div className="about-content">
                            <h3>Dra. Ana Silva</h3>
                            <p className="about-crp">CRP 12/34567</p>
                            
                            <div className="about-description">
                                <p>
                                    Com mais de uma década de experiência clínica, dedico minha carreira a auxiliar 
                                    pessoas a encontrarem equilíbrio emocional e autoconhecimento através de um 
                                    acompanhamento terapêutico humanizado e baseado em evidências.
                                </p>
                                <p>
                                    Minha abordagem é fundamentada na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, 
                                    uma abordagem cientificamente validada que oferece ferramentas práticas para 
                                    identificar e modificar padrões de pensamento disfuncionais.
                                </p>
                                <p>
                                    Acredito que cada pessoa carrega em si recursos únicos para superar desafios. 
                                    Meu papel é facilitar esse processo de descoberta e transformação.
                                </p>
                            </div>

                            <ul className="about-list">
                                <li className="about-list-item">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                    Especialista em Ansiedade, Depressão e Burnout
                                </li>
                                <li className="about-list-item">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                    Pós-graduada em TCC pela USP
                                </li>
                                <li className="about-list-item">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                    Atendimento Online e Presencial
                                </li>
                                <li className="about-list-item">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                    Sigilo e Ética Profissional Garantidos
                                </li>
                            </ul>

                            <a href="#contact" className="btn btn-primary">
                                Agendar Conversa Inicial
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
