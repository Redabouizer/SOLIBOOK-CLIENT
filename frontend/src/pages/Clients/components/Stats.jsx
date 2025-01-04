function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          La destination n° 1 dans le monde pour la beauté et le bien-être
        </h2>
        <p className="text-gray-600 mb-12">
          Une solution, un logiciel. Les meilleurs professionnels du secteur lui font déjà confiance
        </p>

        <div className="text-4xl font-bold mb-12">+ d'1 milliard</div>
        <p className="text-gray-600 mb-16">de rendez-vous pris sur Solibook</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold mb-2">+ de 110 000</div>
            <p className="text-gray-600">entreprises partenaires</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">+ de 120 pays</div>
            <p className="text-gray-600">utilisent Solibook</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">+ de 450 000</div>
            <p className="text-gray-600">professionnels</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats