"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logoColor.svg"
import Image from "next/image";


function Header() {
    const pathname = usePathname();
 
  
    return (
      <header className="bg-white w-full h-20 lg:h-24 text-black container ">
        <div className="h-full flex flex-row items-center justify-between  ">
          <Link
            href="/"
            className="h-full relative flex flex-row items-center gap-3"
          >
            <div className="w-48  relative h-12">
              <Image
                src={logo}
                alt="logo"
                style={{ objectFit: "contain" }}
                fill
                sizes="max-width: 767px) 100vw, "
              />
            </div>

          </Link>
          <nav className="flex flex-row gap-[50px] font-light ">
            <Link
              href="/"
              className={`cursor-pointer ${pathname == "/" ? "text-synergyBlue font-normal" : ""}`}
    
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`cursor-pointer ${
                pathname.includes("/services") ? "text-synergyBlue font-normal" : ""
              }`}
    
            >
              Our Services
            </Link>
            <Link href='/careers'  className= {`cursor-pointer ${pathname.includes('/careers') ? "text-synergyBlue font-normal " : ""}`}>Careers</Link>
            <Link
              href="/about"
              className={`cursor-pointer ${
                pathname.includes("/about") ? "text-synergyBlue font-normal" : ""
              }`}
    
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={`cursor-pointer ${
                pathname.includes("/contact") ? "text-synergyBlue font-normal" : ""
              }`}
    
            >
              Contact us
            </Link>

          </nav>

        </div>
        <div className="border-b-[0.5px] border-synergyBlack w-full"></div>
      </header>
    );
  }
  
  export default Header;