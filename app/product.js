"use client";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Linkify from 'linkify-react';

function Component({ id, name, description, featured_image, price, comments }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="text-center">
      <Card.Img variant="top" src={ featured_image } style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          <Linkify>
            { description }
          </Linkify>
        </Card.Text>
        <Button variant="secondary" onClick={handleShow}>View Comments</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Price: ${ price.toLocaleString() }
      </Card.Footer>
      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="">
            {comments.map((comment, i) =>
              <p key={i} className={'mb-0 ' + (i !== 0 ? 'mt-3' : '')}>
                { comment.user.name }: { comment.content }
              </p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default Component;
