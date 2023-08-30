import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
import data from "../data/productos.json";

const categories = data.map((product) => product.category);
const uniqueCategories = new Set(categories);

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {[...uniqueCategories].map((category) => (
          <Nav.Link key= {category} href={`/category/${category}`}>{category}</Nav.Link>
        ))}
      </Nav>
    </Container>
    <CartWidget />
  </Navbar>
);
