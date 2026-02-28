import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function AboutPage() {
    // Stagger container for list items
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="about-page">
            <div className="container">
                {/* Header Section */}
                <AnimatedSection>
                    <div className="about-hero">
                        <motion.span
                            className="hero-badge"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Minha Jornada
                        </motion.span>
                        <h1>
                            Quem é a <span className="highlight-text-anim">Dra. Ana Silva?
                                <motion.span
                                    className="highlight-mark"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                                />
                            </span>
                        </h1>
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
                            <motion.div
                                className="image-blob-mask big-mask"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 1, 0, -1, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src="/portfolio-profissional/psicologa.png"
                                    alt="Dra. Ana Silva"
                                />
                            </motion.div>
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

                            <motion.div
                                className="credentials-box organic-card"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3>Formação e Credenciais</h3>
                                <ul>
                                    {[
                                        "🎓 Graduação em Psicologia - USP",
                                        "📚 Especialista em TCC - PUC-RS",
                                        "🧠 Curso de Neurociência Aplicada",
                                        "📝 CRP Ativo: 12/34567"
                                    ].map((item, index) => (
                                        <motion.li key={index} variants={itemVariants}>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.a
                                href="https://wa.me/5511937507066"
                                className="btn btn-primary btn-lg"
                                style={{ marginTop: '2rem' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Agendar Minha Sessão
                            </motion.a>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Background Blobs */}
            <div className="bg-blob blob-3"></div>
        </div>
    );
}
