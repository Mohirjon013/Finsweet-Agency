import React from 'react'
import blogInnerImg from '../assets/images/blog-inner-img.png'

function BlogInnerInfo() {
    const steps = [
        "Download the plugin from Figma community, search Ghost UXWriter",
        "Open the plugin on your artboard",
        "Search for your copy or look through the different categories of the copies",
        "Select the type of error you are looking for. You will get three different copies for each error",
        "Tap on the cards to insert text in your frames",
        "And you are all geared up to make your UX copies more fun and exciting 😎",
    ]

    const paragraphShort = "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged."

    const paragraphLong = "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages."

    const paragraphNorm = "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice."

  return (
    <section className='containers mb-[96px]'>
        <img src={blogInnerImg} alt="blog-inner-img" height={386} />

        <article className="max-w-[842px] mx-auto mt-[96px]">
            <h1 className="text-[36px] font-semibold leading-[54px] mb-6">
                Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h1>
            <p className="text-[16px] text-gray-700 mb-6">{paragraphLong}</p>
            <p className="text-[16px] text-gray-700 mb-6">{paragraphShort}</p>
            <p className="text-[16px] text-gray-700 mb-6">{paragraphShort}</p>
            <p className="text-[16px] text-gray-700">{paragraphNorm}</p>


            <h2 className="text-[24px] font-semibold mb-6">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
            <div className="flex flex-col gap-1">
                {steps.map((step, index) => (
                <p key={index} className="text-[16px] text-gray-700">
                    {index < steps.length - 1 ? <> <span className="font-medium">Step {index + 1}:</span> {step} </> : step}
                </p>
                ))}
            </div>


            <h2 className="text-[24px] font-semibold mt-10 mb-6">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
            <p className="text-[16px] text-gray-700 mb-6">{paragraphLong}</p>
        </article>
    </section>
  )
}

export default BlogInnerInfo
