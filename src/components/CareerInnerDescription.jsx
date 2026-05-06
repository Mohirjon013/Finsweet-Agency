import React from 'react'
import next from '../assets/images/next.svg'
import footerImg from '../assets/images/footer-img.svg'
import boxBigImg from '../assets/images/big-box.svg'



function CareerInnerDescription({item}) {
    return (
        <section className='containers flex items-center justify-between py-[96px]'>
            <div className="w-[490px]">
                <strong className='text-[14px] text-[#232536] font-semibold mb-[10px] block'>CAREER AT Ether</strong>
                <h2 className='text-[48px] text-[#232536] font-semibold leading-[58px] mt-[24px] mb-[16px]'>{item.title}</h2>
                <p className='text-[16px] text-[#232536] mb-[52px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                <button className='w-[182px] bg-[#444CFC] text-white mt-10 flex justify-center gap-[13px] relative text-[16px] font-medium py-5'>
                    <img className='absolute top-0 left-0' src={footerImg} alt="footer-img" width={20} height={27} />
                    Apply Now
                    <img src={next} alt="next-img" width={20} />
                </button>
            </div>
            <div className="w-[515px] relative bg-[#FFE0C7] pl-[80px] pt-[82px] pb-[78px]">
                <img className='absolute top-0 right-0' src={boxBigImg} alt="career-img" width={48} height={52} />
                <h3 className='text-[24px] text-[#232536] font-semibold mb-6'>Job Description</h3>
                <p className='text-[16px]'>Remote, India , 4 to 5 Years Of Experience</p>
                <p className='text-[16px] my-[16px]'>Department: Product Engineering</p>
                <p className='text-[16px]'>Full Tim e 5 Position Available.</p>
            </div>
        </section>
    )
}

export default CareerInnerDescription
