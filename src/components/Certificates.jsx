import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Certificates() {
    const education = [
        {
            title: 'Pós-Graduação em Terapia Cognitivo-Comportamental',
            institution: 'USP - Universidade de São Paulo',
            year: '2014',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
            )
        },
        {
            title: 'Bacharelado em Psicologia',
            institution: 'PUC-SP - Pontifícia Universidade Católica',
            year: '2012',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
            )
        },
        {
            title: 'Especialização em Neuropsicologia',
            institution: 'ABN - Associação Brasileira de Neuropsicologia',
            year: '2016',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                </svg>
            )
        }
    ];

    const specializations = [
        {
            title: 'Terapia Cognitivo-Comportamental (TCC)',
            description: 'Abordagem baseada em evidências científicas para tratamento de diversos transtornos psicológicos.'
        },
        {
            title: 'Ansiedade e Depressão',
            description: 'Tratamento especializado com técnicas comprovadas para superação.'
        },
        {
            title: 'Terapia de Casal',
            description: 'Mediação terapêutica para melhorar comunicação e fortalecer vínculos.'
        },
        {
            title: 'Desenvolvimento Pessoal',
            description: 'Acompanhamento para autoconhecimento e crescimento profissional.'
        },
        {
            title: 'Psicologia Positiva',
            description: 'Foco em fortalezas e recursos para uma vida mais plena.'
        },
        {
            title: 'Mindfulness e Acceptance',
            description: 'Técnicas de atenção plena integradas à terapia.'
        }
    ];

    const registrations = [
        { label: 'CRP', value: '12/34567' },
        { label: 'e-Psi', value: 'Ativo' },
        { label: 'CFP', value: 'Membro Ativo' }
    ];

    return (
        <section id="certificates" className="section certificates">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <span className="section-label">Credenciais</span>
                        <h2>Formação e Especializações</h2>
                        <p>Conheça minha trajetória acadêmica e áreas de especialização</p>
                    </div>
                </AnimatedSection>

                <div className="certificates-grid">
                    <AnimatedSection delay={0.1}>
                        <div className="certificates-education">
                            <h3 className="certificates-subtitle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                </svg>
                                Formação Acadêmica
                            </h3>
                            
                            <div className="education-list">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="education-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <div className="education-icon">
                                            {edu.icon}
                                        </div>
                                        <div className="education-content">
                                            <h4>{edu.title}</h4>
                                            <p className="education-institution">{edu.institution}</p>
                                            <span className="education-year">{edu.year}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="certificates-specializations">
                            <h3 className="certificates-subtitle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                Áreas de Atuação
                            </h3>
                            
                            <div className="specializations-list">
                                {specializations.map((spec, index) => (
                                    <motion.div
                                        key={index}
                                        className="specialization-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                    >
                                        <div className="specialization-check">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <div className="specialization-content">
                                            <h4>{spec.title}</h4>
                                            <p>{spec.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.4}>
                    <div className="registrations">
                        <h3 className="registrations-title">Registros Profissionais</h3>
                        <div className="registrations-grid">
                            {registrations.map((reg, index) => (
                                <motion.div
                                    key={index}
                                    className="registration-item"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <span className="registration-label">{reg.label}</span>
                                    <span className="registration-value">{reg.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
