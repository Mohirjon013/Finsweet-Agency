import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import nextImg from '../assets/images/next.svg'


function Header() {
  return (
    <header className='  bg-[#232536]'>
        <div className="containers flex items-center justify-between">
            <img className='w-[122px] h-[27px] ' src={logoImg} alt="logo-img" width={122} height={27} />

            <nav className='flex items-center  gap-[32px] justify-between text-[#A7A8AF]'>
                <NavLink className={'py-[27px]'} to={'/'}>Company</NavLink>
                <NavLink className={'py-[27px]'} to={'/career'}>Career</NavLink>
                <NavLink className={'py-[27px]'} to={'/blog'}>Blog</NavLink>
                <NavLink className={'py-[27px]'} to={'/contact us'}>Contact us</NavLink>
                <NavLink className={'flex gap-2 text-[#FFD3AF] py-[27px]'} to={'/clone project'}>
                    Clone project
                    <img src={nextImg} alt="next-img" width={20} />
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header
