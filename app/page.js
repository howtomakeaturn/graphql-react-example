"use client";

// import Image from 'next/image'
// import styles from './page.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './product'
import useSWR from 'swr';

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
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
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
      </Container>
    </main>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
