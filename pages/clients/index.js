import React from 'react';
import Link from 'next/link';
export default function index() {
  const clients = [
    { id: 'charlie', name: 'Charlie' },
    { id: 'nick', name: 'Nick' },
  ];
  return (
    <div>
      clients page
      {clients.map((client) => {
        return (
          <div key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
