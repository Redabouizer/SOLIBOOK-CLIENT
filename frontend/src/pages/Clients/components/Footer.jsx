function Footer() {
  const footerLinks = {
    about: [
      { name: "Carrières", href: "#" },
      { name: "Aide", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Plan du site", href: "#" }
    ],
    professional: [
      { name: "Pour les partenaires", href: "#" },
      { name: "Tarifs", href: "#" },
      { name: "Aide", href: "#" },
      { name: "Statut", href: "#" }
    ],
    legal: [
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions d'utilisation", href: "#" }
    ],
    social: [
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" }
    ]
  }

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Solibook</h2>
            <button className="bg-white px-6 py-2 rounded-full shadow-sm flex items-center gap-2 mb-4">
              Télécharger l'app
            </button>
          </div>

          <div>
            <h3 className="font-medium mb-4">À propos de Solibook</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Pour les professionnels</h3>
            <ul className="space-y-2">
              {footerLinks.professional.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Retrouvez-nous sur les réseaux sociaux</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500">© 2024 Solibook.com SV Ltd</div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-900">français</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer