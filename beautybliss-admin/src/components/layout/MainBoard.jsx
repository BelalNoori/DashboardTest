import './MainBoard.scss'
import { useState, useEffect } from "react"
import ServiceIcon from './ServiceIcon'
import { supabase } from '../../supabase'

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
                <button className="topbar-btn" >+ Neue Leistung</button>
            </div>
            <p className="topbar-bottom">Alle Lesitungen, Dauer und Preise auf einen Blick.</p>
        </div>
    )
}

function Card() {
    const [active, setActive] = useState("handpflege")
    const [services, setServices] = useState([])
    const [showEditModal, setShowEditModal] = useState(false)
    const [newService, setNewService] = useState({
        name: '',
        description: '',
        duration: '',
        price: '',
        category: active
    })
    const [editService, setEditService] = useState(null)

    useEffect(() => {
        const fetchServices = async () => {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .eq('category', active)
                .order('sort_order', { ascending: true })

            if (error) console.error(error)
            else setServices(data)
        }

        fetchServices()
    }, [active])

    const handleAddService = async () => {
        const { error } = await supabase
            .from('services')
            .insert([newService])

        if (error) {
            console.error(error)
        } else {
            setShowEditModal(false)
            const { data } = await supabase
                .from('services')
                .select('*')
                .eq('category', active)
                .order('sort_order', { ascending: true })
            setServices(data)
        }
    }

    const handleDelete = async (id) => {
        const { error } = await supabase
            .from('services')
            .delete()
            .eq('id', id)

        if (error) {
            console.error(error)
        } else {
            setServices(services.filter(s => s.id !== id))
        }
    }

    const handleUpdate = async () => {
        const { error } = await supabase
            .from('services')
            .update({
                name: editService.name,
                description: editService.description,
                duration: editService.duration,
                price: editService.price,
                category: editService.category
            })
            .eq('id', editService.id)

        if (error) {
            console.error(error)
        } else {
            setEditService(null)
            const { data } = await supabase
                .from('services')
                .select('*')
                .eq('category', active)
                .order('sort_order', { ascending: true })
            setServices(data)
        }
    }

    return (
        <>
            <div className="card">
                <div className="topbar">
                    <div className="topbar-actions">
                        <h2>Leistungen & Preise</h2>
                        <button className="card-btn" onClick={() => setShowEditModal(true)}>
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
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td>
                                        <div className="service-name">{service.name}</div>
                                        {service.description && <div className="service-desc">{service.description}</div>}
                                    </td>
                                    <td><div className="service-duration">{service.duration || '–'}</div></td>
                                    <td><div className="service-price">{service.price} €</div></td>
                                    <td>
                                        <button onClick={() => setEditService(service)}>✏️</button>
                                        <button onClick={() => handleDelete(service.id)}>🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {showEditModal && (
                    <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <h2>Leistung bearbeiten</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={newService.name}
                                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                            />
                            <textarea
                                placeholder="Beschreibung (optional)"
                                value={newService.description}
                                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Dauer (optional)"
                                value={newService.duration}
                                onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Preis"
                                value={newService.price}
                                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                            />
                            <select
                                value={newService.category}
                                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                            >
                                <option value="handpflege">Handpflege</option>
                                <option value="fusspflege">Medizinische Fußpflege</option>
                                <option value="gesicht">Gesichtsbehandlungen</option>
                                <option value="haarentfernung">Haarentfernung</option>
                                <option value="wimpern">Wimpern & Augenbrauen</option>
                                <option value="wimpernverlaengerung">Wimpernverlängerung</option>
                                <option value="microblading">Microblading</option>
                            </select>

                            <button onClick={handleAddService}>Speichern</button>
                            <button onClick={() => setShowEditModal(false)}>Abbrechen</button>
                        </div>
                    </div>
                )}

                {editService && (
                    <div className="modal-overlay" onClick={() => setEditService(null)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <h2>Leistung bearbeiten</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={editService.name}
                                onChange={(e) => setEditService({ ...editService, name: e.target.value })}
                            />
                            <textarea
                                placeholder="Beschreibung (optional)"
                                value={editService.description || ''}
                                onChange={(e) => setEditService({ ...editService, description: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Dauer (optional)"
                                value={editService.duration || ''}
                                onChange={(e) => setEditService({ ...editService, duration: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Preis"
                                value={editService.price}
                                onChange={(e) => setEditService({ ...editService, price: e.target.value })}
                            />
                            <select
                                value={editService.category}
                                onChange={(e) => setEditService({ ...editService, category: e.target.value })}
                            >
                                <option value="handpflege">Handpflege</option>
                                <option value="fusspflege">Medizinische Fußpflege</option>
                                <option value="gesicht">Gesichtsbehandlungen</option>
                                <option value="haarentfernung">Haarentfernung</option>
                                <option value="wimpern">Wimpern & Augenbrauen</option>
                                <option value="wimpernverlaengerung">Wimpernverlängerung</option>
                                <option value="microblading">Microblading</option>
                            </select>

                            <button onClick={handleUpdate}>Speichern</button>
                            <button onClick={() => setEditService(null)}>Abbrechen</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}

export default MainBoard