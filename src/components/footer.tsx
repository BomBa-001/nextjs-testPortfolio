import { socialLinks } from "@/constants/nav-links";
import { ModeToggle2 } from "./globals/dark-mode";
import Logo from "./globals/logo";
import { Icon } from "lucide-react";

const Footer = () => {
  return <>
    <footer className="border-t">
      {/* start */}
      <section className="container flex max-md:flex-col justify-evenly items-center py-4">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quo necessitatibus officiis illum nesciunt hic officia voluptatibus, excepturi dolore numquam ratione iste voluptates? Hic dolores in, quisquam eveniet doloremque facere!</p>
          <h6>Follow us</h6>
          <ul className="flex justify-start items-center gap-4">
            {socialLinks.map((d, i) => { const { href, icon: Icon } = d; return <li key={i}><a href={href}><Icon /></a></li>})}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Logo />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quo necessitatibus officiis illum nesciunt hic officia voluptatibus, excepturi dolore numquam ratione iste voluptates? Hic dolores in, quisquam eveniet doloremque facere!</p>
          <h6>Follow us</h6>
          <ul className="flex justify-evenly items-center gap-10">
            <li><a href="">f</a></li>
            <li><a href="">t</a></li>
            <li><a href="">g</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Logo />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quo necessitatibus officiis illum nesciunt hic officia voluptatibus, excepturi dolore numquam ratione iste voluptates? Hic dolores in, quisquam eveniet doloremque facere!</p>
          <h6>Follow us</h6>
          <ul className="flex justify-evenly items-center gap-10">
            <li><a href="">f</a></li>
            <li><a href="">t</a></li>
            <li><a href="">g</a></li>
          </ul>
        </div>
      </section>


      {/* End */}
      <section className="container bg-red-500 flex max-md:flex-col justify-evenly items-center py-4">
        <p className=" text-nowrap">
          Copyright © 2024, All Right Reserved{" "}
          <a href="http://" rel="noopener noreferrer"></a>
          <a className="m-1 text-primary font-bold transition-all border-primary hover:border-b-2" href="https://bomba-001.github.io/BomBa/" target="_blank" rel="license">BomBa</a>

          {/* className="p-1 text-destructive font-bold transition-all hover:text-primary hover:bg-destructive hover:rounded-md hover:drop-shadow-md" */}
          {/* <a href="https://bomba-001.github.io/CV-Hussein/"  target="_blank" rel="author">hussein Abdo</a> */}
        </p>

        <nav className="flex justify-evenly items-center gap-10">
          <i>*</i>
          <i><ModeToggle2 /></i>
        </nav>
      </section>

    </footer>
  </>;
};
export default Footer;