import Navbar from "./navigation/navbar";

const Header = () => {
  return <>
  <header className="fixed start-0 top-0 z-50 w-full bg-primary backdrop-filter text-white">
    <Navbar/>
  </header>
  </>;
};
export default Header;