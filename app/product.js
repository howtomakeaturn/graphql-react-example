"use client";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Component({ id, name, description, featured_image, price }) {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={ featured_image } style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          { description }
        </Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Price: ${ price.toLocaleString() }
      </Card.Footer>
    </Card>
  );
}

export default Component;
