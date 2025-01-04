export default function SettingsSection({ title, description, children }) {
    return (
      <section className="bg-white rounded-lg shadow-sm p-5 mb-5">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-5">{description}</p>
        {children}
      </section>
    )
  }