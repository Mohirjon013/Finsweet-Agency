import React from 'react'
import fs from '../assets/images/fs.svg'
import x from '../assets/images/x.svg'
import instagram from '../assets/images/instagram.svg'

function TeamInfo({item}) {
    console.log(item);
    const socailList = [fs,x,instagram]
    
    
  return (
    <section className='containers py-[96px]'>
        <div className="w-[505px] mx-auto text-center">
            <img className='rounded-full mx-auto' src={item.img} alt="item-imgs" width={320} height={320} />
            <strong className='text-[36px] text-[#232536] font-semibold block mt-[48px] mb-[8px]'>{item.name}</strong>
            <p className='text-[14px] text-gray-500 font-medium block mb-6'>{item.job}</p>
            <p className='text-[16px] text-gray-700 mb-7'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>

            <ul className='flex items-center gap-[26px] mx-auto w-[120px] '>
                {socailList.map((item, index) => <li key={index}> <img className='cursor-pointer' src={item} alt="items" width={22} height={22} /> </li>)}
            </ul>
        </div>
    </section>
  )
}

export default TeamInfo
