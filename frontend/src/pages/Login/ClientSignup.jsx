import React from 'react'
import '../../../public/CSS/Login/ClientSignup.css';

export default function ClientSignup() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <button className="back-button">
          <span className="icon-arrow-left"></span>
        </button>
        <h1>Fresha pour les clients</h1>
        <p className="signup-description">
          Créez un compte ou connectez-vous pour réserver et gérer vos rendez-vous.
        </p>
        <div className="signup-options">
          <button className="social-button facebook">
            <span className="icon-facebook"></span>
            Continuer avec Facebook
          </button>
          <button className="social-button google">
            <span className="icon-google"></span>
            Continuer avec Google
          </button>
          <div className="separator">ou</div>
          <input type="email" placeholder="Adresse e-mail" className="email-input" />
          <button className="continue-button">Continuer</button>
        </div>
        <p className="professional-account">
          Vous avez un compte professionnel ?{' '}
          <a href="#" className="professional-link">Inscrivez-vous en tant que professionnel</a>
        </p>
        <div className="language-help">
          <a href="#" className="language">🌐 français</a>
          <a href="#" className="help">❓ Aide</a>
        </div>
      </div>
      <div className="image-container">
        <img src="../image/OCP_image.avif?height=800&width=600" alt="Personne souriante avec des vêtements colorés" className="hero-image" />
      </div>
    </div>
  )
}