import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Page() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <p class="mt-3 mt-md-4">This website is part of the following project:</p>
            <p>
              <a href="https://graphql-laravel-example.tw">https://graphql-laravel-example.tw</a>
            </p>
            <p>
              <a href="https://github.com/howtomakeaturn/graphql-laravel-example">https://github.com/howtomakeaturn/graphql-laravel-example</a>
            </p>
          </Col>
        </Row>
      </Container>
    </main>
    // <main>
    //   <div>
    //     <p>About page</p>
    //   </div>
    // </main>
  )
}
