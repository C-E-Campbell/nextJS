import React from 'react';
import { useRouter } from 'next/router';
export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Portfolio project page</h1>
    </div>
  );
}
