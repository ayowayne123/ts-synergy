import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-synergyBlack py-12 text-white font-light '>
        <div className='container flex flex-col'>
        <h3 className='font-semibold text-3xl mx-auto flex '>Subscribe to Our Newsletter</h3>
        <p className='text-lg flex w-[900px] text-center mx-auto my-4'>Unlock exclusive insights and expert tips tailored to your financial journey with TS Synergy Consultancy Service Limited. Join our community and stay ahead of the curve in tax consultation, accounting services, financial planning, and business advisory.
             Subscribe now for financial empowerment!</p>
             <form className='w-[950px] border-[0.5px] rounded-[30px] border-white p-2 flex flex-row mx-auto my-5'>
                <input type='email' placeholder='Email' className='flex flex-grow appearance-none bg-transparent outline-none
                placeholder:text-[#858080] px-8 placeholder:text-xl placeholder:font-medium'/>
                <button className='bg-synergyBlue w-[180px] text-xl text-center h-[70px] rounded-2xl'>Submit</button>
             </form>
        </div>
    

    </div>
  )
}

export default NewsLetter