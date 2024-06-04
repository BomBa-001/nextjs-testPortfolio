const Footer = () => {
  return <>
  <footer className="border-t">
  
  <section className="container flex md:flex-row justify-evenly py-4">
      <p className=" text-nowrap">
        Copyright © 2024, All Right Reserved{" "}
        <a href="http://" rel="noopener noreferrer"></a>
        <a className="m-1 text-primary font-bold transition-all border-primary hover:border-b-2" href="https://bomba-001.github.io/BomBa/"  target="_blank" rel="license">BomBa</a>

        {/* className="p-1 text-destructive font-bold transition-all hover:text-primary hover:bg-destructive hover:rounded-md hover:drop-shadow-md" */}
        {/* <a href="https://bomba-001.github.io/CV-Hussein/"  target="_blank" rel="author">hussein Abdo</a> */}
      </p>

      <nav>
        <i>*</i>
        <i>*</i>
      </nav>
</section>

  </footer>
  </>;
};
export default Footer;