import Navbar from './Navbar';

export default function Layout({ children }) {
  // Update the theme only if the mode changes
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto">
        <div className="px-4 py-12">{children}</div>
      </main>
    </div>
  );
}
