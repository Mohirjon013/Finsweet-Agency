import React from 'react'
import careersImg from '../assets/images/career-img.png'

function CareerHero() {
    return (
        <section className='containers my-[96px]'>
            <div className="w-[624px] mx-auto text-center mb-[64px]">
                <strong className='text-[14px] text-[#000000] font-medium uppercase tracking-[3px]'>CAREER AT FINSWEET</strong>
                <h3 className='text-[48px] text-[#232536] font-semibold leading-[54px] my-6'>We hired people who are Always Passionate about what they do</h3>
                <p className='text-[16px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
            </div>
            <img className='mx-auto' src={careersImg} alt="career-img" width={1099} height={194} />
            <div className="w-[210px] mx-auto flex flex-col justify-center text-center mt-[80px]">
                <strong className='text-[18px] text-[#232536] font-medium mb-[16px] block'>See Our open positions </strong>
                <span>👇</span>
            </div>
        </section>
    )
}

export default CareerHero
