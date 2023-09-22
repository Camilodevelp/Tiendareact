import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {CartWidget} from "./CartWidget"


export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as = {Link} to={"/Category/Camisa"}>Camisas</Nav.Link>
            <Nav.Link as = {Link} to={"/Category/Pantalon"}>Pantalones</Nav.Link>
            <Nav.Link as = {Link} to={"/Category/Zapatos"}>Zapatos</Nav.Link>
            <Nav.Link as = {Link} to={"/Category/Jean"}>Jeans</Nav.Link>
            <Nav.Link as = {Link} to={"/Category/Camiseta"}>Camisetas</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}


