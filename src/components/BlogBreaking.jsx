import React from 'react'
import boxImg from '../assets/images/box-yellow.svg'
import next from '../assets/images/next-black.svg'
import blogPerson from '../assets/images/blog-person.png'
import blogImg from '../assets/images/blog-img.png'
import blogBox from '../assets/images/blog-box.svg'
import blogPpl1 from '../assets/images/blog-ppl1.png'
import blogPpl2 from '../assets/images/blog-ppl2.png'
import blogPpl3 from '../assets/images/blog-ppl3.png'


import { Link } from 'react-router-dom'


function BlogBreaking() {
  const designList = [
    {
      id:1,
      img:blogPpl1,
      name:'Andrew Jonson',
    },
    {
      id:2,
      img:blogPpl2,
      name:'Mathew Jasele',
    },
    {
      id:3,
      img:blogPpl3,
      name:'Hussen Abakas', 
    },
  ]


  return (
    <section className='containers py-[96px] flex items-start justify-between'>
      <div className="w-[624px]">
        <img src={boxImg} alt="box-img" width={24} height={24} />
        <strong className='text-[14px] text-[#232536] font-semibold inline-block mt-5 uppercase tracking-[3px]'>TREnding </strong>
        <h3 className='text-[36px] text-[#232536] font-semibold leading-[54px] my-6'>Breaking the code How did we build our Figma plugin </h3>
        <p className='text-[16px] text-[#232536]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
        <Link to={'/blog/posts'} className='text-[16px] font-medium text-[#444CFC] flex gap-3 mt-6'>Read More <img src={next} alt="next=img" width={20} /></Link>

        <div className="flex items-center mt-10 mb-[49px]">
          <img className='mr-3' src={blogPerson} alt="blog-person" width={32} height={32} />
          <strong className='text-[14px] text-[#232536] font-semibold'>Andrew Jonson</strong>
          <span className='text-[#00000033] mx-[16px]'>|</span>
          <p className='text-[16px] text-gray-400'>Posted on 27th January 2021</p>
        </div>

        <img src={blogImg} alt="blog-img" width={624} height={390} />
      </div>

      <div className="w-[515px] bg-[#FFDFC6] relative py-[72px] pl-[72px] ">
        <img className='absolute top-0 right-0' src={blogBox} alt="blog-box" width={48} height={52} />
        <ul className='space-y-[48px]'>
          {designList.map(item => (
            <li key={item.id} className='w-[366px]'>
              <h4 className='text-[24px] text-[#232536] font-semibold mb-4'>Great design expectations prejudice in digital products in Next Year</h4>
              <div className="flex items-center gap-3">
                <img src={item.img} alt="items-img" width={32} height={32} />
                 <div className="">
                  <strong className='text-[14px] text-[#232536] block'>{item.name}</strong>
                  <span className='text-[14px] font-medium text-gray-500'>Jan 19, 2021</span>
                 </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BlogBreaking
