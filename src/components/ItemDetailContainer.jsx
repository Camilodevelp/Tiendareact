import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Card";
import { getDoc, getFirestore, doc } from "firebase/firestore";

//import data from "../data/productos.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore()

    const refDoc = doc(db, "Items", id)

    getDoc(refDoc).then(snapshot => {
      setProduct({id: snapshot.id, ...snapshot.data()})
    }).finally(() => setLoading(false))
  }, []);


  if (loading) return <div>Loading...</div>;

  return (
    <Container className="detalle">
      <h1>Detalle</h1>
      <ItemDetail product={product} />
    </Container>
  );
};
