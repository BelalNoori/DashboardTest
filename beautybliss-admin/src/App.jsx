import { useState, useEffect } from "react"
import { supabase } from './supabase'
import './App.css'
import './fonts.scss'
import Sidebar from './components/layout/Sidebar'
import MainBoard from './components/layout/MainBoard'
import Login from "./components/layout/login/Login"


function App() {
const [session, setSession] = useState("")

useEffect(() => {
  supabase.auth.getSession().then(({data: { session } }) => {
    setSession(session)
  })

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
  })

}, [])

if (!session) return <Login />


  return (
    <div className="app-layout">
      <Sidebar />
      <main>
        <MainBoard />
      </main>
    </div>
  )
}

export default App
