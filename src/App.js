import { Navigate, Route, Routes } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { Home } from './pages/Home'
import './assets/styles/main.scss'
import { Piece } from './pages/Piece'
import { ModalContextAdd } from './context/ModalContext'
import { useContext } from 'react'
import { Settings } from "./pages/Settings"

function App() {
  const { modalAdd } = useContext(ModalContextAdd)
  if (modalAdd === true) {
    document.querySelector("body").classList.add("app-scroll")
  } else {
    document.querySelector("body").classList.remove("app-scroll")

  }
  return (
    <div className="App ">
      <Menu />
      <Routes>
        <Route path='/' element={<Navigate to="home" replace={true} />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="settings/*" element={<Settings />} />
        <Route path='settings' element={<Navigate to="settingaddlist" replace={true} />} />
        <Route path="/piece" element={<Piece />} />
      </Routes>
    </div >
  )
}

export default App
