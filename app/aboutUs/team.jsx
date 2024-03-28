import React from 'react'
import Image from 'next/image'
import oluwatobi from "@/public/oluwatobi.png"
import sekinat from "@/public/sekinat.png"
import raphael from "@/public/raphael.png"
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const teamData = [
    {
        name: "Oluwatobi Adeyemi",
        position: "Founder/CEO",
        image: oluwatobi,
        xLink : "https://twitter.com/elonMusk",
        linkedInLink: "",
    },
    {
        name: "Sekinat Wahab",
        position: "Co-Founder/ED",
        image: sekinat,
        xLink : "https://twitter.com/elonMusk",
        linkedInLink: "",
    },
    {
        name: "Raphael Irenen",
        position: "Legal Advisor",
        image: raphael,
        xLink : "https://twitter.com/elonMusk",
        linkedInLink: "",
    },
]

const TeamMember=({ member })=>{
    return(
        <div className='flex flex-col items-center justify-center gap-2  '>
<Image src={member.image} alt={`${member.name}`} width={268} height={268} placeholder='blur' className='object-contain' priority />
<h3 className='font-semibold md:text-2xl text-xl pt-4'>{member.name}</h3>
<p className='md:text-xl'>{member.position}</p>
<div className='flex flex-row gap-2 items-center justify-center'>
<Link href={`${member.linkedInLink}`} className='text-[#0077b5]'><FaLinkedin size={20}/></Link>
<Link href={`${member.xLink}`} className='text-synergyBlack'><FaSquareXTwitter size={20}/></Link>

</div>

        </div>
    )

}



export default function Team() {
  return (
    <div className='container py-8 font-light'>
    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-4 capitalize text-synergyBlack ">our team</h1>
            <div className="border-b-[0.5px] border-synergyBlack w-full md:flex hidden "></div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-8 pb-8 pt-12'>
{teamData.map((member,index)=>(
    <TeamMember member={member} key={index}/>
))}
</div>

    </div>
  )
}
