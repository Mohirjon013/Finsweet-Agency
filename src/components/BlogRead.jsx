import React from 'react'
import readImg from '../assets/images/read-img1.png'
import readImg2 from '../assets/images/read-img2.png'
import readImg3 from '../assets/images/read-img3.png'
import readImg4 from '../assets/images/read-img4.png'
import blogPpl1 from '../assets/images/blog-ppl1.png'




function BlogRead() {
  const readList = [
    {
      id:1,
      img:readImg,
      name:'Andrew Jonson',
    },
    {
      id:2,
      img:readImg2,
      name:'Mathew Jasele',
    },
    {
      id:3,
      img:readImg3,
      name:'Hussen Abakas', 
    },
    {
      id:4,
      img:readImg4,
      name:'Max Hoffman', 
    },
  ]
  return (
    <section className=' containers mb-[96px]'>
      <h3 className='text-[48px] text-[#232536] font-semibold leading-[58px] mb-[64px]'>Read Recent Post</h3>
      <ul className='flex flex-wrap gap-6'>
        {
          readList.map(item => (
            <li key={item.id} className='w-[604px] flex items-center gap-[32px] bg-[#F9F9FF]'>
              <img src={item.img} alt="items-img" width={296} height={248} />
              <div className="w-[264px]">
                <h4 className='text-[24px] text-[#232536] font-semibold mb-[64px]'>Today’s best design trends for digital products</h4>

                <div className="flex items-center gap-3">
                  <img className='' src={blogPpl1} alt="items-img" width={32} height={32} />
                  <div className="">
                    <strong className='text-[14px] text-[#232536] block'>{item.name}</strong>
                    <span className='text-[14px] font-medium text-gray-500'>Jan 19, 2021</span>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default BlogRead
