import React from 'react'

import rocketImg from '../assets/images/company-rocket.svg'
import bestImg from '../assets/images/company-best.svg'
import supportImg from '../assets/images/company-support.svg'
import boxBlueImg from '../assets/images/box-blue.svg'
import bottomSpan from '../assets/images/bottom-span.png'




function CompanyDelivery() {
    const deliveryList = [
        {
            id:1,
            img:rocketImg,
            title:"On Time Delivery",
        },
        {
            id:2,
            img:bestImg,
            title:"Best Quality",
        },
        {
            id:3,
            img:supportImg,
            title:"Support Assist",
        }
        
    ]
    
    return (
        <div className='w-[515px]'>
            <img src={boxBlueImg} alt="blue-box" width={16} height={16} />
            <ul className='space-y-3'>
                {
                    deliveryList.map(item => (
                        <li className='flex items-start gap-[16px] py-[32px] pl-[32px] bg-white'>
                            <div className="w-[47px] h-[47px] bg-[#FFE6D2] rounded-full">
                                <img className='m-auto mt-2.5' src={item.img} alt="delivery-imgs" width={24} height={24} />
                            </div>
                            <div className="w-[303px]">
                                <h3 className='text-[16px] text-[#232536] font-semibold  mb-[8px]'>{item.title}</h3>
                                <p className='text-[14px] font-medium text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him. </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <img src={bottomSpan} alt="bottom-span" width={515} height={8} />
        </div>
    )
}

export default CompanyDelivery
