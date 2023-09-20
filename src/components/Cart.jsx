import { Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);

  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio,
      0
    );

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      name: formValues,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        })
        clear()
        alert("Su orden: "+ id + " ha sido completada")
      }
    });
  };
  
  return (
    <Container>
      <h1>Cart</h1>{
        items.length === 0 ? <div>No hay productos</div> :
  }
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.precio} </td>
              <td>{item.quantity} </td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button onClick={() => clear()}>Borrar todo</button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total()} </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <h2>Ingrese datos de usuario</h2>
      <Form>
        <form.Group className="mb-3" contorlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name="name"
            required
            />
        </form.Group>
        <form.Group className="mb-3" contorlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type="email"
            name="email"
            required
            />
        </form.Group>
        <form.Group className="mb-3">
          <Form.Label>Tel</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={toHaveFormValues.phone}
            type="text"
            name="phone"
            required
            />
        </form.Group>
      </Form>
      <button onclick={sendOrder}>Comprar</button>
    </Container>
  );
};
