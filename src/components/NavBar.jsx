import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as = {Link} to = "{/categoryID/Camisas} " >Camisas</Nav.Link>
            <Nav.Link href="#pricing">Pantalones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


