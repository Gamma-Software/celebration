import {ConfigDropdown} from "@/components/config-dropdown";
import { Newsletter } from "./newsletter";


export default function Footer() {
  return (
    <footer className="">
      <div className="absolute bottom-0 m-6 p-6 z-50"><Newsletter source="footer-celebrations"/></div>
      <div className="absolute bottom-0 right-0 m-6 p-6 z-50"><ConfigDropdown/></div>
    </footer>
  )
}
