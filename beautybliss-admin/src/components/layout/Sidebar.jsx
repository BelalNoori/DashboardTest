import './Sidebar.scss'
import SidebarHeader from './SidebarHeader'
import SidebarNav from './SidebarNav'

function Sidebar() {
    return (
        <>
            <div className="wrapper">
                <div className="sidebar-left">       
                    <SidebarHeader />
                    <SidebarNav />
                </div>
                <div className="sidebar-right"></div>
            </div>
        </>
    )
}

export default Sidebar