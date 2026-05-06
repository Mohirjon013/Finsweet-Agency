import React from 'react'
import postImg1 from '../assets/images/post-img1.png'
import postImg2 from '../assets/images/post-img2.png'
import postImg3 from '../assets/images/post-img3.png'
import postImg4 from '../assets/images/post-img4.png'
import postImg5 from '../assets/images/post-img5.png'
import postImg6 from '../assets/images/post-img6.png'
import blogPpl1 from '../assets/images/blog-ppl1.png'



function BlogPost() {
  const postImgs = [postImg1, postImg2, postImg3, postImg4, postImg5, postImg6]
  return (
    <section className=' containers mb-[96px]'>
      <h3 className='text-[48px] text-[#232536] font-semibold leading-[58px] mb-[64px]'>All posts</h3>
      <ul className='flex flex-wrap gap-4.5'>
        {
          postImgs.map((item, index) => (
            <li key={index} className='w-[390px] bg-[#F9F9FF]'>
              <img src={item} alt="items-img" width={390} height={266} />
              <div className="w-[390px] p-[32px]">
                <h4 className='text-[24px] text-[#232536] font-semibold mb-[16px]'>We aim to attain the greatest satisfaction for our clients </h4>
                <p className='text-[16px] text-[#232536] mb-[24px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>

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

export default BlogPost
