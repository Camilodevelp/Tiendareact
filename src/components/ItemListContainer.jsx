import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Card";
import { getFirestore, getDocs, collection } from "firebase/firestore";

//import data from "../data/productos.json";
import { ItemList } from "./ItemList";


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "Items");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) console.log("no results");
        else
          setProducts(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="mt - 4">
      <h1>{props.greeting}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
};
