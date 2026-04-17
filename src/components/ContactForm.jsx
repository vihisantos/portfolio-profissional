import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        contact: ''
    })

    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState(null)

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório'
        if (!formData.contact.trim()) {
            newErrors.contact = 'Email ou telefone é obrigatório'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        console.log('Sending data:', formData)
        setStatus('success')
        setFormData({ name: '', contact: '' })
        setErrors({})

        setTimeout(() => setStatus(null), 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }))
        }
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title">
                    <span className="section-label">Contato</span>
                    <h2>Vamos Conversar?</h2>
                    <p>Entre em contato para agendar sua consulta ou tirar dúvidas</p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Informações de Contato</h3>
                        <p>
                            Estou disponível para responder suas dúvidas e auxiliar você a dar o primeiro 
                            passo rumo ao autoconhecimento e bem-estar emocional.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div className="contact-method-text">
                                    <span className="contact-method-label">WhatsApp</span>
                                    <a href="https://wa.me/5511937507066" className="contact-method-value">(11) 93750-7066</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <div className="contact-method-text">
                                    <span className="contact-method-label">Email</span>
                                    <a href="mailto:contato@draanasilva.com" className="contact-method-value">contato@draanasilva.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div className="contact-method-text">
                                    <span className="contact-method-label">Localização</span>
                                    <span className="contact-method-value">Av. Paulista, 1000 - São Paulo</span>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                </div>
                                <div className="contact-method-text">
                                    <span className="contact-method-label">Horário</span>
                                    <span className="contact-method-value">Seg - Sex: 9h às 19h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-container">
                        {status === 'success' && (
                            <div className="success-msg" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                Mensagem enviada com sucesso! Entrarei em contato em breve.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Seu nome completo"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && (
                                    <span id="name-error" className="error-msg">{errors.name}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact">Email ou Telefone</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="seu@email.com ou (11) 99999-9999"
                                    aria-invalid={!!errors.contact}
                                    aria-describedby={errors.contact ? "contact-error" : undefined}
                                />
                                {errors.contact && (
                                    <span id="contact-error" className="error-msg">{errors.contact}</span>
                                )}
                            </div>

                            <div className="form-group" style={{ marginBottom: '25px', fontSize: '0.85em', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>
                                <p>🔒 <strong>Ambiente Seguro (SSL)</strong>. De acordo com a LGPD e o Código de Ética (CFP), solicitamos apenas dados básicos para contato. Por favor, <strong>não insira informações clínicas</strong> neste formulário.</p>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"/>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                </svg>
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
