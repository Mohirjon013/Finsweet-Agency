import React from 'react'
import logoBlack from '../assets/images/logo-black.svg'
import fs from '../assets/images/fs.svg'
import x from '../assets/images/x.svg'
import instagram from '../assets/images/instagram.svg'
import link from '../assets/images/link.svg'




function Footer() {
  const socailList = [fs,x,instagram,link]
  return (
    <footer className='bg-[#FFE6D2] py-[28px]'>
      <div className="containers flex justify-between">
        <div className="flex gap-[42px]">
          <img src={logoBlack} alt="logo-black" width={120} height={24} />
          <p>©2026 Finsweet</p>
        </div>

        <ul className='flex items-center gap-[26px]'>
          {socailList.map((item, index) => <li key={index}> <img className='cursor-pointer' src={item} alt="items" width={22} height={22} /> </li>)}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
