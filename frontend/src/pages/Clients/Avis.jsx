import React from 'react'
import '../../../public/CSS/Clients/Avis.css';

const ReviewCard = ({ stars, title, description, avatar, name, location }) => (
  <div className="review-card">
    <div className="stars">{'★'.repeat(stars)}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="user">
      <img src={avatar} alt={name} className="avatar" />
      <div>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  </div>
)

const Statistic = ({ number, description }) => (
  <div className="statistic">
    <h3>{number}</h3>
    <p>{description}</p>
  </div>
)

export default function Avis() {
  const reviews = [
    {
      stars: 5,
      title: "Le meilleur système de réservation",
      description: "Expérience incroyable et c'est facile de réserver. Régler les prestations est un jeu d'enfant : pas besoin d'espèces ni de cartes bancaires !",
      avatar: "/placeholder.svg?height=50&width=50",
      name: "Lucy",
      location: "Londres, Royaume-Uni"
    },
    {
      stars: 5,
      title: "Facile à utiliser et à naviguer",
      description: "Les rappels de Fresha facilitent grandement la vie. J'ai également découvert plusieurs excellents barbiers que je ne connaissais pas.",
      avatar: "/placeholder.svg?height=50&width=50",
      name: "Dan",
      location: "New York, États-Unis"
    },
    {
      stars: 5,
      title: "Très pratique pour trouver des barbiers",
      description: "J'utilise Fresha depuis deux ans et c'est de loin la meilleure plateforme de réservation. Je la recommande à 100 % !",
      avatar: "/placeholder.svg?height=50&width=50",
      name: "Dale",
      location: "Sydney, Australie"
    },
    {
      stars: 5,
      title: "Ma solution incontournable pour prendre soin de moi",
      description: "Fresha est une application incontournable pour les massages et les soins du visage. Je peux facilement trouver des établissements proches de chez moi et prendre rendez-vous. Je l'adore !",
      avatar: "/placeholder.svg?height=50&width=50",
      name: "Cameron",
      location: "Édimbourg, Royaume-Uni"
    }
  ]

  return (
    <div className="avis-container">
      <h2>Avis</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button className="scroll-button">›</button>

      <div className="destination-section">
        <h2>La destination n°1 au Maroc pour la beauté et le bien-être</h2>
        <p>Une solution, un logiciel. Les meilleurs professionnels du secteur lui font déjà confiance.</p>


        <div className="big-statistic">
          <h2>+ d'1 milliard</h2>
          <p>de rendez-vous pris sur Solibook</p>
        </div>

        <div className="statistics-grid">
          <Statistic number="+ de 110 000" description="entreprises partenaires" />
          <Statistic number="+ de 450 000" description="professionnels" />
        </div>
      </div>
    </div>
  )
}