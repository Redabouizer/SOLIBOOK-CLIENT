export default function SocialButton({ platform, icon, isConnected, onToggle }) {
    return (
      <div className="flex justify-between items-center py-2.5">
        <div className="flex items-center gap-2.5">
          <img src={icon} alt={platform} className="w-6 h-6" />
          <span className="text-gray-900">{platform}</span>
        </div>
        <button
          onClick={() => onToggle(platform, !isConnected)}
          className={`px-4 py-2 rounded-full text-sm ${
            isConnected
              ? 'text-gray-600 border border-gray-300'
              : 'bg-blue-600 text-white'
          }`}
        >
          {isConnected ? 'Déconnecter' : 'Connecter'}
        </button>
      </div>
    )
  }