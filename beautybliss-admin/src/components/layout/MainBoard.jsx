import './MainBoard.scss'

function MainBoard() {
    return (
        <div className="mainboard">
            <Topbar />
            <Card />
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
            <p className="topbar-bottom">Alle Lesitungen, Dauer und Preise auf einen Blick.</p>
        </div>
    )
}

function Card() {
    return (
        <>
            <div className="card">
                <div className="topbar">
                    <div className="topbar-actions">
                        <h2>Leistungen & Preise</h2>
                        <button className="card-btn">Preise bearbeiten</button>
                    </div>
                    <p className="card-bottom">Alle Preise in EUR - Stand 2026</p>
                </div>

                <div className="card-grid">
                
            </div>
            </div>
        </>
    )

}

export default MainBoard