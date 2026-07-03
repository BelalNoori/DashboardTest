
import './App.css'
import './fonts.scss'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/layout/dashboard'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
