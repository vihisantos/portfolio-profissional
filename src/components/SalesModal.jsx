import { useState } from 'react';

const SalesModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const whatsappLink = "https://wa.me/554896238388?text=Olá!%20Vi%20o%20modelo%20de%20portfolio%20e%20quero%20um%20igual%20para%20mim!";

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={toggleModal}
                className="sales-fab"
                aria-label="Informações sobre este site"
            >
                <span className="sales-fab-icon">?</span>
                <span className="sales-fab-text">Tenha um igual!</span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="sales-modal-overlay" onClick={toggleModal}>
                    <div className="sales-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="sales-modal-close" onClick={toggleModal}>&times;</button>

                        <div className="sales-modal-header">
                            <h2>Gostou deste site? 🚀</h2>
                            <p className="sales-subtitle">Ele pode ser seu!</p>
                        </div>

                        <div className="sales-modal-body">
                            <p>Este portfólio não é exclusivo para psicólogos! Ele é um <strong>modelo profissional versátil</strong> perfeito para:</p>

                            <ul className="sales-list">
                                <li>✨ Advogados & Consultores</li>
                                <li>✨ Nutricionistas & Personal Trainers</li>
                                <li>✨ Arquitetos & Designers</li>
                                <li>✨ Qualquer profissional liberal!</li>
                            </ul>

                            <p className="sales-pitch">
                                Transmita autoridade e conquiste mais clientes com um site rápido, moderno e 100% personalizado para sua marca.
                            </p>
                        </div>

                        <div className="sales-modal-footer">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="sales-cta-button">
                                Quero um Orçamento 💬
                            </a>
                            <p className="sales-note">Fale direto comigo no WhatsApp!</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SalesModal;
