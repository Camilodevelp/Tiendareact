import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hiyaa!!" />} />
        <Route
          path="/Category/:id"
          element={<ItemListContainer greeting="Hiyaa!!" />}
        />
        <Route path="/Item/:id" element={<ItemDetailContainer greeting="Hiyaa!!" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
