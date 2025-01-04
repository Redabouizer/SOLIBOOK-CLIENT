import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../../../public/CSS/Login/Signup.css';

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <button className="back-button">
          <span className="icon-arrow-left"></span>
        </button>
        <h1>S'inscrire/se connecter</h1>
        <div className="signup-options">
          <Link to="/ClientSignup" className="signup-card"> {/* Wrap the div in Link */}
            <div>
              <h2>Pour tout le monde</h2>
              <p>Prenez rendez-vous dans un salon ou un spa près de chez vous</p>
            </div>
            <span className="icon-chevron-right"></span>
          </Link>
          <div className="signup-card">
            <div>
              <h2>Pour les professionnels</h2>
              <p>Gérez et développez votre entreprise</p>
            </div>
            <span className="icon-chevron-right"></span>
          </div>
        </div>
        <div className="language-help">
          <a href="#" className="language">🌐 français</a>
          <a href="#" className="help">❓ Aide</a>
        </div>
      </div>
      <div className="image-container">
        <img src="../image/OCP_image.avif?height=800&width=600" alt="Colorful person smiling" className="hero-image" />
      </div>
    </div>
  )
}
