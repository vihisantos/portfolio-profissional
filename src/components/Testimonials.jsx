import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Maria Oliveira",
            text: "A terapia mudou minha vida. A Dra. Ana é extremamente acolhedora e profissional.",
            initial: "M"
        },
        {
            name: "João Silva",
            text: "Consegui superar minha ansiedade graças às sessões. Recomendo a todos!",
            initial: "J"
        },
        {
            name: "Fernanda Costa",
            text: "O atendimento online funciona perfeitamente. Sinto-me segura e ouvida em cada sessão.",
            initial: "F"
        }
    ];

    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Depoimentos</p>
                        <h2 style={{ color: 'white' }}>O que dizem meus pacientes</h2>
                    </div>
                </AnimatedSection>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <div className="testimonial-card glass-card">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.initial}</div>
                                    <p className="client-name">{t.name}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
