import React from 'react'
import visionImg from '../assets/images/vision-img.png'

function CompanyVision() {
    return (
        <section className='containers my-[96px]'>
            <div className="w-[701px]">
                <strong className='text-[14px] text-[#000000] font-medium uppercase tracking-[3px]'>Our VISION</strong>
                <h3 className='text-[36px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>We want to get local identification in every corner of the world in this era of global citizenship.</h3>
                <p className='text-[16px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <img className='mt-[64px] ' src={visionImg} alt="vision-img" width={1273} height={369} />
        </section>
    )
}

export default CompanyVision
 