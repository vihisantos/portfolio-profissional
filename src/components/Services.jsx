export default function Services() {
    const services = [
        {
            title: "Terapia Individual",
            description: "Sessões focadas em autoconhecimento, tratamento de ansiedade, depressão e conflitos pessoais.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M8 11h8"></path>
                    <path d="M12 7v8"></path>
                </svg>
            ) // Shield/Protection symbol for individual therapy/resilience
            // Alternatively a brain: 
            /* <svg ...><path d="M9.5 20c-1.25 0-2.32-.42-3.14-1.12C5.6 18.25 5.25 17.5 5 16.5c-.25-1-.25-2.25 0-3.5.25-1.25.75-2.25 1.5-3 .75-.75 2-1.25 3-1.5.25-.05.5-.05.75-.05.5 0 1 .1 1.5.25.5.15 1 .4 1.5.75.5-.35 1-.6 1.5-.75.5-.15 1-.25 1.5-.25.25 0 .5 0 .75.05 1 .25 2.25.75 3 1.5.75.75 1.25 1.75 1.5 3 .25 1.25.25 2.5 0 3.5-.25 1-.6 1.75-1.36 2.38-.82.7-1.89 1.12-3.14 1.12H9.5z" stroke="currentColor" .../></svg> */
        },
        {
            title: "Terapia de Casal",
            description: "Espaço de mediação para melhorar a comunicação e fortalecer o vínculo afetivo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
            ) // Heart for couples
        },
        {
            title: "Atendimento Online",
            description: "Psicoterapia com a mesma qualidade do presencial, no conforto da sua casa.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ) // Laptop
        },
        {
            title: "Orientação Profissional",
            description: "Suporte para escolhas de carreira e transição profissional com testes vocacionais.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
            ) // Compass for guidance
        }
    ]

    // Improving the brain icon for the first one as "Protection/Shield" is generic.
    // Using a "Head/Mind" representation instead.
    services[0].icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
            <path d="M3 20c0-3.3 4-6 9-6s9 2.7 9 6"></path>
            <path d="M12 3v1"></path>
            <path d="M6 5l.7.7"></path>
            <path d="M18 5l-.7.7"></path>
        </svg>
    ) // Person with "idea" or "clarity" aura, or just a simple person icon for "Individual"

    // Actually, a "Head profile with gears or puzzle" is common but complex to draw inline.
    // Let's stick to a User/Person icon for Individual.
    services[0].icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="section-title">
                    <p>Como posso ajudar</p>
                    <h2>Meus Serviços</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
