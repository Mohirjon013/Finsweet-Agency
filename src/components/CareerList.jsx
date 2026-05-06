import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import nextBlack from '../assets/images/next-black.svg'
import { Context } from '../Context/UserContext'

function CareerList() {
    
    const {offerList} = useContext(Context)

    
    return (
        <section className='containers mb-[96px] bg-[#ECF8F9] p-[78px]'>
            <ul className="flex flex-wrap gap-7">
                {
                    offerList.map(item => (
                        <li className='w-[354px] bg-white pt-[48px] pl-[48px] pb-[30px]'>
                            <strong className='text-[16px] text-[#232536] font-semibold mb-[10px] block'>{item.title}</strong>
                            <span className='text-[16px] text-gray-500 font-semibold block'>{item.location} · Full Time</span>
                            <p className='text-[16px] text-gray-500 font-semibold block mb-[52px]'>{item.salary} · {item.equity}</p>

                            <Link to={`/career/job/${item.id}`} className='flex items-center gap-3 text-[#5D5FEF] text-[16px] font-medium' key={item.id}>Apply Now <img src={nextBlack} alt="logo-black" width={20} /></Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default CareerList
