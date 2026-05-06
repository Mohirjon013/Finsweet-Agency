import React from 'react'
import emoji1 from '../assets/images/emoji1.svg'
import emoji2 from '../assets/images/emoji2.svg'
import emoji3 from '../assets/images/emoji3.svg'
import emoji4 from '../assets/images/emoji4.svg'
import emoji5 from '../assets/images/emoji5.svg'
import emoji6 from '../assets/images/emoji6.svg'

function CareerWork() {
    const benefitsList = [
        { id: 1, icon: "😊", title: "Covid-19 insurance", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
        { id: 2, icon: "⏰", title: "Flexible working time", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
        { id: 3, icon: "🏠", title: "Work from home", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
        { id: 4, icon: "🎉", title: "Annual retreats", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
        { id: 5, icon: "💰", title: "Learning stipend", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
        { id: 6, icon: "💪", title: "Gym membership", text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it" },
    ]
  return (
    <section className='bg-[#FAFAFC] mb-[96px]'>
        <div className="containers py-[96px]">
            <div className="mb-[64px]">
                <strong className='text-[14px] text-[#000000] font-medium uppercase tracking-[3px]'>OUR WORK & CULTURE</strong>
                <h3 className='text-[36px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>Come and join a team of highly skilled professionals.</h3>
                <p className='text-[16px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p> 
            </div>
            <ul className='flex flex-wrap gap-3'>
                {
                    benefitsList.map(item => (
                        <li className='w-[400px] bg-white py-[32px] pl-[32px]'>
                            <div className="w-[39px] h-[39px] bg-[#FFD3AF80] rounded-full">
                                <span className='mx-auto pt-1.5 pl-1.5 text-xl inline-block'>{item.icon}</span>
                                {/* <img  src={item.icon} alt="icons-img" /> */}
                            </div>
                            <h3 className='text-[16px] text-[#232536] font-semibold my-2'>{item.title}</h3>
                            <p className='text-[14px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                        </li>
                    ))
                }
            </ul>
        </div>

    </section>
  )
}

export default CareerWork
