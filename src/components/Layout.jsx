import Navbar from './NavBar';

export default function Layout({ children }) {
  // Update the theme only if the mode changes
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className=" w-full ">
        <div className="flex flex-col w-full h-full">{children}</div>
      </main>
    </div>
  );
}
