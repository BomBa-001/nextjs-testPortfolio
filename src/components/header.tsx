import Navbar from "./navigation/navbar";

const Header = () => {
  return <>
  {/* <header className="fixed start-0 top-0 z-50 w-full bg-primary backdrop-filter text-white"> */}
  <header className="fixed start-0 top-0 py-2 z-50 w-full bg-background/60 backdrop-blur-md border-b">
    <Navbar />
  </header>
  </>;
};
export default Header;