import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext)
 const onAdd = (count) =>  addItem(product, count);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>{product.title}</h1>
      <img src={product.imageID} alt={product.title} style={{ height: "180px" }} />
      <div>Detalle: {product.Description} </div>
      <div>Stock: {product.Stock} </div>
      <div>Precio: {product.Price} </div>
      <div>{product.categoryID}</div>
      <ItemCount stock={product.Stock} onAdd={onAdd} />
    </div>
  );
};
