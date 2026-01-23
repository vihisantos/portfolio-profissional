export default function Testimonials() {
    const testimonials = [
        {
            text: "A Dra. Ana me ajudou a passar pelo momento mais difícil da minha vida com uma sensibilidade incrível. Sinto-me muito mais forte hoje.",
            name: "Mariana C."
        },
        {
            text: "Excelente profissional. As sessões online funcionam perfeitamente para minha rotina e a qualidade é impecável.",
            name: "Roberto S."
        },
        {
            text: "A abordagem prática me ajudou a entender meus gatilhos de ansiedade. Recomendo de olhos fechados!",
            name: "Carla M."
        }
    ]

    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <div className="section-title">
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Depoimentos</p>
                    <h2>O que dizem os pacientes</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div className="testimonial-card" key={index}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{t.text}"</p>
                            <p className="client-name">- {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
