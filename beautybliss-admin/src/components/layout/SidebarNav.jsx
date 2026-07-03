import { useState } from "react"
import './SidebarNav.scss'
import NavItem from './NavItem'

function SidebarNav() {
    const [active, setActive] = useState("Preisliste");
    return (
        <>
            <p>Salon</p>
            <NavItem label="Preisliste" isActive={active === "Preisliste"}
                onClick={() => setActive("Preisliste")}/>
            <NavItem label="Über Uns" isActive={active === "Über Uns"}
                onClick={() => setActive("Über Uns")}/>
            <NavItem label="Öffnungszeiten" isActive={active === "Öffnungszeiten"}
                onClick={() => setActive("Öffnungszeiten")}/>
            <p>System</p>

            <NavItem label="Einstellungen" isActive={active === "Einstellungen"}
                onClick={() => setActive("Einstellungen")}/>
            <NavItem label="Ausloggen" isActive={active === "Ausloggen"}
                onClick={() => setActive("Ausloggen")}/>
        </>
    )
}

export default SidebarNav