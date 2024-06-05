import { NavLink, socialLink, infoData } from "../types/interface";
import { 
  Home, User, Wrench, Book, MessageSquareText,
  Youtube, Facebook, Twitter, Linkedin,
  Find, Call, Mail,
 } from "lucide-react"

export const NavLinks:NavLink[] = [
  {title: "home", href: "#home",icon:Home},
  {title: "linkedin", href: "#about",icon:User},
  {title: "skills", href: "#skills",icon:Wrench},
  {title: "projects", href: "#projects",icon:Book},
  {title: "contact", href: "#contact",icon:MessageSquareText},
]

export const socialLinks:socialLink[] = [
  {title: "youtube", href: "",icon:Youtube},
  {title: "facebook", href: "",icon:Facebook},
  {title: "twitter", href: "",icon:Twitter},
  {title: "linkedin", href: "",icon:Linkedin},
]

export const infoData:infoData[] = [
  // [ ] TODO: Edite this data!...
  {title: "Find Us", value:"1010 Avenue, sw 54321, chandigarh", href: "",icon:Find},
  {title: "Call Us", value:"", href: "9876543210 0",icon:Call},
  {title: "Mail Us", value:"", href: "mail@info.com",icon:Mail},
]