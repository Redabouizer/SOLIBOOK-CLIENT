import React from 'react'
import '../../../public/CSS/Clients/Article.css';

const ServiceCard = ({ image, title, rating, reviews, location, category }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <div className="rating">
      <span className="rating-score">{rating}</span>
      <span className="star">★</span>
      <span className="reviews">({reviews})</span>
    </div>
    <p>{location}</p>
    <p>{category}</p>
  </div>
)

const ServiceSection = ({ title, services }) => (
  <div className="service-section">
    <h2>{title}</h2>
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    <button className="scroll-button">›</button>
  </div>
)

export default function Article() {
  const newServices = [
    { image: "/image/OCP_image.avif?height=160&width=256", title: "ZAHA Hammam & Spa Casablanca", rating: 4.9, reviews: 42, location: "138 Boulevard Moulay Youssef , Casablanca", category: "Spa" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Maison d'Asa", rating: 5.0, reviews: 4, location: "Maarif, Dar-el-beida", category: "Institut de beauté" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Hospitality Calista Spa", rating: 4.9, reviews: 101, location: "Fonciere, Casablanca", category: "Spa" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Voss Beauty Studio - Beauty Salon de...", rating: 5.0, reviews: 49, location: "Maarif, Casablanca", category: "Institut de beauté" },
  ]

  const trendingServices = [
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Orchid Thai Spa", rating: 5.0, reviews: 3929, location: "Royal Ocean Plaza, Glacis Road, Gibraltar", category: "Massage" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Sunborn Infinity Spa", rating: 5.0, reviews: 2768, location: "Ocean Village , Gibraltar", category: "Spa" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Skin by Studio 44 on Madison", rating: 4.9, reviews: 822, location: "Midtown, Gibraltar", category: "Institut de beauté" },
    { image: "/image/OCP_image.avif?height=160&width=256", title: "Peluqueria De Hombre Y Ninos Los R...", rating: 5.0, reviews: 1084, location: "Calle Asunción 70, Sevilla", category: "Salon de coiffure" },
  ]

  return (
    <div className="article">
      <ServiceSection title="Nouveaux sur Fresha" services={newServices} />
      <ServiceSection title="Tendances" services={trendingServices} />
    </div>
  )
}
