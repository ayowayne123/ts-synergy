import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "@/public/heroImage.svg"
import moneyBackground from "@/public/moneyBackground.svg"
import Image from "next/image";


function Hero() {
  return ( 
    <div className="  flex flex-col jusify-between font-light">
    <div className="container font-light flex flex-col flex-grow justify-end pb-4 gap-3 h-[calc(100dvh_-_200px)] min-h-[450px]">
        <h1 className="text-synergyBlue font-bold w-[900px] 
         text-[64px] flex mx-auto text-center px-2 ">Empowering Financial Success Together</h1>
         <span className="w-[600px] flex mx-auto text-center text-2xl leading-9 mt-2">
         We empower your financial success. With expertise, integrity, and innovation, we provide tailored consultancy services. Let&apos;s unlock your potential together.
         </span>
         <Link href='/' className="bg-synergyBlue mx-auto flex rounded-full items-center justify-between  hover:opacity-70
          text-white w-[270px] h-[69px] text-lg font-semibold px-6 ">
            <span>Get Started</span><FaArrowRight size={16}/></Link>

</div>
<Image src={moneyBackground} className="object-contain  w-full translate-y-16 " alt="money"/>

{/* Second part of hero */}
<div className="bg-synergyLightBlue py-16 w-full">
    <div className="container  grid grid-cols-7 divide-x-[0.5px] divide-[#CDCDCD]">
        <div className="col-span-3 flex flex-col justify-between">
           <div>
            <h2 className="text-synergyBlue font-semibold text-3xl">Our Essence</h2>
            <p className="w-[400px] flex text-xl mt-3">Explore our tailored solutions driven by integrity and excellence, 
                empowering individuals and businesses to navigate finance with confidence.</p>
            </div> 
            <Image src={heroImage} className="object-contain w-full h-[460px] mr-10  object-left " alt="man sitting behind laptop"/>
        </div>

        <div className="flex flex-col pl-16 pr-6 text-xl col-span-4 gap-6">
        <div className="flex flex-col ">
<h3 className="text-2xl font-semibold mb-4">Who We Are </h3>
<p>
TS Synergy Consultancy Service Limited is a leading provider of financial consultancy services, dedicated to helping individuals and businesses achieve their financial goals. 
With a team of seasoned professionals and a commitment to excellence, integrity, and innovation, we&apos;re here to be your trusted partner on your financial journey.</p>

</div>

<div className="flex flex-col ">
<h3 className="text-2xl font-semibold mb-4">Our Mission  </h3>
<p>
At TS Synergy Consultancy Service Limited, 
our mission is simple: to deliver unparalleled value to our clients by providing comprehensive financial consultancy services 
tailored to their unique needs and objectives. We prioritize client satisfaction above all else,
 striving to exceed expectations at every opportunity.</p>

</div>

<div className="flex flex-col ">
<h3 className="text-2xl font-semibold mb-4">Our Vision </h3>
<p>
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