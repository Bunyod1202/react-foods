import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu/Menu";
import { Home } from "./pages/Home";
import "./assets/styles/main.scss"
import { FoodsList } from "./components/Foods/FoodsList/FoodsList";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/home/*" element={<Home />} >
          <Route index element={<FoodsList/>} />
          <Route path="colddishes" element={<p>colddishes</p>} />
          <Route path="soup" element={<p>soup</p>} />
          <Route path="grill" element={<p>grill</p>} />
          <Route path="appetizer" element={<p>appetizer</p>} />
          <Route path="dessert" element={<p>dessert</p>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;