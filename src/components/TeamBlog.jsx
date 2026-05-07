import React from 'react'
import boxBlue from '../assets/images/box-blue.svg'
import teamImg1 from '../assets/images/team-img1.png'
import teamImg2 from '../assets/images/team-img2.png'
import next from '../assets/images/next-black.svg'



function TeamBlog() {
  const teamImgList = [teamImg1,teamImg2]
  return (
    <section className='bg-[#ECF8F9] py-[96px]'>
      <div className="containers">
        <img src={boxBlue} alt="item-imgs" width={16} height={16} />
        <strong className='text-[48px] text-[#232536] font-semibold block mt-[19px] mb-[48px]'>Blog posts from Javena</strong>
        <ul className="flex items-center justify-between">
          {teamImgList.map((item, index) => (
            <li className='w-[605px] flex gap-5 bg-white' key={index}>
              <img src={item} alt="items-img" width={296} height={248} />
              <div className="py-6">
                <span className='text-[14px] text-gray-500 font-medium'>Jan 19, 2021</span>
                <p className='text-[24px] text-[#232536] font-semibold mt-3 mb-5'>Today’s best design trends for digital products</p>
                <button className='text-[16px] font-medium text-[#444CFC] flex gap-3 mt-6'>Read More <img src={next} alt="next=img" width={20} /></button>

              </div>
            </li>
          ))}
          
        </ul>
      </div>
    </section>
  )
}

export default TeamBlog
