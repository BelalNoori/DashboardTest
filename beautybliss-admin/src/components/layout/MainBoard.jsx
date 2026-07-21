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
    const [active, setActive] = useState("Services");
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
                        <button className={`btn-chip ${active === "hair" ? "active" : ""}`}
                            onClick={() => setActive("hair")}>
                            <span>Haare & Styling</span>
                            <span>5</span>
                        </button>
                        <button className={`btn-chip ${active === "faceclean" ? "active" : ""}`}
                            onClick={() => setActive("faceclean")}>
                            <span>Gesichtsbehandlung</span>
                            <span>4</span>
                        </button>
                        <button className={`btn-chip ${active === "nails" ? "active" : ""}`}
                            onClick={() => setActive("nails")}>
                            <span>Nägel</span>
                            <span>4</span>
                        </button>
                        <button className={`btn-chip ${active === "eyebrows" ? "active" : ""}`}
                            onClick={() => setActive("eyebrows")}>
                            <span>Wimpern & Augenbrauen</span>
                            <span>4</span>
                        </button>
                        <button className={`btn-chip ${active === "wellness" ? "active" : ""}`}
                            onClick={() => setActive("wellness")}>
                            <span>Wellness</span>
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
                            <tr>
                                <td>
                                    <div className="service-name">Damenhaarschniit</div>
                                    <div className="service-desc">Beratung, Waschen, Schnitt, Föhnen & Styling</div>
                                </td>
                                <td>
                                    <div className="service-duration">
                                        60Min.
                                    </div>
                                </td>
                                <td>
                                    <div className="service-price">
                                        75 €
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="service-name">Damenhaarschniit</div>
                                    <div className="service-desc">Beratung, Waschen, Schnitt, Föhnen & Styling</div>
                                </td>
                                <td>
                                    <div className="service-duration">
                                        60Min.
                                    </div>
                                </td>
                                <td>
                                    <div className="service-price">
                                        75 €
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="service-name">Damenhaarschniit</div>
                                    <div className="service-desc">Beratung, Waschen, Schnitt, Föhnen & Styling</div>
                                </td>
                                <td>
                                    <div className="service-duration">
                                        60Min.
                                    </div>
                                </td>
                                <td>
                                    <div className="service-price">
                                        75 €
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="service-name">Damenhaarschniit</div>
                                    <div className="service-desc">Beratung, Waschen, Schnitt, Föhnen & Styling</div>
                                </td>
                                <td>
                                    <div className="service-duration">
                                        60Min.
                                    </div>
                                </td>
                                <td>
                                    <div className="service-price">
                                        75 €
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="service-name">Hochsteckfrisur</div>
                                    <div className="service-desc">Beratung, Waschen, Schnitt, Föhnen & Styling</div>
                                </td>
                                <td>
                                    <div className="service-duration">
                                        60Min.
                                    </div>
                                </td>
                                <td>
                                    <div className="service-price">
                                        75 €
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}

export default MainBoard