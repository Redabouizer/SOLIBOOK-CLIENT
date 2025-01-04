export default function NotificationToggle({ title, description, checked, onChange }) {
    return (
      <div className="flex justify-between items-start py-2.5">
        <div className="flex-1 mr-5">
          <span className="text-gray-900">{title}</span>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <label className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            className="hidden"
            checked={checked}
            onChange={onChange}
          />
          <span className={`absolute cursor-pointer inset-0 rounded-full transition-colors duration-300 ${
            checked ? 'bg-primary' : 'bg-gray-300'
          }`}>
            <span className={`absolute w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
              checked ? 'translate-x-6' : 'translate-x-0.5'
            } top-0.5`} />
          </span>
        </label>
      </div>
    )
  }