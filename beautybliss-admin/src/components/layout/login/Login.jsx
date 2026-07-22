import { useState } from "react"
import { supabase } from "../../../supabase"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const startLogin = async (e) => {
        e.preventDefault()
        const {error} = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
    }

    return (
        <div className="login">
            <h1>BeautyBliss Login</h1>
            {error && <p className="error">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={startLogin}>Einloggen</button>
        </div>
    )
}

export default Login