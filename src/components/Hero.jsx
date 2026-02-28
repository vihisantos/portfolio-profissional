import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="inicio" className="hero-organic">
            <div className="container hero-container">
                {/* Text Content - Occupies more space for asymmetry */}
                <motion.div
                    className="hero-text-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Soft spring
                >
                    <span className="hero-badge">Psicologia Clínica & Terapia Cognitivo-Comportamental</span>
                    <h1>
                        Reencontre seu <span className="highlight-text">bem-estar</span> emocional.
                    </h1>
                    <p>
                        Um espaço seguro e acolhedor para sua jornada de autoconhecimento.
                        Atendimento especializado online e presencial para transformar sua qualidade de vida.
                    </p>
                    <br />
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <a href="https://wa.me/5511937507066" className="btn btn-primary btn-lg">
                            Agendar Consulta
                        </a>
                        <Link to="/sobre" className="btn btn-secondary btn-lg">
                            Conhecer a Profissional
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Visual Content - Organic Mask */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="image-blob-mask">
                        <img src="/portfolio-profissional/psicologa.png" alt="Psicóloga acolhedora" />
                    </div>
                </motion.div>
            </div>

            {/* Background Blob Elements */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
        </section>
    );
};

export default Hero;
