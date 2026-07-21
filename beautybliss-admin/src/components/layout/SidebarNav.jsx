import { useState } from "react"
import './SidebarNav.scss'
import NavItem from './NavItem'

function SidebarNav() {
    const [active, setActive] = useState("Preisliste");
    return (
        <>
            <p>Salon</p>
            <NavItem label="Preisliste" isActive={active === "Preisliste"}
                onClick={() => setActive("Preisliste")} icon="price"/>
            {/* <NavItem label="Über Uns" isActive={active === "Über Uns"}
                onClick={() => setActive("Über Uns")} icon="default"/> */}
            {/* <NavItem label="Öffnungszeiten" isActive={active === "Öffnungszeiten"}
                onClick={() => setActive("Öffnungszeiten")} icon="default"/> */}
            <p>System</p>

            <NavItem label="Einstellungen" isActive={active === "Einstellungen"}
                onClick={() => setActive("Einstellungen")} icon="settings"/>
            <NavItem label="Ausloggen" isActive={active === "Ausloggen"}
                onClick={() => setActive("Ausloggen")} icon="logout"/>
        </>
    )
}

export default SidebarNav