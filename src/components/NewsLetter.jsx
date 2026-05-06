import React from 'react'
import newsImg1 from '../assets/images/news-img1.png'
import newsImg2 from '../assets/images/news-img2.png'


function NewsLetter() {
  return (
    <section className='containers w-[1232px] relative flex items-center justify-around  bg-[#666DFF] py-[96px]'>
      <img className='absolute top-0 left-0' src={newsImg1} alt="news-imgs" width={88} height={80} />
      <div className="max-w-[468px] w-full">
        <strong className='text-[14px] text-[#fff] font-medium tracking-[3px]'>NEWSLETTER</strong>
        <h2 className='text-[36px] text-[#fff] font-semibold leading-[54px] mt-[13px]'>Subscribe our News Letter to get Latest Updates.</h2> 
      </div> 
      <input className='max-w-[430px] w-full h-[64px] bg-white outline-none  pl-7 text-[16px] text-[#232536] font-medium' type="email" placeholder='Paresh@Pixeto.com' autoComplete='off' />
      <img className='absolute top-0 right-0' src={newsImg2} alt="news-imgs"   />
    </section>
  )
}

export default NewsLetter
