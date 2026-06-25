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
            <NavItem label="Über Uns"/>
            <NavItem label="Öffnungszeiten"/>
        </>
    )
}

export default SidebarNav