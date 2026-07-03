
import './App.css'
import './fonts.scss'
import Sidebar from './components/layout/Sidebar'
import MainBoard from './components/layout/MainBoard'

function App() {
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
