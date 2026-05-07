import React from 'react'
import tw from '../assets/images/tw.svg'
import insta from '../assets/images/insta.svg'
import linkedIn from '../assets/images/linked-in.svg'
import { Link } from 'react-router-dom'

function CompanyTeamItem({item}) {
  return (
    <Link to={`/team/${item.id}`} className='team__item'>
      <img className='team__img' src={item.img} alt="team-img1" width={320} height={320} />
      <div className="team__item--hidden">
          <strong className='text-[24px] text-[#fff] font-semibold'>{item.name}</strong>
          <p className='text-[14px] text-[#BDBEC2] font-medium mt-[8px] mb-[24px]'>{item.job}</p>
          <div className="w-[101px] flex justify-between">
            <img src={tw} alt="tw-img" width={20} height={19} />
            <img src={insta} alt="insta-img" width={20} height={19} />
            <img src={linkedIn} alt="linkedIn-img" width={20} height={19} />
          </div>
      </div>
    </Link>
  )
}

export default CompanyTeamItem
