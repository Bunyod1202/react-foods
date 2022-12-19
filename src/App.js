import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu/Menu";
import { Home } from "./pages/Home";
import "./assets/styles/main.scss"

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />  
      </Routes>

    </div>
  );
}

export default App;
