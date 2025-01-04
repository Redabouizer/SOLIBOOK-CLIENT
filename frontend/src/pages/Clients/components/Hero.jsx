function Hero() {
  return (
    <div className="relative bg-gradient-radial from-purple-100 via-pink-50 to-white min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 max-w-3xl">
          Réservez des prestations de beauté et de bien-être près de chez vous
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 max-w-4xl">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tous les soins et les établi..."
              className="w-full p-2 border-none focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Position actuelle"
              className="w-full p-2 border-none focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <input
              type="date"
              className="w-full p-2 border-none focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <input
              type="time"
              className="w-full p-2 border-none focus:outline-none"
            />
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Rechercher
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl font-semibold">573,429</p>
          <p className="text-gray-600">rendez-vous pris aujourd'hui</p>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <span>Télécharger l'app</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero