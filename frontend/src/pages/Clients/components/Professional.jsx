function Professional() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Pour les professionnels</h2>
            <p className="text-lg text-gray-700 mb-8">
              Boostez gratuitement l'activité de votre entreprise grâce à la meilleure plateforme de réservation dédiée aux salons et aux spas. Élue n° 1 par un jury indépendant composé de professionnels du secteur.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md">
              En savoir plus
            </button>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">★★★★★</span>
                <span className="font-bold">Excellent 5/5</span>
              </div>
              <p className="text-sm text-gray-600">Plus de 1250 avis sur Capterra</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/path-to-calendar-image.jpg"
              alt="Professional Calendar"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professional