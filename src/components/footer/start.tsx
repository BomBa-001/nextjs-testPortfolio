import { socialLinks, infoData } from "@/constants/nav-links";
import Logo from "../globals/logo";
import Link from "next/link";

export const StartS1 = () => {
  return (
    <section className="flex-1 flex-col gap-2">
      {/* <i style={fontSize: "200%"}> */}
        <Logo />
        {/* </i> */}
      <p className="leading-6">
        <a className="m-1 text-primary font-bold transition-all border-primary hover:border-b-2" href="https://bomba-001.github.io/BomBa/" rel="license">BomBa-SofT</a>
          , innovation and excellence in programming, web design, and electronic systems are at the core of our business. We are a team of professionals dedicated to providing comprehensive technical solutions that meet our clients' needs and help them achieve their goals. We adopt the latest technologies and adhere to the highest quality standards to ensure our clients' satisfaction and deliver true value to their projects.
      </p>
    </section >
  );
};

export const StartS2 = () => {
  return (
    <section className="flex-1 flex-col gap-2">
      {/* <h6 className="text-primary font-bold transition-all">Contact Us:</h6> */}
{/* <a className="m-1 text-primary font-bold transition-all border-primary hover:border-b-2" href="https://bomba-001.github.io/BomBa/" rel="license">info@BomBa.com</a> */}
{/* infoData */}



      <ul className="flex justify-start items-center gap-4">
        {infoData.map((d, i) => { const {title, value, href, icon: Icon } = d; return 
        <li key={i} className="grid grid-cols-2 grid-rows-2 w-fit place-content-center">
          
          <i className="row-span-2"><Icon /></i>
            <h6 className="">{title}:</h6>
          <a className="">{value}</a>


          
          </li> })}
      </ul>




      <div className="grid grid-cols-2 grid-rows-2 w-fit place-content-center">
  <i className="row-span-2">*</i>
  <h6 className="">Contact Us:</h6>
  <a className="">0121511351</a>
</div>


<div className="grid grid-cols-2 grid-rows-2 gap-2 w-fit">
  <i className="col-span-1 row-start-1 row-end-3  w-fit">*</i>
  <h6 className="col-start-2 col-end-3 row-span-1">Contact Us:</h6>
  <a className="col-start-2 col-end-3 row-span-2">0121511351</a>
</div>



      <h6 className="text-primary font-bold transition-all">Follow Us:</h6>
      <ul className="flex justify-start items-center gap-4">
        {socialLinks.map((d, i) => { const { href, icon: Icon } = d; return <li key={i}><a href={href}><Icon /></a></li> })}
      </ul>
    </section >
  );
};
