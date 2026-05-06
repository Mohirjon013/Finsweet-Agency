import React from 'react'

function InnerReq() {
  const requirements = [
    "Bachelor's degree in Marketing, Communications, or related field",
    "Proven work experience as a Social Media Manager or similar role",
    "Hands on experience in content management",
    "Excellent copywriting skills",
    "Ability to deliver creative content (text, image and video)",
    "Solid knowledge of SEO, keyword research and Google Analytics",
    "Knowledge of online marketing channels",
    "Familiarity with web design and publishing",
    "Excellent communication skills",
    "Analytical and multitasking skills",
  ]
  return (
    <ul className='w-[873px] mx-auto flex flex-col gap-5 bg-[#ECF8F9] mt-[96px]'>
      {requirements.map((item, index) => (
        <li key={index} className='flex items-start gap-3 text-[16px] text-[#232536]'>
          <span className='mt-2 min-w-[8px] h-[8px] rounded-full bg-[#232536] block'></span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default InnerReq
