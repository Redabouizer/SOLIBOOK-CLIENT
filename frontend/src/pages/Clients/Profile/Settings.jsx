import { useState } from 'react'
import SocialButton from './Settings/SocialButton'
import NotificationToggle from './Settings/NotificationToggle'
import SettingsSection from './Settings/SettingsSection'

export default function Settings() {
  const [notifications, setNotifications] = useState({
    sms: true,
    email: true,
    commercial: false
  })

  const [socialConnections, setSocialConnections] = useState({
    facebook: true,
    google: false
  })

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleSocialConnection = (platform, isConnecting) => {
    setSocialConnections(prev => ({
      ...prev,
      [platform]: isConnecting
    }))
  }

  const handleDeleteAccount = () => {
    if (window.confirm('Souhaitez-vous vraiment quitter Fresha ?')) {
      console.log('Account deletion requested')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Paramètres</h2>
      
      <SettingsSection
        title="Mes connexions avec les réseaux sociaux"
        description="Associez vos profils sur les réseaux sociaux pour un accès encore plus facile à votre compte Fresha."
      >
        <div className="space-y-4">
          <SocialButton
            platform="Facebook"
            icon="/facebook-icon.png"
            isConnected={socialConnections.facebook}
            onToggle={handleSocialConnection}
          />
          <SocialButton
            platform="Google"
            icon="/google-icon.png"
            isConnected={socialConnections.google}
            onToggle={handleSocialConnection}
          />
        </div>
      </SettingsSection>

      <SettingsSection
        title="Mes notifications"
        description="Nous vous enverrons des messages concernant vos rendez-vous, notre actualité ainsi que des offres commerciales."
      >
        <div className="space-y-5">
          <NotificationToggle
            title="Notifications de rendez-vous par SMS"
            description="Recevez des SMS en fonction des paramètres de répétition"
            checked={notifications.sms}
            onChange={() => handleNotificationChange('sms')}
          />
          <NotificationToggle
            title="Notifications de rendez-vous par e-mail"
            description="Recevez des offres et des réductions par e-mail"
            checked={notifications.email}
            onChange={() => handleNotificationChange('email')}
          />
          <NotificationToggle
            title="Notifications commerciales par SMS"
            description="Si vous avez précédemment choisi de vous désinscrire en envoyant STOP par SMS, merci de nous contacter directement pour vous réinscrire"
            checked={notifications.commercial}
            onChange={() => handleNotificationChange('commercial')}
          />
        </div>
      </SettingsSection>

      <SettingsSection
        title="Supprimer le compte"
        description="Souhaitez-vous vraiment quitter Fresha ?"
      >
        <button
          onClick={handleDeleteAccount}
          className="bg-danger text-white px-5 py-2.5 rounded-full text-sm hover:bg-red-700 transition-colors"
        >
          Supprimer mon compte
        </button>
      </SettingsSection>
    </div>
  )
}