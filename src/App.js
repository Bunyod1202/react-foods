import { Navigate, Route, Routes } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { Home } from './pages/Home'
import './assets/styles/main.scss'
import { FoodsList } from './components/Foods/FoodsList/FoodsList'
import { Piece } from './pages/Piece'
import { Settings } from './pages/Settings'
import SettingAddList from './components/Settings/SettingAddList/SettingAddList'
import {Setting} from './components/Settings/Setting'
import { ModalContextAdd } from './context/ModalContext'
import { useContext } from 'react'

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
        <Route path="/home/*" element={<Home />}>
          <Route index element={<FoodsList />} />
          <Route path="colddishes" element={<p>colddishes</p>} />
          <Route path="soup" element={<p>soup</p>} />
          <Route path="grill" element={<p>grill</p>} />
          <Route path="appetizer" element={<p>appetizer</p>} />
          <Route path="dessert" element={<p>dessert</p>} />
        </Route>
          <Route path='settings/*' element={<Navigate to="settingaddlist" replace={true} />} />
        <Route path="/settings/*" element={<Settings />}>
          <Route path='settings'  element={<p>Settiaaaaaaaaaaaaaaaaaaaaaaaangs</p>} />
          <Route path="restaurant" element={<p>Restaurant</p>} />
          <Route path='settingaddlist/*' element={<Setting />  } >
            <Route index  element={<SettingAddList />} />
            <Route path="colddishes" element={<p>sssssssssss</p>} />
            <Route path="soup" element={<p>sqqqqqqqqqqqqqqoup</p>} />
            <Route path="grill" element={<p>gaaaaaaaaaaaaaaaaaaaaarill</p>} />
            <Route path="appetizer" element={<p>apzzzzzzzzzzzzzzzzzzzzpetizer</p>} />
            <Route path="dessert" element={<p>dessrrrrrrrrrrrrrrrrrrrrrrert</p>} />
          </Route>
          <Route path="notification" element={<p>notification</p>} />
          <Route path="security" element={<p>security</p>} />
          <Route path="about" element={<p>about</p>} />
        </Route>
        <Route path="/piece" element={<Piece />} />
      </Routes>
    </div>
  )
}

export default App
