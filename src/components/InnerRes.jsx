import React from 'react'

function InnerRes() {
  const responsibilities = [
    "Perform research on current benchmark trends and audience preferences",
    "Design and implement social media strategy to align with business goals",
    "Set specific objectives and report on ROI",
    "Generate, edit, publish and share engaging content daily",
    "Monitor SEO and web traffic metrics",
    "Collaborate with other teams, like marketing, sales and customer service to ensure brand consistency",
    "Communicate with followers, respond to queries in a timely manner and monitor customer reviews",
    "Oversee social media accounts design",
    "Suggest and implement new features to develop brand awareness",
    "Stay up-to-date with current technologies and trends in social media, design tools and applications",
  ]
  return (
    <ul className='w-[873px] mx-auto flex flex-col gap-5 bg-[#ECF8F9] mt-[96px]'>
      {responsibilities .map((item, index) => (
        <li key={index} className='flex items-start gap-3 text-[16px] text-[#232536]'>
          <span className='mt-2 min-w-[8px] h-[8px] rounded-full bg-[#232536] block'></span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default InnerRes
