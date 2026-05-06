import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CarrerInnerDetail({id}) {
    console.log(id);
    
    return (
        <section className='containers w-[1240px] px-0 pb-[96px] mb-[96px] bg-[#ECF8F9] '>
            <nav className='w-full mx-auto flex items-center  justify-center gap-[96px] pt-[43px] border-b-4 border-b-[#E0F1F2]'>
                <Link className='text-[24px] text-[#232536] font-semibold pb-[29px]' to={`/career/job/${id}/detials`}>Details</Link>
                <Link className='text-[24px] text-[#232536] font-semibold pb-[29px]' to={`/career/job/${id}/requirmeents`}>Requirements</Link>
                <Link className='text-[24px] text-[#232536] font-semibold pb-[29px]' to={`/career/job/${id}/responsibilities`}>Responsibilities</Link>
            </nav>
            <Outlet/>
        </section> 
    )
}

export default CarrerInnerDetail
