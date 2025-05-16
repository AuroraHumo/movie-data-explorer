import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="p-6 text-center items-center">{children}</main>
    </div>
  );
}
