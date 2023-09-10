import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const onAdd = () =>  alert();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} style={{ height: "180px" }} />
      <div>{product.category}</div>
      <ItemCount onAdd={onAdd} />
    </div>
  );
};
