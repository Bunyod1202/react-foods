import { Route, Routes, useNavigate } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { Home } from './pages/Home'
import './assets/styles/main.scss'
import { FoodsList } from './components/Foods/FoodsList/FoodsList'
import { Piece } from './pages/Piece'
import { useEffect } from 'react'
import { Settings } from './pages/Settings'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [])
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/home/*" element={<Home />}>
          <Route index element={<FoodsList />} />
          <Route path="colddishes" element={<p>colddishes</p>} />
          <Route path="soup" element={<p>soup</p>} />
          <Route path="grill" element={<p>grill</p>} />
          <Route path="appetizer" element={<p>appetizer</p>} />
          <Route path="dessert" element={<p>dessert</p>} />
        </Route>
        <Route path="/settings/*" element={<Settings />}>
          <Route path='settings' element={<p>Settings</p>} />
          <Route path="restaurant" element={<p>Restaurant</p>} />
          <Route index element={<p>management</p>} />
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
