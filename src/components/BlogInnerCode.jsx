import React from 'react'
import boxImg from '../assets/images/box.svg'
import blogPerson from '../assets/images/blog-person.png'
import boxBigImg from '../assets/images/big-box.svg'


function BlogInnerCode() {
    return (
        <section className='containers mb-[96px]'>
            <div className="flex justify-between mt-[96px] mb-[24px]">
                <img src={boxImg} alt="box-img" width={28} height={28} />
                <img src={boxBigImg} alt="box-img" width={48} height={52} />
            </div>

            <div className="w-[729px]">
                <h2 className='text-[48px] text-[#232536] font-semibold leading-[58px]'>Breaking the code How did we build our Figma plugin </h2>
                <p className='text-[16px] font-normal leading-[24px] mt-[24px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients</p>

                <div className="flex items-center mt-[32px] ">
                    <img className='mr-3' src={blogPerson} alt="blog-person" width={32} height={32} />
                    <strong className='text-[14px] text-[#232536] font-semibold'>Andrew Jonson</strong>
                    <span className='text-[#00000033] mx-[16px]'>|</span>
                    <p className='text-[16px] text-gray-400'>Posted on 27th January 2021</p>
                </div>
            </div> 
        </section>
    )
}

export default BlogInnerCode
