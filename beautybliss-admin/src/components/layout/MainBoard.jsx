import './MainBoard.scss'
import { useState } from "react"
import ServiceIcon from './ServiceIcon'

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
    const [active, setActive] = useState("handpflege");
    return (
        <>
            <div className="card">
                <div className="topbar">
                    <div className="topbar-actions">
                        <h2>Leistungen & Preise</h2>
                        <button className="card-btn">
                            <ServiceIcon type="edit" />
                            Preise bearbeiten
                        </button>
                    </div>
                    <p className="card-bottom">Alle Preise in EUR - Stand 2026</p>
                </div>

                <div className="card-grid">
                    <div className="btn-list">
                        <button className={`btn-chip ${active === "handpflege" ? "active" : ""}`}
                            onClick={() => setActive("handpflege")}>
                            <span>Handpflege</span>
                            <span>3</span>
                        </button>
                        <button className={`btn-chip ${active === "fusspflege" ? "active" : ""}`}
                            onClick={() => setActive("fusspflege")}>
                            <span>Medizinische Fußpflege</span>
                            <span>3</span>
                        </button>
                        <button className={`btn-chip ${active === "gesicht" ? "active" : ""}`}
                            onClick={() => setActive("gesicht")}>
                            <span>Gesichtsbehandlungen</span>
                            <span>2</span>
                        </button>
                        <button className={`btn-chip ${active === "haarentfernung" ? "active" : ""}`}
                            onClick={() => setActive("haarentfernung")}>
                            <span>Haarentfernung</span>
                            <span>5</span>
                        </button>
                        <button className={`btn-chip ${active === "wimpern" ? "active" : ""}`}
                            onClick={() => setActive("wimpern")}>
                            <span>Wimpern & Augenbrauen</span>
                            <span>7</span>
                        </button>
                        <button className={`btn-chip ${active === "wimpernverlaengerung" ? "active" : ""}`}
                            onClick={() => setActive("wimpernverlaengerung")}>
                            <span>Wimpernverlängerung</span>
                            <span>6</span>
                        </button>
                        <button className={`btn-chip ${active === "microblading" ? "active" : ""}`}
                            onClick={() => setActive("microblading")}>
                            <span>Microblading</span>
                            <span>3</span>
                        </button>
                    </div>
                    <table className="service-table">
                        <thead>
                            <tr>
                                <th style={{ width: "55%" }}>Leistung</th>
                                <th style={{ width: "20%" }}>Dauer</th>
                                <th style={{ width: "25%", textAlign: "right" }}>Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {active === "handpflege" && <>
                                <tr>
                                    <td><div className="service-n">Klassische Maniküre</div></td>
                                    <td><div className="service-duration">–</div></td>
                                    <td><div className="service-price">30 €</div></td>
                                </tr>
                                <tr>
                                    <td><div className="service-n">Lackieren</div></td>
                                    <td><div className="service-duration">–</div></td>
                                    <td><div className="service-price">7 €</div></td>
                                </tr>
                                <tr>
                                    <td><div className="service-n">Lackentfernung</div></td>
                                    <td><div className="service-duration">–</div></td>
                                    <td><div className="service-price">2,50 €</div></td>
                                </tr>
                            </>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}

export default MainBoard