import { ModeToggle2 } from "./globals/dark-mode";
import { StartS1, StartS2 } from "./footer/start";

const Footer = () => {
  return <>
    <footer className="border-t">
      {/* start */}
      <article className="container flex max-md:flex-col justify-evenly items-start gap-6 py-4">
        <StartS1 />
        <StartS2 />
        <StartS1 />
      </article>


      {/* End */}
      <article className="container bg-red-500 flex max-md:flex-col justify-evenly items-center py-4">
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
      </article>

    </footer>
  </>;
};
export default Footer;