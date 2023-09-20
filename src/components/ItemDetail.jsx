import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext)
 const onAdd = (count) =>  addItem(product, count);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} style={{ height: "180px" }} />
      <div>Stock: {product.stock} </div>
      <div>Precio: {product.precio} </div>
      <div>{product.category}</div>
      <ItemCount stock={product.stock} onAdd={onAdd} />
    </div>
  );
};
