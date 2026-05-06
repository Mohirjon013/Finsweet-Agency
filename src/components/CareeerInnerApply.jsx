import React from 'react'
import checkedImg from '../assets/images/checked.svg'
import footerImg from '../assets/images/footer-img.svg'
import next from '../assets/images/next.svg'

function CareeerInnerApply() {
  return (
    <section className='containers mb-[96px]'>
      <h2 className='text-[36px] text-[#232536] font-semibold mb-[29px]'>Apply Now </h2>

      <div className='flex flex-col gap-6 mb-[32px]'>
        <div className='flex gap-6'>
          <input className='w-1/2 bg-[#F8F9FF] py-[34px] pl-10 outline-none text-[18px] text-[#232536]' type="text" placeholder='First Name' autoComplete='off'/>
          <input className='w-1/2 bg-[#F8F9FF] py-[34px] pl-10 outline-none text-[18px] text-[#232536]' type="text" placeholder='Last Name' autoComplete='off'/>
        </div>
        <div className='flex gap-6'>
          <input className='w-1/2 bg-[#F8F9FF] py-[34px] pl-10 outline-none text-[18px] text-[#232536]' type="email" placeholder='Email Id' autoComplete='off'/>
          <input className='w-1/2 bg-[#F8F9FF] py-[34px] pl-10 outline-none text-[18px] text-[#232536]' type="tel" placeholder='Mobile No' autoComplete='off'/>
        </div>
        <textarea className='w-full bg-[#F8F9FF] py-[34px] pl-10 outline-none text-[16px] text-[#232536] h-[200px] resize-none' placeholder='Why do you thing you are good fit for Ether?' />
      </div>

      <div className="">
        <div className="w-[902px] flex items-start gap-6">
          <div className="w-[36px] h-[36px] bg-[#454DFD]">
            <img className='mx-auto mt-3' src={checkedImg} alt="checked-img" width={18} height={11} />
          </div>
          <p className='text-[14px] text-[#232536] mt-[4px]'>I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
        </div> 
        <button className='w-[252px] bg-[#444CFC] text-white mt-10 flex justify-center gap-[13px] relative text-[16px] font-medium py-5'>
            <img className='absolute top-0 left-0' src={footerImg} alt="footer-img" width={20} height={27} />
            Submit Application
            <img src={next} alt="next-img" width={20} />
          </button>
      </div>
    </section>
  )
}

export default CareeerInnerApply
