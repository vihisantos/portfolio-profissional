export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <p>Conheça a Profissional</p>
                    <h2>Sobre Mim</h2>
                </div>

                <div className="about-grid">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Consultório acolhedor com poltronas confortáveis"
                            style={{ borderRadius: '20px', boxShadow: 'var(--shadow-md)' }}
                            loading="lazy"
                        />
                    </div>
                    <div className="about-text">
                        <h3>Dra. Ana Silva - CRP 12/34567</h3>
                        <div style={{ margin: '1.5rem 0', color: 'var(--color-text-light)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                Com mais de 10 anos de experiência clínica, dedico minha carreira a auxiliar
                                pessoas a encontrarem equilíbrio emocional e autoconhecimento.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Minha abordagem é baseada na Terapia Cognitivo-Comportamental (TCC),
                                focada em resultados práticos e na mudança de padrões de pensamento que geram sofrimento.
                            </p>
                            <p>
                                Acredito que a terapia é um espaço sagrado de escuta sem julgamentos,
                                onde cada indivíduo pode se sentir seguro para ser quem realmente é.
                            </p>
                        </div>

                        <ul style={{ display: 'grid', gap: '0.5rem', fontWeight: 500 }}>
                            <li>✓ Especialista em Ansiedade e Depressão</li>
                            <li>✓ Pós-graduada em TCC pela USP</li>
                            <li>✓ Atendimento Humanizado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
