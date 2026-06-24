import './Sidebar.scss'
import SidebarHeader from './SidebarHeader'

function Sidebar() {
    return (
        <>
            <div className="wrapper">
                <div className="sidebar-left">       
                    <SidebarHeader />
                </div>
                <div className="sidebar-right"></div>
            </div>
        </>
    )
}

export default Sidebar