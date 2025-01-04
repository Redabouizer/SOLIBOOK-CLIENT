import React from 'react'
import { Apple, ArrowUpRight } from 'lucide-react'
import '../../../public/CSS/Clients/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">fresha</h2>
          <button className="download-button">
            <span>Télécharger l'app</span>
            <Apple className="icon" />
            <span className="google-icon">G</span>
          </button>
        </div>

        <div className="footer-section">
          <h3>À propos de Fresha</h3>
          <ul>
            <li><a href="#">Carrières</a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Plan du site</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Pour les professionnels</h3>
          <ul>
            <li><a href="#">Pour les partenaires</a></li>
            <li><a href="#">Tarifs</a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Statut</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Mentions légales</h3>
          <ul>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Retrouvez-nous sur les réseaux sociaux</h3>
          <ul>
            <li><a href="#" className="social-link">Facebook <ArrowUpRight className="icon" /></a></li>
            <li><a href="#" className="social-link">Twitter <ArrowUpRight className="icon" /></a></li>
            <li><a href="#" className="social-link">LinkedIn <ArrowUpRight className="icon" /></a></li>
            <li><a href="#" className="social-link">Instagram <ArrowUpRight className="icon" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <button className="language-button">
          <span className="language-icon">🌐</span>
          français
        </button>
        <p className="copyright">© 2024 Fresha.com SV Ltd</p>
      </div>
    </footer>
  )
}