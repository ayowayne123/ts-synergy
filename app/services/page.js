import React from 'react'
import TitleHeader from '@/components/titleHeader';
import Image from 'next/image';
import Link from 'next/link';
import tax from "@/public/taxServices.png"
import account from "@/public/accountServices.png"
import business from "@/public/businessServices.png"
import finance from "@/public/financeServices.png"

export const metadata = {
    title: "Services | TS Synergy Consultancy Service Limited", 
  };

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
    
    {
      title: "Financial Planning",
      image: finance,
      description: "Take control of your financial future with personalized plans crafted by our certified professionals. Whether you're planning for retirement, saving for education, or investing for the future, we're here to help you achieve your goals. Our holistic approach considers your unique circumstances and aspirations, guiding you towards financial security and peace of mind.",
    },
    {
      title: "Business Advisory",
      image: business,
      description: "Navigate the challenges of business ownership with strategic guidance from our experienced advisors. From business formation to strategic planning, we provide insights and support to help you make informed decisions and drive growth. Whether you're launching a startup or expanding your enterprise, we're here to be your trusted partner every step of the way.",
    },
  ];

  
  const Card = ({ card }) => {
    return (
      <div>
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-4 capitalize text-synergyBlack ">{card.title}</h1>
            <div className="border-b-[0.5px] border-synergyBlack w-full md:flex hidden "></div>
      <div className="text-synergyBlack z-20  grid md:grid-flow-col lg:gap-8 md:gap-4 w-full font-light mt-7">
       
          <div className="lg:w-[460px] md:w-[350px] h-[350px]  z-10  ">
            <div className='overflow-hidden rounded-xl relative h-full w-full'>
  <Image src={card.image} className="object-cover h-full w-full" alt={`${card.title}`} fill placeholder="blur" loading="lazy" />
            </div>
          
          </div>
       
  
  
        <div className="  flex flex-col  justify-between  h-full grow-0 lg:py-7 py-3">
          <p className="lg:text-xl md:text-lg  lg:pr-12">{card.description}</p>
<Link href='/engage' className="font-medium border-b border-black px-2 py-1 w-max ">Engage Us</Link>
          </div>

        </div>
      
      </div>
    );
  };

function ServicesPage() {
  return (
    <div className='bg-synergyLightBlue'>
        <TitleHeader parentClass="h-[520px] bg-synergyBlue text-white ">
            <div className='flex flex-col h-full items-center justify-center gap-5'>
                <h1 className='lg:text-5xl md:text-3xl text-3xl font-bold lg:w-[600px] md:w-[450px] w-[250px] text-center'>Tailored Solutions
for Your Financial Needs</h1>
<p className='font-light lg:text-2xl md:text-xl text-lg md:w-[690px] lg:w-[880px] max-w-[400px] px-4 text-center'>We provide tailored financial services including tax consultation, accounting, financial planning, and business advisory. Experience our expertise and innovation to unlock your financial potential.</p>

            </div>
        </TitleHeader>
        <div className='container py-16 lg:px-10 md:px-6 px-4'> 
        <div  className="flex flex-col gap-8 ">
             {cardData.map((card, index) => (
                <Card card={card} key={index}/>
                ))}

          
               
                
             </div>
        </div>

    </div>
  )
}

export default ServicesPage