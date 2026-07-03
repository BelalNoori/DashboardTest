
function NavItem({ label, isActive, onClick }) {
    return (
        <button className={`nav-item ${isActive ? 'active' : ''}`} 
        onClick={onClick}>{label}
        </button>
    );
}

export default NavItem