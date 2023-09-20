import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hiyaa!!" />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/Category/:id"
            element={<ItemListContainer greeting="Hiyaa!!" />}
          />
          <Route
            path="/Item/:id"
            element={<ItemDetailContainer greeting="Hiyaa!!" />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
