"use client";

import Alert from 'react-bootstrap/Alert';
import useSWR from 'swr';
import { useState } from 'react';

function Component() {
  const [email, setEmail] = useState('');

  const [shouldSend, setShouldSend] = useState(false);

  const gql = `mutation {
    createSubscriber(email: "${email}")
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
    .then((result) => {
      if (result.data.createSubscriber) {
        setShouldSend(false);
        alert('Thank you for subscribing!');
      }
      return result.data;
    });

  const { data } = useSWR(shouldSend ? "subscribe" : null, fetcher);

  const handleSubmit = () => {
    if (email.length > 0) {
      setShouldSend(true);
    }
  }

  return (
    <div className="mt-4">
      <Alert variant="primary">
        <div className="">
            <label className="font-weight-bold">Subscribe to our newsletter!</label>
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Your email..."
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Subscribe</button>
        </div>
      </Alert>
    </div>
  );
}

export default Component;
