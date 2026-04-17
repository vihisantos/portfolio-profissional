import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Pricing() {
    const plans = [
        {
            name: 'Terapia Individual',
            price: 'R$ 180',
            period: 'por sessão',
            duration: '50 minutos',
            features: [
                'Atendimento personalizado',
                'Foco em suas necessidades',
                'Técnicas baseadas em evidência',
                'Sessões online ou presencial',
                'Flexibilidade de horários'
            ],
            recommended: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            )
        },
        {
            name: 'Terapia de Casal',
            price: 'R$ 250',
            period: 'por sessão',
            duration: '60 minutos',
            features: [
                'Atendimento para casais',
                'Melhoria da comunicação',
                'Resolução de conflitos',
                'Fortalecimento do vínculo',
                'Sessões online ou presencial'
            ],
            recommended: true,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
            )
        },
        {
            name: 'Adolescentes',
            price: 'R$ 160',
            period: 'por sessão',
            duration: '50 minutos',
            features: [
                'Atendimento especializado',
                'Abordagem acolhedora',
                'Foco em desenvolvimento',
                'Questões de identidade',
                'Sessões online ou presencial'
            ],
            recommended: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            )
        }
    ];

    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <span className="section-label">Investimento</span>
                        <h2>Valores e Planos</h2>
                        <p>Escolha o formato que melhor se adapta às suas necessidades</p>
                    </div>
                </AnimatedSection>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <motion.div
                                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                {plan.recommended && (
                                    <div className="pricing-badge">Mais Popular</div>
                                )}
                                
                                <div className="pricing-header">
                                    <div className="pricing-icon">
                                        {plan.icon}
                                    </div>
                                    <h3>{plan.name}</h3>
                                    <div className="pricing-price">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">{plan.period}</span>
                                    </div>
                                    <p className="pricing-duration">{plan.duration}</p>
                                </div>

                                <ul className="pricing-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/5511937507066?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20${encodeURIComponent(plan.name)}.`}
                                    className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Agendar Sessão
                                </a>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.4}>
                    <div className="pricing-note">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        <p>
                            Os valores podem variar de acordo com o pacote de sessões contratado.
                            Pacotes mensais oferecem condições especiais. Entre em contato para mais informações.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
