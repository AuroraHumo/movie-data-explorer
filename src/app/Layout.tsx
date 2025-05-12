import Header from '../components/Header';

import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <Header />
      <main className="text-center items-center justify-center max-h-screen p-4">
          {children}
        </main>
    </>
  );
}