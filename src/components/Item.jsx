import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img 
    style={{height: "180px"}} 
    variant="top" 
    src={product.imageID} 
  />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.Description}</Card.Text>
      <Card.Text>{product.stock}</Card.Text>
      <Card.Text>{`$${product.price}`}</Card.Text>
      <Card.Text>{product.id}</Card.Text>
      <Link to={`/item/${product.id}`}>
      <Button variant="primary">Go somewhere</Button>
      </Link>
    </Card.Body>
  </Card>
      )