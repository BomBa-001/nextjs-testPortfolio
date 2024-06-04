import { NavLink, socialLink } from "../types/interface";
import { Book, Facebook, Home, Linkedin, MessageSquareText, Twitter, User, Wrench } from "lucide-react"

export const NavLinks:NavLink[] = [
  {title: "home", href: "#home",icon:Home},
  {title: "linkedin", href: "#about",icon:User},
  {title: "skills", href: "#skills",icon:Wrench},
  {title: "projects", href: "#projects",icon:Book},
  {title: "contact", href: "#contact",icon:MessageSquareText},
]


export const socialLinks:socialLink[] = [
  {title: "facebook", href: "",icon:Facebook},
  {title: "twitter", href: "",icon:Twitter},
  {title: "linkedin", href: "",icon:Linkedin},
]