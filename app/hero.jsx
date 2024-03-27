import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "@/public/heroImage.svg"
import smiling from "@/public/smiling.png"
import Image from "next/image";



function Hero() {
  return ( 
    <div className="  flex flex-col jusify-between font-light overflow-hidden ">
        <div className="relative lg:max-h-[1000px] md:max-h-[800px]">
        <div className="container  font-light grid md:grid-cols-2 relative items-center    pt-10 md:pt-16 lg:pt-20 xl:pt-24 lg:h-[calc(100vh_-_100px)] md:h-[calc(100vh_-_200px)] min-h-[380px] max-h-[840px] ">
        <div className="w-full flex items-center md:items-start flex-col"> 
        <h1 className="text-synergyBlue font-bold lg:max-w-[900px] max-w-[261px] md:max-w-[600px] md:px-0 px-2
         lg:text-6xl text-3xl md:text-4xl flex mx-auto text-center md:text-left lg:mb-6 mb-2 lg:mt-0 mt-8 md:mt-4 ">Empowering Financial Success Together</h1>
         <span className="py-2 lg:py-3 lg:max-w-[630px] max-w-[281px] md:max-w-[470px] flex mx-auto text-center md:text-left lg:text-2xl md:text-lg text-sm lg:leading-9 lg:my-2 my-1">
         We empower your financial success. With expertise, integrity, and innovation, we provide tailored consultancy services. Let&apos;s unlock your potential together.
         </span>
         <div className="flex lg:flex-row flex-col pt-6 lg:gap-4 gap-6 z-30">
         <Link href='/services' className="bg-synergyBlue  flex rounded-full items-center justify-between  hover:opacity-70
          text-white lg:w-[230px] md:w-40 w-[135px] md:h-[60px] h-12 lg:h-[69px] lg:text-lg text-xs md:text-base font-semibold px-4 lg:px-6  ">
            <span>Learn More</span><FaArrowRight size={16}/></Link>
            <Link href='/engage' className="bg-white border border-black  flex rounded-full items-center justify-between  hover:opacity-70
          text-black  lg:w-[230px] md:w-40 w-[135px] md:h-[60px] h-12 lg:h-[69px] lg:text-lg text-xs md:text-base font-semibold px-4 lg:px-6  ">
            <span>Engage Us</span><FaArrowRight size={16}/></Link>
         </div>

            </div>
           
           
        

         </div>
        <div className="md:absolute lg:w-[700px] md:w-[450px] w-full h-screen hidden md:flex overflow-hidden top-0 right-0 -z-10">
            <div className="relative h-full w-full ">
            <Image src={smiling} className="object-contain h-full  w-full md:object-right lg:object-center "  alt="people smiling" fill priority 
            sizes="(max-width: 768px) 100vw, (max-width: 50vw" />
            </div>
            
            </div>
            <div className="h-[320px] relative md:hidden -translate-y-12 ">
            <div className=" absolute translate-y-8 w-full  md:hidden block h-[400px] overflow-hidden top-0 right-0 -z-10">
            <div className="relative h-[481px] w-full ">
            <Image src={smiling} className="object-contain h-full  w-full "  alt="people smiling" fill priority 
            sizes="(max-width: 768px) 100vw, (max-width: 50vw" />
            </div>
            
            </div>
            </div>
          
        </div>


<div className="  w-0 h-0 z-20  top-0
   lg:border-b-[200px] border-b-[70px]
   md:border-b-[120px]  
   border-b-synergyLightBlue border-transparent
  border-l-[100vw] "></div>
{/* Second part of hero */}

<div className="bg-synergyLightBlue lg:py-16 py-9 w-full ">

    <div className="container pt-6  ">
        <div className=" flex flex-col items-center ">
           <div>
            <h2 className="text-synergyBlue font-semibold text-[26px] lg:text-4xl text-left  lg:text-center">Our Essence</h2>
            <p className="lg:max-w-[745px] lg:text-center text-left flex lg:text-xl  lg:px-0 pb-6 lg:pb-0">Explore our tailored solutions driven by integrity and excellence, 
                empowering individuals and businesses to navigate finance with confidence.</p>
            </div> 
            
        </div>

        <div className="flex flex-col lg:grid grid-cols-2 lg:pt-12 lg:pr-6 lg:px-0 text-xl  gap-6 lg:gap-12">

        <div className="flex flex-col ">
<h3 className="text-xl lg:text-2xl font-semibold lg:mb-7 mb-4">Our Vision </h3>
<div className="border-b-[0.5px] border-synergyBlack w-full "></div>
<p className="text-sm lg:mt-7 lg:pr-3 md:text-base lg:text-lg mt-5">
Excellence, Integrity, Innovation, Collaboration,
 Client-Centricity – these are the core values that drive everything we do at TS Synergy Consultancy Service Limited. 
 We believe in setting the standard for excellence in the financial consultancy industry and conducting ourselves with honesty, transparency, 
 and integrity in all our interactions.</p>

</div>
<div className="flex flex-col ">
<h3 className="text-xl lg:text-2xl font-semibold lg:mb-7 mb-4">Our Mission  </h3>
<div className="border-b-[0.5px] border-synergyBlack w-full "></div>
<p className="text-sm lg:mt-7 lg:pr-3 md:text-base lg:text-lg mt-5">
At TS Synergy Consultancy Service Limited, 
our mission is simple: to deliver unparalleled value to our clients by providing comprehensive financial consultancy services 
tailored to their unique needs and objectives. We prioritize client satisfaction above all else,
 striving to exceed expectations at every opportunity.</p>

</div>


        </div>

    </div>

</div>

<div className="  w-0 h-0 z-20  top-0
  lg:border-b-[200px] border-b-[70px]
md:border-b-[120px]   border-b-synergyBlue border-l-synergyLightBlue
  border-l-[100vw] "></div>
</div>


   );
}

export default Hero;
