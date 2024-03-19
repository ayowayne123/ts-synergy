"use client"
import mask from "@/public/mask.svg"
import tax from "@/public/tax.svg"
import account from "@/public/account.svg"
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const cardData = [
    {
      title: "Tax Consultation",
      image: tax,
      description: "Navigate the intricate landscape of tax laws and regulations with confidence. Our expert team provides strategic guidance tailored to your specific needs, helping you optimize deductions, minimize liabilities, and ensure compliance. With our proactive approach and in-depth knowledge, we empower you to make informed decisions that maximize tax savings and minimize risks.",
    },
    {
      title: "Accounting Services",
      image: account,
      description: "Streamline your financial processes and gain peace of mind with our comprehensive accounting services. From bookkeeping to financial statement preparation, our meticulous approach ensures accuracy and reliability in every transaction. Let us handle the numbers while you focus on growing your business, knowing that your financial records are in expert hands.",
    },
    // Add additional cards here
    {
      title: "Financial Planning",
      image: account,
      description: "Plan for your financial future with confidence. Our financial planning services help you set achievable goals, manage risk, and build wealth over time. Whether you're saving for retirement, education, or other life events, our expert advisors provide personalized guidance to help you reach your financial milestones.",
    },
    {
      title: "Business Advisory",
      image: account,
      description: "Get strategic advice to help your business thrive. Our business advisory services cover a wide range of areas, including growth strategy, operational efficiency, market analysis, and more. With our industry expertise and actionable insights, we'll help you overcome challenges and seize opportunities for success.",
    },
  ];

const Card = ({card}) => {
    return(
        <div className="text-black z-20 bg-white rounded-xl lg:px-10 lg:py-10 p-10 flex flex-col gap-3 xl:min-w-[580px] overflow-hidden xl:h-[440px]">
                 <Image src={card.image} className="object-contain mb-4" width={58} height={58} alt="bg" />
                            <h3 className="font-semibold text-lg lg:text-3xl">{card.title}</h3>
                            <p className="lg:text-xl text-sm leading-8">{card.description}</p>
                </div>
    )}


const Info = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
    
    return(
<div className="bg-synergyBlue  text-white font-light relative  ">
    <div className="container z-30 lg:py-16 py-8 lg:px-8 ">
    <h2 className="font-semibold lg:w-[450px] mx-auto flex text-[26px] md:text-3xl lg:text-4xl text-center px-3 flex-col">
    <span>Tailored Solutions</span>
    <span>for Your Financial Needs</span>
         </h2>
         <p className="px-12 text-center lg:text-xl text-base mt-6 lg:leading-[30px]">At TS Synergy Consultancy Service Limited, we provide a range of 
            tailored services to empower your financial success. From tax consultation to accounting,
             financial planning, and business advisory, our experts blend expertise with innovation to guide you 
             toward your goals with clarity and precision. Experience the synergy of our services and unlock
              your full
             financial potential with TS Synergy Consultancy Service Limited.</p>
             <section className="h-[600px] relative " ref={targetRef}>
                <div className="sticky  top-0 flex h-[600px] items-center overflow-hidden z-20 ">
                <motion.div style={{x}} className="flex flex-row gap-8 lg:my-16 my-8 px-3 z-20  items-center">
             {cardData.map((card, index) => (
                <Card card={card} key={index}/>
                ))}

             </motion.div>
                </div>
                
             </section>
             
    </div>
    <div className="absolute -bottom-20 left-0 right-0 z-0">
        <Image src={mask} 
    className="object-contain w-full object-bottom z-0" alt="bg"/>
</div>
    
   
</div>
    )
}

export default Info;