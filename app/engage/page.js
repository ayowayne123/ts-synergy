import React from 'react'
import Image from 'next/image'
import engage from '@/public/engageBackground.png'

function EngagePage() {
  return (
    <div className='md:h-dvh lg:min-h-[750px] md:min-h-[600px] w-full relative'>
        <div className='md:h-full h-44  w-full relative'>
      <Image src={engage} className='object-cover object-right-top' alt='Woman smiling with laptop' fill priority/> 
        </div>

      <div className='h-full w-full bg-[#1f1f1f] md:bg-transparent md:bg-gradient-to-r from-[#1f1f1f50] to-[#1f1f1f70] md:absolute md:inset-0 text-white'>
        <div className='container grid lg:grid-cols-2 h-full w-full items-center py-10 '>
            <div className='lg:col-start-2 flex flex-col items-center'>
                <h2 className='font-bold text-xl md:text-2xl lg:text-4xl lg:w-[540px] text-left'>Let&apos;s Connect and Elevate Your Financial Journey Together</h2>
                <form className='w-full max-w-lg'>
              <div className='flex flex-col mt-6'>
                <input type='text' id='name' name='name' placeholder='Name' className='mt-2 placeholder:text-white border border-white bg-transparent rounded-xl py-3 px-4  md:text-lg text-xs lg:text-xl font-medium text-white focus:outline-none focus:border-blue-600' />
              </div>
              <div className='flex flex-col mt-6'>
                <input type='email' id='email' name='email' placeholder='Email' className='mt-2 placeholder:text-white border border-white bg-transparent rounded-xl py-3 px-4  md:text-lg text-xs lg:text-xl font-medium text-white focus:outline-none focus:border-blue-600' />
              </div>
              <div className='flex flex-col mt-6'>
                <textarea id='message' name='message' placeholder='Message' rows='4' className='mt-2 placeholder:text-white border border-white bg-transparent rounded-xl py-3 px-4  md:text-lg text-xs lg:text-xl font-medium text-white focus:outline-none focus:border-blue-600'></textarea>
              </div>
              <button type='submit' className='mt-6 bg-white text-black py-3 px-4 rounded-xl lg:w-32 w-24  md:text-lg text-xs lg:text-xl font-medium hover:bg-synergyBlue transition-colors duration-300'>Send</button>
            </form>
            </div>

        </div>

      </div>
    </div>
  )
}

export default EngagePage