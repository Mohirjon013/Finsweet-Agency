import React, { useEffect } from 'react'
import next from '../assets/images/next.svg'
import footerImg from '../assets/images/footer-img.svg'
import useTelegramForm from '../hook/useTelegramForm';
import toast from 'react-hot-toast';

function ContactForm() {
    const {
        name, setName,
        email, setEmail,
        message, setMessage,
        subject, setSubject,
        status,
        handleSubmit,
    } = useTelegramForm();

    useEffect(() => {
        if (status === "success") toast.success("Message sent!");
        if (status === "error") toast.error("Something went wrong.");
    }, [status]);

    return (
        <form onSubmit={handleSubmit} className='w-[405px] mt-[64px] space-y-6'>
            <label className='block'>
                <span className='text-[14px] text-gray-400 block'>Name</span>
                <input className='w-full text-[16px] text-[#232536] py-[8px] border-b-1 border-b-[#232536] outline-none' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Paresh Srichandan' aria-label='Please enter your name' required />
            </label>

            <label className='block'>
                <span className='text-[14px] text-gray-400 block'>E-mail</span>
                <input className='w-full text-[16px] text-[#232536] py-[8px] border-b-1 border-b-[#232536] outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Paresh@pixeto.com' aria-label='Please enter your email' required />
            </label>

            <label className='block'>
                <span className='text-[14px] text-gray-400 block'>Subject</span>
                <input className='w-full text-[16px] text-[#232536] py-[8px] border-b-1 border-b-[#232536] outline-none' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='For web design work Enquire ' aria-label='Please enter your subject' required />
            </label>

            <label className='block'>
                <span className='text-[14px] text-gray-400 block'>Messege</span>
                <textarea className={"w-full text-[16px] text-[#232536] pt-[14px] border-b-1 border-b-[#232536] outline-none resize-none"} rows={4} type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type your Messege' aria-label='Please enter your message' required ></textarea>
            </label>

            <button type='submit' disabled={status === 'loading'} className='w-[182px] cursor-pointer hover:opacity-70 duration-300 bg-[#444CFC] text-white mt-10 flex justify-center gap-[13px] relative text-[16px] font-medium py-5'>
                <img className='absolute top-0 left-0' src={footerImg} alt="footer-img" width={20} height={27} />
                {status === "loading" ? "Loading..." : "Send Messege" }
                <img src={next} alt="next-img" width={20} />
            </button>
            
            
        </form>
    )
}

export default ContactForm
