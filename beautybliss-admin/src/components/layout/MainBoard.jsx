import './MainBoard.scss'

function MainBoard() {
    return (
        <div className="mainboard">
            <Topbar />
        </div>
    )
}

function Topbar() {
    return (
        <div className="topbar">
            <p className="topbar-title">Beauty Bliss · Salon</p>
            <div className="topbar-actions">
                <h1>Preisliste</h1>
                <button className="topbar-btn">+ Neue Leistung</button>
            </div>
            <p className="topbar-title">Alle Lesitungen, Dauer und Preise auf einen Blick.</p>
        </div>
    )
}



export default MainBoard