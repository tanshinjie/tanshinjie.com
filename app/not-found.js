'use client';

import Link from 'next/link';
import { Card } from './components/Card';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-white text-opacity-90 mt-0 py-6 px-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-xl">Page Not Found</h2>
          <p className="mb-4">The page you're looking for doesn't exist.</p>
          <Link href="/" className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-opacity-90 transition">
            Go Home
          </Link>
        </div>
      </Card>
    </main>
  );
} 