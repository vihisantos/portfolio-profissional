export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="container">
                <div style={{ marginBottom: '1.5rem' }}>
                    <a href="#" className="logo" style={{ color: 'white', fontSize: '1.5rem' }}>Dra. Ana Silva</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <a href="#hero">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contato</a>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                    <p>&copy; {currentYear} Dra. Ana Silva - Psicologia Clínica. Todos os direitos reservados.</p>
                    <p style={{ marginTop: '0.5rem' }}>Desenvolvido como Modelo de Portfolio</p>
                </div>
            </div>
        </footer>
    )
}
