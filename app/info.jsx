import mask from "@/public/mask.svg"
import tax from "@/public/tax.svg"
import account from "@/public/account.svg"
import Image from "next/image";


const Info = () => {
    return(
<div className="bg-synergyBlue  text-white font-light relative overflow-hidden">
    <div className="container z-30 py-16">
    <h2 className="font-semibold w-[450px] mx-auto flex text-4xl text-center px-3 flex-col">
    <span>Tailored Solutions</span>
    <span>for Your Financial Needs</span>
         </h2>
         <p className="px-12 text-center text-xl mt-6 leading-[30px]">At TS Synergy Consultancy Service Limited, we provide a range of 
            tailored services to empower your financial success. From tax consultation to accounting,
             financial planning, and business advisory, our experts blend expertise with innovation to guide you 
             toward your goals with clarity and precision. Experience the synergy of our services and unlock
              your full
             financial potential with TS Synergy Consultancy Service Limited.</p>
             <div className="grid grid-cols-2 gap-8 my-16 px-3">
                <div className="text-black z-10 bg-white rounded-xl px-10 py-10 flex flex-col gap-3">
                <Image src={tax} 
    className="object-contain mb-4 " width={58} height={58} alt="bg"/>
    <h3 className="font-semibold text-3xl">Tax Consultation</h3>
    <p className="text-xl leading-8">Navigate the intricate landscape of tax laws and regulations with confidence. Our expert team provides strategic guidance tailored to your specific needs, helping you optimize deductions, minimize liabilities, and ensure compliance. With our proactive approach and in-depth knowledge, 
        we empower you to make informed decisions that maximize tax savings and minimize risks.</p>
                </div>
                <div className="text-black z-10 bg-white rounded-xl px-10 py-10 flex flex-col gap-3">
                <Image src={account} 
    className="object-contain mb-4 " width={58} height={58} alt="bg"/>
    <h3 className="font-semibold text-3xl">Accounting Services</h3>
    <p className="text-xl leading-8">Streamline your financial processes and gain peace of 
    mind with our comprehensive accounting services. From bookkeeping to financial statement preparation, 
    our meticulous approach ensures accuracy and reliability in every transaction. 
    Let us handle the numbers while you focus on growing your business, 
    knowing that your financial records are in expert hands.</p>
                </div>

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