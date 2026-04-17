import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SalesModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const whatsappLink = "https://wa.me/5511937507066?text=Ol%C3%A1!%20Vi%20o%20modelo%20de%20portfolio%20e%20quero%20um%20igual%20para%20mim!";

    const features = [
        { text: 'Design exclusivo e profissional' },
        { text: '100% responsivo (mobile-first)' },
        { text: 'Performance e SEO otimizados' },
        { text: 'Entrega rápida e organizada' },
        { text: 'Segurança implementada' },
        { text: 'Suporte direto pós-entrega' }
    ];

    const targets = ['Psicólogos', 'Advogados', 'Nutricionistas', 'Médicos', 'Consultores', 'Terapeutas'];

    return (
        <>
            <motion.button
                onClick={toggleModal}
                className="sales-fab"
                aria-label="Quero um site como este"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            >
                <span className="sales-fab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                </span>
                <span className="sales-fab-text">Quero um site assim</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="sales-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                    >
                        <motion.div
                            className="sales-modal-content"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="sales-modal-close" onClick={toggleModal} aria-label="Fechar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>

                            <div className="sales-modal-header">
                                <div className="sales-modal-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                    Template Profissional
                                </div>

                                <h2 className="sales-modal-title">
                                    Destaque-se no mercado com um site que transmite autoridade
                                </h2>

                                <p className="sales-modal-subtitle">
                                    Este não é apenas um site. É uma ferramenta estratégica para profissionais que querem se destacar e conquistar mais clientes.
                                </p>
                            </div>

                            <div className="sales-features">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="sales-feature-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <div className="sales-feature-check">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <span className="sales-feature-text">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="sales-divider"></div>

                            <div className="sales-targets">
                                <p className="sales-targets-label">Perfeito para</p>
                                <div className="sales-targets-tags">
                                    {targets.map((target, index) => (
                                        <span key={index}>{target}</span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sales-cta-button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Solicitar Orçamento
                            </a>

                            <p className="sales-note">
                                Conversa direta pelo WhatsApp. Sem intermediarios.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SalesModal;
