import React, { useContext } from 'react'



import CompanyTeamItem from './CompanyTeamItem'
import { Context } from '../Context/UserContext'




function CompanyTeam() {
    const {teamImgList} = useContext(Context)
    
    return (
        <section className='containers mt-[96px]'>
            <div className="w-[701px]">
                <strong className='text-[14px] text-[#000000] font-medium uppercase tracking-[3px]'>MEET OUR TEAM</strong>
                <h3 className='text-[48px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>Teamwork is the only way we work </h3>
                <p className='text-[16px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable. </p>
            </div>
            <div className="w-full flex flex-wrap mt-[64px]">
                {teamImgList.map(item => <CompanyTeamItem item={item} key={item.id}/>)}
            </div>
        </section>
    )
}

export default CompanyTeam
