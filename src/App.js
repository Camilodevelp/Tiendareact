import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <header></header>
      <NavBar />
      <ItemListContainer greeting="Hiyaa!" />
    </>
  );
}

export default App;
