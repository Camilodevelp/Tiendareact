import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { coderhouse } = useContext(CartContext)
  const onAdd = (count) =>  alert(count);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>{product.name}{coderhouse}</h1>
      <img src={product.img} alt={product.name} style={{ height: "180px" }} />
      <div>{product.category}</div>
      <ItemCount onAdd={onAdd} />
    </div>
  );
};
