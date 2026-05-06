import React from 'react'
import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'
import team4 from '../assets/images/team4.png'
import team5 from '../assets/images/team5.png'
import team6 from '../assets/images/team6.png'
import team7 from '../assets/images/team7.png'
import team8 from '../assets/images/team8.png'


import CompanyTeamItem from './CompanyTeamItem'




function CompanyTeam() {
    const teamImgList = [
        { id: 1, img: team1, name: "James Carter", job: "Support Assistant" },
        { id: 2, img: team2, name: "Sarah Mitchell", job: "Product Manager" },
        { id: 3, img: team3, name: "David Nguyen", job: "Frontend Developer" },
        { id: 4, img: team4, name: "Emily Turner", job: "UI/UX Designer" },
        { id: 5, img: team5, name: "Michael Brooks", job: "Backend Developer" },
        { id: 6, img: team6, name: "Olivia Harris", job: "Marketing Specialist" },
        { id: 7, img: team7, name: "Daniel Kim", job: "DevOps Engineer" },
        { id: 8, img: team8, name: "Sophia Johnson", job: "QA Engineer" },
    ]

    return (
        <section className='containers mt-[96px]'>
            <div className="w-[701px]">
                <strong className='text-[14px] text-[#000000] font-medium uppercase tracking-[3px]'>MEET OUR TEAM</strong>
                <h3 className='text-[48px] text-[#232536] font-semibold leading-[54px] mt-[16px] mb-6'>Teamwork is the only way we work </h3>
                <p className='text-[16px] text-[#232536]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable. </p>
            </div>
            <ul className="w-full flex flex-wrap mt-[64px]">
                {teamImgList.map(item => <CompanyTeamItem item={item} key={item.id}/>)}
            </ul>
        </section>
    )
}

export default CompanyTeam
