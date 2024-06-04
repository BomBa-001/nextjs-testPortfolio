import { NavLinks } from "@/constants/nav-links";
import Logo from "../globals/logo";
import { ModeToggle } from "../globals/dark-mode";

const Navbar = () => {
  return (
    <>
      <nav className="container flex justify-between items-center ">
        <div className="text-4xl">
          <Logo />
        </div>

        <ul className="flex justify-between items-center gap-x-4">
          {NavLinks.map((d, i) => (
            <li key={i} className="capitalize font-medium cursor-pointer hover:text-foreground">
              {/* <Icon  /> */}
              <a href={d.href}>{d.title}</a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-between items-center gap-x-4">
          <li className="capitalize font-medium cursor-pointer hover:text-foreground">عربي</li>
          <li className="capitalize font-medium cursor-pointer hover:text-foreground">
            <ModeToggle />
          </li>
          <li className="capitalize font-medium cursor-pointer hover:text-foreground">
            <a href="/login">login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
