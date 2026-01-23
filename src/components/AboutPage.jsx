import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="container">
                {/* Header Section */}
                <AnimatedSection>
                    <div className="about-hero">
                        <span className="hero-badge">Minha Jornada</span>
                        <h1>Quem é a <span className="highlight-text">Dra. Ana Silva?</span></h1>
                        <p className="lead-text">
                            Psicóloga, pesquisadora e apaixonada pelo potencial humano de transformação.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Content Grid */}
                <div className="about-content-grid">
                    {/* Visual Column */}
                    <div className="about-visual-col">
                        <AnimatedSection delay={0.2}>
                            <div className="image-blob-mask big-mask">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Dra. Ana Silva"
                                />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Text Column */}
                    <div className="about-text-col">
                        <AnimatedSection delay={0.3}>
                            <h2>Construindo pontes para o <br />autoconhecimento</h2>
                            <p>
                                Desde a minha formação, sempre acreditei que a psicologia não deveria ser
                                algo distante ou frio. Minha missão é tornar a saúde mental acessível,
                                compreensível e, acima de tudo, <strong>humana</strong>.
                            </p>
                            <p>
                                Com especialização em Terapia Cognitivo-Comportamental (TCC), trabalho
                                de forma colaborativa com meus pacientes. Não sou apenas uma ouvinte silenciosa;
                                sou uma parceira ativa na sua jornada de descoberta e mudança.
                            </p>

                            <div className="credentials-box organic-card">
                                <h3>Formação e Credenciais</h3>
                                <ul>
                                    <li>🎓 Graduação em Psicologia - USP</li>
                                    <li>📚 Especialista em TCC - PUC-RS</li>
                                    <li>🧠 Curso de Neurociência Aplicada</li>
                                    <li>📝 CRP Ativo: 12/34567</li>
                                </ul>
                            </div>

                            <a href="https://wa.me/5511937507066" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>
                                Agendar Minha Sessão
                            </a>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Background Blobs */}
            <div className="bg-blob blob-3"></div>
        </div>
    );
}
