import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "@/public/heroImage.svg"
import smiling from "@/public/smiling.png"
import Image from "next/image";



function Hero() {
  return ( 
    <div className="  flex flex-col jusify-between font-light overflow-hidden">
        <div className="relative">
        <div className="container font-light grid grid-cols-2 relative   pt-10 md:pt-20 xl:pt-24 lg:h-[calc(100vh_-_100px)] h-[calc(100dvh_-_60px)] md:h-[calc(100vh_-_70px)] min-h-[380px] max-h-[1000px] ">
        <div>
        <h1 className="text-synergyBlue font-bold lg:max-w-[900px] max-w-[340px] md:max-w-[500px]
         lg:text-[64px] text-3xl md:text-5xl flex mx-auto text-left mb-4 ">Empowering Financial Success Together</h1>
         <span className="py-2 lg:max-w-[630px] max-w-[300px] md:max-w-[470px] flex mx-auto text-left lg:text-2xl md:text-lg text-sm leading-9 my-2">
         We empower your financial success. With expertise, integrity, and innovation, we provide tailored consultancy services. Let&apos;s unlock your potential together.
         </span>
         <div className="flex flex-row pt-4 gap-4">
         <Link href='/services' className="bg-synergyBlue  flex rounded-full items-center justify-between  hover:opacity-70
          text-white lg:w-[270px] md:w-52 w-40 md:h-[60px] h-12 lg:h-[69px] lg:text-lg text-xs md:text-base font-semibold lg:px-6 px-3 ">
            <span>Get Started</span><FaArrowRight size={16}/></Link>
            <Link href='/engage' className="bg-white border border-black  flex rounded-full items-center justify-between  hover:opacity-70
          text-black  lg:w-[270px] md:w-52 w-40 md:h-[60px] h-12 lg:h-[69px] lg:text-lg text-xs md:text-base font-semibold lg:px-6 px-3 ">
            <span>Engage Us</span><FaArrowRight size={16}/></Link>
         </div>

            </div>
           
           
        

         </div>
        <div className="absolute w-[700px] h-screen top-0 right-0 -z-10">
            <div className="relative h-full w-full">
            <Image src={smiling} className="object-contain h-full  w-full "  alt="people smiling" fill/>
            </div>
            
            </div>
        </div>


<div className="  w-0 h-0 z-20  top-0
  border-b-[200px] 
   border-b-synergyLightBlue border-transparent
  border-l-[100vw] "></div>
{/* Second part of hero */}

<div className="bg-synergyLightBlue lg:py-16 py-9 w-full ">

    <div className="container pt-6 grid lg:grid-cols-7 lg:divide-x-[0.5px] g:divide-[#CDCDCD]">
        <div className="lg:col-span-3 flex flex-col justify-between">
           <div>
            <h2 className="text-synergyBlue font-semibold text-2xl lg:text-3xl">Our Essence</h2>
            <p className="lg:max-w-[400px] flex lg:text-xl mt-3 px-3 lg:px-0">Explore our tailored solutions driven by integrity and excellence, 
                empowering individuals and businesses to navigate finance with confidence.</p>
            </div> 
            <Image src={heroImage} className="object-contain w-full md:h-[460px] h-96 lg:mr-10 lg:py-0 py-5  object-left " alt="man sitting behind laptop"/>
        </div>

        <div className="flex flex-col lg:pl-16 lg:pr-6 px-3 lg:px-0 text-xl lg:col-span-4 gap-6">
        <div className="flex flex-col ">
<h3 className="text-xl lg:text-2xl font-semibold mb-4">Who We Are </h3>
<p className="text-sm md:text-base">
TS Synergy Consultancy Service Limited is a leading provider of financial consultancy services, dedicated to helping individuals and businesses achieve their financial goals. 
With a team of seasoned professionals and a commitment to excellence, integrity, and innovation, we&apos;re here to be your trusted partner on your financial journey.</p>

</div>

<div className="flex flex-col ">
<h3 className="text-xl lg:text-2xl font-semibold mb-4">Our Mission  </h3>
<p className="text-sm md:text-base">
At TS Synergy Consultancy Service Limited, 
our mission is simple: to deliver unparalleled value to our clients by providing comprehensive financial consultancy services 
tailored to their unique needs and objectives. We prioritize client satisfaction above all else,
 striving to exceed expectations at every opportunity.</p>

</div>

<div className="flex flex-col ">
<h3 className="text-xl lg:text-2xl font-semibold mb-4">Our Vision </h3>
<p className="text-sm md:text-base">
Excellence, Integrity, Innovation, Collaboration,
 Client-Centricity – these are the core values that drive everything we do at TS Synergy Consultancy Service Limited. 
 We believe in setting the standard for excellence in the financial consultancy industry and conducting ourselves with honesty, transparency, 
 and integrity in all our interactions.</p>

</div>
        </div>

    </div>

</div>
</div>


   );
}

export default Hero;
