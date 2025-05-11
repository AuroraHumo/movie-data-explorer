import Header from '../components/Header';

import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  // This is the layout component that wraps around all pages
  return (
    <>
      <Header />
      <main className="text-center max-h-screen p-4">
          {children}
        </main>
    </>
  );
}