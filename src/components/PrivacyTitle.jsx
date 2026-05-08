import React from 'react'
import boxImg from '../assets/images/box.svg'
import boxBigImg from '../assets/images/big-box.svg'

function PrivacyTitle() {
    return (
        <section className='containers py-[84px] '>
            <div className="flex justify-between mb-[24px]">
                <img src={boxImg} alt="box-img" width={28} height={28} />
                <img src={boxBigImg} alt="box-img" width={48} height={52} />
            </div>
            <h2 className='text-[48px] text-[#232536] font-semibold leading-[58px] mb-2'>Privacy Policy</h2>
            <span className='text-[16px] text-gray-600 '>Last Updated  on 27th January 2021</span>
        </section>
    )
}

export default PrivacyTitle
