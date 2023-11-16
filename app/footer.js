"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Component() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 mb-4 border-top">
            <div className='text-muted'>
              © {new Date().getFullYear()} GraphQL React Example
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Component;
