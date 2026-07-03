import './Sidebar.scss'
import SidebarHeader from './SidebarHeader'
import SidebarNav from './SidebarNav'
import SidebarFooter from './SidebarFooter'

function Sidebar() {
    return (
        <>
            <div className="wrapper">
                <div className="sidebar-left">       
                    <SidebarHeader />
                    <SidebarNav />
                    <SidebarFooter />
                </div>
            </div>
        </>
    )
}

export default Sidebar