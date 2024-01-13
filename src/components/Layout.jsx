import NavHeader from './NavHeader';
export default function Layout({ children }) {
  // Update the theme only if the mode changes
  return (
    <div className="min-h-screen min-w-screen">
      <NavHeader />
      <main className=" w-screen h-full ">{children}</main>
    </div>
  );
}
