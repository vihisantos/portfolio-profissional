import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState(null) // 'success' | 'error' | null

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório'
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória'

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        // Simulate API call
        console.log('Sending data:', formData)
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setErrors({})

        // Reset status after 5 seconds
        setTimeout(() => setStatus(null), 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }))
        }
    }

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-title">
                    <p>Vamos conversar?</p>
                    <h2>Agende sua Consulta</h2>
                </div>

                <div className="contact-container">
                    {status === 'success' && (
                        <div className="success-msg" role="alert">
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
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                                <span id="name-error" className="error-msg">{errors.name}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && (
                                <span id="email-error" className="error-msg">{errors.email}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem ou Dúvida</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            ></textarea>
                            {errors.message && (
                                <span id="message-error" className="error-msg">{errors.message}</span>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
