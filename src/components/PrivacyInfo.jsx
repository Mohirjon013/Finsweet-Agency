import React from 'react'

import imgs from '../assets/images/privacy-img.png'

function PrivacyInfo() {
    
    
    const normParagraphs = "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged."
    
    const InfoItems1 = [
        {
            id:1,
            title: 'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, Designing voice and tone for error messages.',
        },
        {
            id:2,
            title:normParagraphs
        },
        {
            id:2,
            title:normParagraphs
        },
        {
            id:2,
            title: 'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, Designing voice and tone for error messages.',
        }
    ]
    
    const InfoItems2 = [
        {
            id:1,
            title: 'Business partners, suppliers and sub-contractors (“Affiliates”): Affiliates may use this information to help provide, understand, and improve our services and Affiliate’s own services for the performance of any contract we enter into ',
            
        },
        {
            id:2,
            title: 'Financial Institutions and Auditors: In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.',
        },
        {
            id:3,
            title: 'Advertisers and Advertising Networks: To provide you with select and serv e relevant advertisements to you and others, we may share your data with advertiser sand advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them with aggregate information about our users (for example, we may inform them that any given number of participants in a specified age group who clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target.',
        }
    ];
    
    return (
        <section className='containers py-[96px] relative bg-[#ECF8F9]'>
            <div className="w-[841px] mx-auto">
                <strong className='text-[36px] text-[#232536] font-semibold leading-[584x] mb-6 block'>Transform Your Idea Into Reality with Ether a Leading Digital Agency</strong>
                <div className="space-y-6">
                    {InfoItems1.map((item) => (
                        <p key={item.id} className="text-[#232536] text-[16px]">
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className="w-[841px] mx-auto mt-10">
                <strong className='text-[36px] text-[#232536] font-semibold leading-[584x] mb-4 block'>We disclose your information in the following manner:</strong>
                <div className="space-y-5">
                    {InfoItems2.map((item) => (
                        <p key={item.id} className="text-[#232536] text-[16px]">
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <img className='absolute left-0 bottom-[-24px]' src={imgs} alt="privacy-img" width={296} height={24} />
        </section>
    )
}

export default PrivacyInfo
