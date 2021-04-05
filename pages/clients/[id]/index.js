import React from 'react';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();
  function loadProject() {
    router.push('/clients/charlie/projecta');
  }
  return (
    <div>
      <button onClick={loadProject}>load project</button>
    </div>
  );
}
