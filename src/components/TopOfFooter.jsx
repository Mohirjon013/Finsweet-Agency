import React from 'react'
import footerImg from '../assets/images/footer-img.svg'
import footerImg2 from '../assets/images/footer-img2.svg'

import nextBlack from '../assets/images/next-black.svg'


import { Link } from 'react-router-dom'

function TopOfFooter() {
  const navLinks = [
  { name: "Home", link: "/" },
  { name: "Service", link: "/service" },
  { name: "Company", link: "/" },
  { name: "Career", link: "/career" },
  { name: "News", link: "/news" }
]

const serviceLinks = [
  { name: "Technical support", link: "/technical-support" },
  { name: "Testing", link: "/testing" },
  { name: "Development", link: "/development" },
  { name: "AWS/Azure", link: "/aws-azure" },
  { name: "Consulting", link: "/consulting" },
  { name: "Information Technology", link: "/information-technology" }
]

const resourceLinks = [
  { name: "About Us", link: "/about" },
  { name: "Testimonial", link: "/testimonial" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of use", link: "/terms" },
  { name: "Blog", link: "/blog" }
]
  
  return (
    <section className='containers relative mt-[96px] mb-[64px] flex justify-between'>
      <div className="w-[452px]">
        <img src={footerImg} alt="footer-img" width={36} height={34} />
        <h3 className='text-[48px] text-[#232536] font-semibold leading-[58px] mt-[32px] mb-[40px]'>Let's make  something special</h3>

        <strong className='text-[24px] text-[#000000] font-semibold'>Let's talk! 🤙 </strong>
        <div className="w-[268px] space-y-2 pb-[14px] mt-7 border-b-2 border-b-[#00000014]">
          <span className='text-[18px] font-medium text-[#232536]'>020 7993 2905</span>
          <span className='text-[18px] font-medium text-[#232536]'>hi@finsweet.com</span>
        </div>
        <p className='text-[14px] font-medium text-[#232536] mt-4'>DLF Cybercity, Bhubaneswar, <br/> India, &52050</p>
      </div>

      <div className='flex gap-[60px] items-start mt-[80px] mr-[110px]'>
        <ul className='flex flex-col gap-3'>
          {navLinks.map((item, index) => <Link key={index} className='text-[#232536] text-[16px] font-semibold' to={item.link}>{item.name}</Link>)}
        </ul>

        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[16px] mb-1'>Service</li>
          {serviceLinks.map((item, index) => <Link key={index} className='text-gray-500 text-[14px] font-medium' to={item.link}>{item.name}</Link>)}
        </ul>

        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-[16px] mb-1'>Resourses</li>
          {resourceLinks.map((item, index) => <Link key={index} className='text-gray-500 text-[14px] font-medium' to={item.link}>{item.name}</Link>)}
        </ul>
      </div>

      <Link className='flex gap-[8px] absolute bottom-0 right-0'>
        <img src={footerImg2} alt="footer-img" width={50} height={'14'}/>
        <span className='font-medium text-[16px] text-[#232536]'>Contact Us</span> 
        <img src={nextBlack} alt="next-black" width={20}/>
      </Link>
    </section>
  )
}

export default TopOfFooter
