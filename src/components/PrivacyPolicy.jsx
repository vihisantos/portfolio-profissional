import AnimatedSection from './AnimatedSection';

export default function PrivacyPolicy() {
    return (
        <section className="section privacy-policy" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-title">
                        <h2>Política de Privacidade</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Última atualização: {new Date().toLocaleDateString()}</p>
                    </div>
                    
                    <div className="privacy-content glass-card" style={{ padding: '40px', borderRadius: '15px' }}>
                        <h3>1. Compromisso com a Privacidade e o Sigilo</h3>
                        <p>O sigilo profissional é um pilar fundamental da Psicologia (artigo 9º do Código de Ética Profissional do Psicólogo). Esta Política de Privacidade explica como protegemos seus dados ao utilizar nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

                        <h3 style={{ marginTop: '30px' }}>2. Tratamento de Dados no Site</h3>
                        <p>No formulário de contato do site, solicitamos apenas informações mínimas (nome e telefone/email) para viabilizar um retorno e o agendamento de consultas. <strong>Em nenhum momento solicitamos informações clínicas sensíveis, motivos de consulta ou laudos médicos de forma online pelo site.</strong></p>

                        <h3 style={{ marginTop: '30px' }}>3. Uso dos Dados</h3>
                        <p>Os dados coletados servem exclusivamente para:</p>
                        <ul>
                            <li>Entrar em contato para agendamento de sessões ou tirar dúvidas administrativas.</li>
                            <li>Comunicação inicial e envio de propostas de serviços.</li>
                        </ul>
                        <p>Os dados informados não são compartilhados com terceiros sob nenhuma hipótese, salvo determinação legal.</p>

                        <h3 style={{ marginTop: '30px' }}>4. Segurança dos Dados (SSL)</h3>
                        <p>Este site possui certificado SSL (Secure Socket Layer), o que garante que qualquer informação preenchida no formulário de contato será enviada de forma criptografada e totalmente segura até mim.</p>

                        <h3 style={{ marginTop: '30px' }}>5. Atendimentos Online</h3>
                        <p>Caso opte por sessões online, informo que meus serviços são cadastrados e aprovados pelo sistema e-Psi do Conselho Federal de Psicologia (CFP). As plataformas utilizadas para a sessão também garantem a criptografia de ponta a ponta, preservando seu sigilo e segurança digital.</p>
                        
                        <h3 style={{ marginTop: '30px' }}>6. Entre em Contato</h3>
                        <p>Se tiver dúvidas sobre nossa política de dados, sinta-se à vontade para entrar em contato diretamente pelo WhatsApp: +55 (11) 93750-7066 ou pelo email contato@draanasilva.com.</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
