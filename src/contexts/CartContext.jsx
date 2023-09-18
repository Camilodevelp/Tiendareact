import { Children, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ Children }) => {
  return (
    <CartContext.Provider value={{ coderhouse: "react" }}>
      {Children}
    </CartContext.Provider>
  );
};
