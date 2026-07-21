import ServiceIcon from './ServiceIcon'

// NavItem Komponente mit optionaler Icon-Unterstützung
function NavItem({ label, isActive, onClick, icon }) {
    return (
        <button className={`nav-item ${isActive ? 'active' : ''}`}
        onClick={onClick}>
            {icon && <ServiceIcon type={icon} />}
            {label}
        </button>
    );
}

export default NavItem