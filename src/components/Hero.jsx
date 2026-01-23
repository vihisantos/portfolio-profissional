export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Caminhe em direção ao seu bem-estar</h1>
                    <p>
                        Psicoterapia acolhedora e baseada em evidências.
                        Redescubra sua força interior e construa uma vida mais leve e significativa.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Agendar Consulta
                    </a>
                </div>
                <div className="hero-image">
                    {/* Placeholder for professional photo */}
                    <div className="blob">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F7B267" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.4C93.5,8.4,82.2,21.1,70.8,31C59.4,40.9,47.9,48,36.5,52.2C25.1,56.4,13.8,57.7,1.3,55.5C-11.2,53.3,-24.9,47.6,-36.4,40.6C-47.9,33.6,-57.2,25.3,-65.4,14.6C-73.6,3.9,-80.7,-9.2,-78.9,-21.8C-77.1,-34.4,-66.4,-46.5,-54.2,-54.3C-42,-62.1,-28.3,-65.6,-14.8,-67C-1.3,-68.4,12.2,-67.7,30.5,-83.6" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Foto profissional da Dra. Ana Silva sorrindo"
                        width="500"
                        height="500"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}
