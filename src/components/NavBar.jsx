import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import { CartWidget } from "./CartWidget";
import data from "../data/productos.json";

export const NavBar = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "Items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []);
  const categories = data.map((product) => product.categoryID);
  const uniqueCategories = new Set(categories);

  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {[...uniqueCategories].map((categoryID) => (
          <Nav.Link
            as={NavLink}
            key={categoryID}
            to={`/category/${categoryID}`}
          >
            {categoryID}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
    <CartWidget />
  </Navbar>;
};
