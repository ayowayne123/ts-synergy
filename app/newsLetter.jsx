import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-synergyBlack py-12 text-white font-light '>
        <div className='container flex flex-col'>
        <h3 className='font-semibold lg:text-3xl text-2xl mx-auto flex px-16 lg:px-0 text-center '>Subscribe to Our Newsletter</h3>
        <p className='lg:text-lg text-sm flex lg:max-w-[900px] text-center mx-auto my-4'>Unlock exclusive insights and expert tips tailored to your financial journey with TS Synergy Consultancy Service Limited. Join our community and stay ahead of the curve in tax consultation, accounting services, financial planning, and business advisory.
             Subscribe now for financial empowerment!</p>
             <form className='lg:max-w-[950px] w-full border-[0.5px] rounded-[30px] border-white p-2 flex flex-row mx-auto my-5'>
                <input type='email' placeholder='Email' className='flex flex-grow appearance-none bg-transparent outline-none
                placeholder:text-[#858080] lg:px-8 px-4 lg:placeholder:text-xl placeholder:text-lg placeholder:font-medium'/>
                <button className='bg-synergyBlue lg:w-[180px] w-20 text-base lg:text-xl text-center lg:h-[70px] h-[48px] rounded-2xl'>Submit</button>
             </form>
        </div>
    

    </div>
  )
}

export default NewsLetter