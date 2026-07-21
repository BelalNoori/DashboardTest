import './ServiceIcon.scss'

// Icon-Komponente mit echten SVGs aus public Ordner
// Icon-Typen: price, settings, logout, edit
function ServiceIcon({ type }) {
  // Icon-Pfade aus public Ordner
  const iconPaths = {
    price: '/price.svg',
    settings: '/settings.svg',
    logout: '/logout.svg',
    edit: '/edit.svg',
    default: '/price.svg' // Fallback
  }

  const iconSrc = iconPaths[type] || iconPaths.default

  return (
    <div className="service-icon">
      <img src={iconSrc} alt={type} className="icon-img" />
    </div>
  )
}

export default ServiceIcon
