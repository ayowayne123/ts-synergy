import React from 'react'
import Link from "next/link";
import logo from "@/public/logoWhite.svg"
import Image from "next/image";

function Footer() {
  return (
    <footer className='bg-synergyBlue pb-10'>
        <div className='container text-white font-light text-lg '>
            <div className='flex lg:flex-row py-16 flex-col  justify-between'>
            <div className='flex flex-col gap-2'>
            <Link
            href="/"
            className="relative py-4"
          >
            <div className="w-48  relative h-12">
              <Image
                src={logo}
                alt="logo"
                style={{ objectFit: "contain" }}
                fill
                className='object-left'
                sizes="max-width: 767px) 100vw, "
              />
            </div>

          </Link>
          <span>Address: No 4 Ayinde Street, Ogudu road, Ojota Lagos </span>
          <span>
            Phone:
            <a href="tel:+2348136631392">+234 (0) 813 663 1392</a>
          </span>
          <span>
            Email:
            <a href="mailto:info@tssynergyconsult.com">
              info@tssynergyconsult.com
            </a>
          </span>
          <ul className="flex flex-row gap-4 mt-2 ">
        <Link href='/' className=''>LinkedIn</Link>
        <Link href='/' className=''>Twitter</Link>
        <Link href='/' className=''>Instagram</Link>
      </ul>
            </div>

            <nav className='lg:w-[300px] grid grid-cols-2 gap-y-2 flex-none  self-start mt-20 '>

            <Link
              href="/"
              className={`cursor-pointer `}
    
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`cursor-pointer `}
    
            >
              Our Services
            </Link>
            <Link href='/careers'  className= {`cursor-pointer `}>Careers</Link>
            <Link
              href="/engage"
              className={`cursor-pointer `}
    
            >
              Engage us
            </Link>
           

       
            </nav>
            </div>
           
            <div className="border-b-[0.5px] border-white w-full"></div>
            <div className='flex lg:flex-row flex-col gap-4 justify-between text-base  py-8'>
            <div>&copy; 2024 TS Synergy Consultancy Service Limited. All Rights Reserved.</div>
            <div className='divide-x divide-white  '>
            <Link href="/privacy-policy" className={`cursor-pointer pr-2 `}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={`cursor-pointer px-2 `}>
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className={`cursor-pointer px-2 `}>
              Cookie Policy
            </Link>
            <Link href="/sitemap" className={`cursor-pointer px-2 `}>
              Sitemap
            </Link>
            </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer