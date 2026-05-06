import React from 'react'

function InnerDetail() {
  const details = [
    "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
    "Design & Create highly engaging industry-related content in both photo, gif & video format",
    "Publish Posts on various social media channels",
    "Promote content on social networks and monitor engagement (e.g. comments and shares)",
    "Research industry-related topics",
    "Editing audio and sound design on projects",
    "Engage in opportunities to develop original content and concepts for web and mobile",
    "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
    "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels",
  ]
  return (
    <ul className='w-[873px] mx-auto flex flex-col gap-5 bg-[#ECF8F9] mt-[96px]'>
      {details.map((item, index) => (
        <li key={index} className='flex items-start gap-3 text-[16px] text-[#232536]'>
          <span className='mt-2 min-w-[8px] h-[8px] rounded-full bg-[#232536] block'></span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default InnerDetail
