import Link from 'next/link';
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="about">about</Link>
      <Link href="clients">clients</Link>
    </div>
  );
}

export default Home;
