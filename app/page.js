"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './product'
import useSWR from 'swr';
import Newsletter from './newsletter'

const gql = `query {
  products {
    id
    name
    description
    featured_image
    price
    comments {
      content
      user {
        name
      }
    }
  },
}`;

const fetcher = () => fetch('https://graphql-laravel-example.tw/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: gql
  }),
})
  .then((res) => res.json())
  .then((result) => result.data);

export default function Page() {
  const { data, error } = useSWR('products', fetcher);

  if (error) return (
    <Container>
      <Row>
        <Col>
          <div className="mt-3">failed to load</div>
        </Col>
      </Row>
    </Container>
  );

  if (!data) return (
    <Container>
      <Row>
        <Col>
          <div className="mt-3">loading...</div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <div className="p-5 mt-3 mt-md-4 bg-light rounded-3">
              <div className="container-fluid">
                <h1 className="display-5 fw-bold">GraphQL React Example</h1>
                <p className="col-md-8 fs-4">A comprehensive example project to show how to use GraphQL + React + Laravel in the real world!</p>
                <a className="btn btn-primary btn-lg" href="https://graphql-laravel-example.tw/">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {data.products.map((product, i) =>
            <Col key={i} xs={12} md={6} lg={3}>
              <div className="mt-3 mt-md-4">
                <Product
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  featured_image={product.featured_image}
                  price={product.price}
                  comments={product.comments}
                />
              </div>
            </Col>
          )}
        </Row>
        <Row>
          <Col>
            <Newsletter />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
