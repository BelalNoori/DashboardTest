import { useEffect, useState, useMemo } from "react"
import { supabase } from "../../../supabase"
import "./Login.scss"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [revealed, setReaveled] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setReaveled(true), 800)
        return () => clearTimeout(timer)
    }, [])

    const tileDelays = useMemo(() =>
        Array.from({ length: 24 }).map(() => Math.random() * 0.4),
        [])

    const startLogin = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
    }

    return (
        <div className="login-bg">
            <div className={`login-tiles ${revealed ? 'revealed' : ''}`}>
                {tileDelays.map((delay, i) => (
                    <div
                        key={i}
                        className="login-tile"
                        style={{ animationDelay: `${delay}s` }}
                    />
                ))}
            </div>

            <div className={`login-card ${revealed ? 'visible' : ''}`}>
                <div className="login-logo">BB</div>
                <div className="login-brand">BeautyBliss</div>
                <div className="login-sub">Admin · Hamburg</div>

                {error && <p className="login-error">{error}</p>}

                <input
                    className="login-field"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="login-field"
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-btn" onClick={startLogin}>Einloggen</button>
            </div>
        </div>
    )
}

export default Login