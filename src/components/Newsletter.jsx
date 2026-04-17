import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            return;
        }

        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus(null), 5000);
        }, 1000);
    };

    return (
        <section id="newsletter" className="section newsletter">
            <div className="container">
                <AnimatedSection>
                    <div className="newsletter-wrapper">
                        <div className="newsletter-content">
                            <div className="newsletter-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <h2>Receba conteúdo exclusivo</h2>
                            <p>
                                Assine minha newsletter e receba artigos sobre saúde mental, 
                                dicas de autoconhecimento e novidades sobre o consultório.
                            </p>
                            <ul className="newsletter-benefits">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    Artigos sobre saúde mental
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    Dicas práticas de bem-estar
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    Novidades e eventos
                                </li>
                            </ul>
                        </div>

                        <div className="newsletter-form-wrapper">
                            <form onSubmit={handleSubmit} className="newsletter-form">
                                <label htmlFor="newsletter-email">Seu melhor email</label>
                                <div className="newsletter-input-group">
                                    <input
                                        type="email"
                                        id="newsletter-email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (status === 'error') setStatus(null);
                                        }}
                                        className={status === 'error' ? 'error' : ''}
                                    />
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="loading-spinner"></span>
                                        ) : (
                                            <>
                                                Assinar
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                                    <polyline points="12 5 19 12 12 19"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                                {status === 'error' && (
                                    <span className="newsletter-error">Digite um email válido</span>
                                )}
                                {status === 'success' && (
                                    <span className="newsletter-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                        Email cadastrado com sucesso!
                                    </span>
                                )}
                            </form>
                            <p className="newsletter-privacy">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                Seus dados estão seguros. Você pode cancelar a qualquer momento.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
