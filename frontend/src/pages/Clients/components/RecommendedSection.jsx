function RecommendedSection() {
  const recommendations = [
    {
      id: 1,
      name: "Alwan Salon",
      rating: 4.8,
      reviews: 4,
      location: "Ville Nouvelle, Fes",
      type: "Institut de beauté",
      image: "path_to_image1.jpg"
    },
    // Add more recommendations...
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Recommandés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <span>★</span>
                  <span>{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-500">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedSection