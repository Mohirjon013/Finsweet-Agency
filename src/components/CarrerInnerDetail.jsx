import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function CarrerInnerDetail({id}) {
    const activeClass = ({isActive}) => isActive ? ' border-b-4 border-b-[#5D5FEF] text-[24px] text-[#232536] font-semibold pb-[29px]' : 'text-[24px] text-[#232536] font-semibold pb-[29px]  border-b-4 border-b-transparent';
    
    return (
        <section className='containers w-[1240px] px-0 pb-[96px] mb-[96px] bg-[#ECF8F9] '>
            <nav className='w-full mx-auto flex items-center  justify-center gap-[96px] pt-[43px] border-b-4 border-b-[#E0F1F2]'>
                <NavLink end className={activeClass}  to={`/career/job/${id}`}>Details</NavLink>
                <NavLink className={activeClass} to={`/career/job/${id}/requirmeents`}>Requirements</NavLink>
                <NavLink className={activeClass} to={`/career/job/${id}/responsibilities`}>Responsibilities</NavLink>
            </nav>
            <Outlet/>
        </section> 
    )
}

export default CarrerInnerDetail
