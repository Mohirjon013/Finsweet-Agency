 import React from 'react'
 import boxImg from '../assets/images/box.svg'
import boxBlueImg from '../assets/images/box-blue.svg'

import boxBigImg from '../assets/images/big-box.svg'
import pplImg1 from '../assets/images/hero-img1.png'
import pplImg2 from '../assets/images/hero-img2.png'
import pplImg3 from '../assets/images/hero-img3.png'

import logoTeam from '../assets/images/logo-team.png'

import titanSpan from '../assets/images/titan-span.svg'

const numItem = [
    {
      num:'1560+',
      title: 'Project Delivered'
    },
    {
      num:'100+',
      title: 'Professional'
    },
    {
      num:'950+',
      title: 'Happy Client'
    },
    {
      num:'10 yrs',
      title: 'Experience'
    }
]
 
function CompanyHero() {
    return (
        <section className='containers'>
            <div className="flex justify-between mt-[96px] mb-[24px]">
                <img src={boxImg} alt="box-img" width={28} height={28} />
                <img src={boxBigImg} alt="box-img" width={48} height={52} />
            </div>

            <div className="w-[664px]">
                <span className='inline-block text-[14px] font-medium uppercase tracking-[3px] mb-5'>Company</span>
                <h2 className='text-[48px] text-[#232536] font-semibold uppercase leading-[58px] '>Award-winning Company seen and used by millions around the world.</h2>
                <p className='text-[14px] font-normal leading-[24px] mt-[24px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>

            <div className="flex gap-3 mt-16 mb-[96px]">
                <img src={pplImg1} alt="ppl-img1" width={405} height={446}/>
                <img src={pplImg2} alt="ppl-img1" width={400} height={446}/>
                <img src={pplImg3} alt="ppl-img1" width={405} height={446}/>
            </div>

            <div className="flex justify-between mb-[96px]">
                <div className="w-[549px]">
                    <img src={boxBlueImg} alt="box-blue" width={16} height={16} />
                    <strong className='text-[16px] text-[#232536] font-semibold inline-block mt-4'>Our Story 👇 </strong>
                    <h3 className='text-[36px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>From Startups to Titans of Industry</h3>
                    <p className='text-[16px] text-[#232536]'> Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                </div>

                <ul className="w-[604px] grid grid-cols-2 gap-y-10 pt-[62px] pb-[82px] bg-[#FFD3AF91] pl-[110px] pr-[150px]">
                {numItem.map((item, index) => (
                    <li key={index} className='w-[138px] flex flex-col'>
                    <strong className='text-[36px] text-[#232536] font-semibold mb-[8px]'>{item.num}</strong>
                    <img src={titanSpan} alt="titan-span" width={72} height={6} />
                    <p className='text-[16px] text-[#232536] font-semibold mt-[2px]'>{item.title}</p>
                    </li>
                ))}
                </ul>
            </div>
            <div className="bg-[#FAFAFC] mb-[96px]">
                <img className='mx-auto' src={logoTeam} alt="logo-team" width={1060} height={106} />
            </div>
        </section>
    )
}
 
export default CompanyHero
 