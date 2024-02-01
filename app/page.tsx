import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center h-screen text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-muted-foreground">
        You can open{' '}
        <Link href="/docs" className="font-semibold underline text-foreground">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
