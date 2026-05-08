import React from 'react'
import boxImg from '../assets/images/box.svg'
import topSpan from '../assets/images/top-span.png'
import contactMap from '../assets/images/contact-img.png'


import ContactForm from './ContactForm'



function ContactHero() {
  

  return (
    <section className='containers pt-[96px] '>
      <div className="flex items-center justify-between">
        <div>
          <div className="w-[672px]">
            <img src={boxImg} alt="box-img" width={28} height={28} />
            <strong className='text-[14px] text-[#232536] font-medium tracking-[3px] uppercase block my-6'>CONTACT US</strong>
            <h3 className='text-[36px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>Have a Question ? Let’s Get in Touch with us 👋</h3>
            <p className='text-[16px] mt-6'>Fill up the Form  and ou team will get back to within 24 hrs</p>
          </div>
          
          <ContactForm/>
        </div>

        <div className="w-[512px] pl-[96px] pt-[83px] pb-[128px] pr-[148px] relative z-20 bg-[#666DFF]">
          <img className='absolute top-[-22.5px] right-0 z-10' src={topSpan} alt="top-span" width={133} />
          <div className="absolute w-[133px] h-[150px] bg-[#666DFF] absolute top-0 z-40 right-0"></div>
          <span className='text-[14px] text-[#ffffffae] font-medium block pb-3 border-b-2 border-b-[#00000014]'>Location</span>
          <p className='text-[18px] text-white font-medium mb-[24px] pt-3'>DLF Cybercity, Bhubaneswar, India, &52050</p>

          <span className='text-[14px] text-[#ffffffae] font-medium block pb-3 border-b-2 border-b-[#00000014]'>Working Hour</span>
          <p className='text-[18px] text-white font-medium pt-3'>Monday To Friday <br /> 9:00 AM to 8:00 PM </p>
          <span className='text-[14px] text-[#ffffffae] font-medium'>Our Support Team is available 24Hrs</span> 

          <span className='text-[14px] text-[#ffffffae] font-medium block pb-3 border-b-2 border-b-[#00000014] mt-[28px]'>Contact Us</span>
          <p className='text-[18px] text-white font-medium pt-3'>020 7993 2905</p>
          <span className='text-[14px] text-[#ffffffae] font-medium'>Hello@ether.com</span> 
        </div>
      </div>


      <img className='mt-[96px]' src={contactMap} alt="contact-map" width={1280} height={410} />
    </section>
  )
}

export default ContactHero
