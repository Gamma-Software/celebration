import {ConfigDropdown} from "@/components/config-dropdown";
import { Newsletter } from "./newsletter";


export default function Footer() {
  return (
    <footer className="">
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center bg-transparent border-t-0 backdrop-blur-none sm:bg-background/80 sm:backdrop-blur-sm sm:border-t">
        <div className="mx-2 p-2" >
          <Newsletter source="footer-celebrations" className="hidden sm:flex"/>
        </div>
        <div className="mx-2 p-2">
          <ConfigDropdown/>
        </div>
      </div>
    </footer>
  )
}
