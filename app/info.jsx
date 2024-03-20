"use client"
import mask from "@/public/mask.svg"
import tax from "@/public/tax.png"
import account from "@/public/account.png"
import business from "@/public/business.png"
import finance from "@/public/finance.png"
import Image from "next/image";
import Link from "next/link"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const cardData = [
    {
      title: "Tax Consultation",
      image: tax,
      description: "Navigate tax laws confidently with our tailored guidance. Ensure compliance, optimize deductions, and minimize liabilities for maximum savings and minimized risks",
    },
    {
      title: "Accounting Services",
      image: account,
      description: "Trust our accounting services for accuracy and reliability. Let us handle your financial records while you focus on business growth.",
    },
    
    {
      title: "Financial Planning",
      image: finance,
      description: "Craft personalized financial plans with our certified professionals. Whether for retirement, education, or investments, we guide you toward security and peace of mind.",
    },
    {
      title: "Business Advisory",
      image: business,
      description: "Navigate business challenges with our experienced advisors. From formation to strategic planning, we offer insights to drive growth and informed decisions for startups and enterprises alike.",
    },
  ];

  const Card = ({ card }) => {
    return (
      <div className="text-black z-20 bg-white rounded-[20px] overflow-hidden w-[328px] pt-[128px] relative h-[454px] flex flex-col transform  ease-in-out transition-transform delay-75 duration-500 lg:hover:-translate-y-10">
        <div className="absolute inset-0">
          <div className="w-[328px] h-[168px] relative z-10">
            <Image src={card.image} className="object-cover h-full w-full" alt={`${card.title}`} fill placeholder="blur" loading="lazy" />
          </div>
        </div>
  
        <div className="w-0 h-0 z-20 top-0 border-b-[40px] border-b-white border-transparent border-l-[328px]"></div>
  
        <div className="px-7 py-11 flex flex-col justify-between  h-full">
          <div>
          <h3 className="font-semibold text-lg lg:text-[22px] mb-3">{card.title}</h3>
          <p className="text-sm">{card.description}</p>
          </div>

<Link href='/engage' className="font-medium border-b border-black px-2 py-1 w-max ">Engage Us</Link>
        </div>
      </div>
    );
  };
  


const Info = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
    
    return(
<div className="bg-synergyBlue  text-white font-light relative  ">
    <div className="container z-20 lg:py-16 py-8 lg:px-8 ">
    <h2 className="font-semibold lg:w-[450px] mx-auto flex text-[26px] md:text-3xl lg:text-4xl text-center px-3 flex-col">
    <span>Tailored Solutions</span>
    <span>for Your Financial Needs</span>
         </h2>
         <p className="mx-auto text-center lg:text-xl text-base mt-6 lg:leading-[30px] lg:w-[698px]  flex flex-col items-center">We provide tailored financial services including tax consultation, accounting, financial planning, and business advisory.
          Experience our expertise and innovation to unlock your financial potential.</p>
             
            
                <div  className="grid gap-6 lg:grid-flow-col  lg:py-16 py-8  z-20  overflow-x-scroll no-scrollbar">
             {cardData.map((card, index) => (
                <Card card={card} key={index}/>
                ))}

          
               
                
             </div>
             
    </div>
    <div className="absolute -bottom-20 left-0 right-0 z-0">
        <Image src={mask} 
    className="object-contain w-full object-bottom z-0" alt="bg"/>
</div>
    
   
</div>
    )
}

export default Info;