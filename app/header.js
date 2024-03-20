"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/public/logoColor.svg"
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";


function Header() {
  const [openMenu, setOpenMenu] = useState(false)
    const pathname = usePathname();

    const handleMenuClick =()=>{
      setOpenMenu(true)
    }

    const handleMenuClose =()=>{
      setOpenMenu(false)
    }


 
  
    return (
      <header className="bg-white w-full h-20 lg:h-24 text-black  relative">
        <div className="h-full flex flex-row items-center justify-between lg:px-8 px-5 container">
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
                className="object-left"
              />
            </div>

          </Link>
          <nav className="lg:flex flex-row lg:gap-[44px] font-light hidden ">
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
            <Link
              href="/engage"
              className={`cursor-pointer ${
                pathname.includes("/engage") ? "text-synergyBlue font-normal" : ""
              }`}
    
            >
              Engage us
            </Link>
                     <Link href='/aboutUs'  className= {`cursor-pointer ${pathname.includes('/aboutUs') ? "text-synergyBlue font-normal " : ""}`}>About Us</Link>

          

          </nav>
          <div className="lg:hidden" onClick={handleMenuClick}>
          <AiOutlineMenu size={24}/>
          </div>

        </div>
        <div className="border-b-[0.5px] border-synergyBlack w-full lg:flex hidden container"></div>
        <div className={`absolute w-full transition-transform duration-500 ease-in-out bg-[#d0e0f0] h-96 inset-0 lg:hidden z-30 flex ${!openMenu ? "-translate-y-96" : ""}`}>
          
<div className="w-full h-full flex mx-auto items-center justify-center relative">
<div className="absolute top-[40px] right-12">
            <LiaTimesSolid size={24} onClick={handleMenuClose}/>
            </div>
<nav className="flex flex-col  font-semibold divide-y divide-black  justify-center gap-5 w-60">
            <Link onClick={handleMenuClose}
              href="/"
              className={`cursor-pointer text-center pt-5  ${pathname == "/" ? "text-synergyBlue font-bold" : ""}`}
    
            >
              Home
            </Link>
            <Link onClick={handleMenuClose}
              href="/services"
              className={`cursor-pointer text-center pt-5  ${
                pathname.includes("/services") ? "text-synergyBlue font-bold" : ""
              }`}
    
            >
              Our Services
            </Link>
            <Link onClick={handleMenuClose}
              href="/engage"
              className={`cursor-pointer text-center pt-5  ${
                pathname.includes("/engage") ? "text-synergyBlue font-bold" : ""
              }`}
    
            >
              Engage us
            </Link>
             <Link onClick={handleMenuClose} href='/aboutUs'  className= {`cursor-pointer text-center pt-5  ${pathname.includes('/aboutUs') ? "text-synergyBlue font-bold " : ""}`}>About Us</Link>
           
          

          </nav>
</div>
        </div>
      </header>
    );
  }
  
  export default Header;