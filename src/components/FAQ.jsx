import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Como funciona a primeira consulta?",
            answer: "Na primeira consulta, fazemos uma entrevista inicial onde conheço sua história, seus objetivos e expectativas. É um momento importante para construirmos a base da nossa relação terapêutica e definir o melhor caminho a seguir."
        },
        {
            question: "Qual a duração de cada sessão?",
            answer: "As sessões têm duração de 50 minutos. A frequência recomendada varia de acordo com cada caso, mas geralmente começamos com encontros semanais para garantir uma evolução mais consistente."
        },
        {
            question: "O atendimento online é tão efficace quanto o presencial?",
            answer: "Sim! Diversos estudos comprovam que a terapia online é igualmente eficaza ao atendimento presencial. O importante é que você esteja em um ambiente confortável e com privacidade para conversar."
        },
        {
            question: "Quanto tempo dura o tratamento?",
            answer: "A duração do tratamento varia de acordo com cada pessoa e objetivo. Alguns pacientes percebem melhoras significativas em poucos meses, enquanto outros optam por um acompanhamento mais longo de autoconhecimento."
        },
        {
            question: "Como agendar uma consulta?",
            answer: "Você pode agendar diretamente pelo WhatsApp ou preenchendo o formulário de contato. Responderei o mais rápido possível para definirmos o melhor horário para você."
        },
        {
            question: "A terapia é confidencial?",
            answer: "Sim! O sigilo é um dos pilares fundamentais da ética psicológica. Tudo o que conversamos durante as sessões é estritamente confidencial, conforme determina o Conselho Federal de Psicologia."
        },
        {
            question: "Atende menores de idade?",
            answer: "Sim, realizo acompanhamento terapêutico para adolescentes a partir dos 12 anos. Para menores, é necessária a autorização dos responsáveis legais."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section faq">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <span className="section-label">Dúvidas Frequentes</span>
                        <h2>Perguntas e Respostas</h2>
                        <p>Encontre respostas para as principais dúvidas sobre o processo terapêutico</p>
                    </div>
                </AnimatedSection>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.05}>
                            <motion.div
                                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                                initial={false}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <div className="faq-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="faq-answer-content">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.3}>
                    <div className="faq-cta">
                        <p>Ainda tem dúvidas?</p>
                        <a href="https://wa.me/5511937507066?text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20o%20atendimento." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Fale comigo pelo WhatsApp
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
