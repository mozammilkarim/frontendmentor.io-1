import React from 'react'
import patternRings from "../assets/images/pattern-rings.svg"
import Footer from './Footer'

const ContactSection = () => {
    return (
        <div className='bg-[#242424]'>
            <div className='relative   flex md:flex-row flex-col md:justify-between justify-center items-center px-10 xl:px-0 xl:w-[80%] w-[95%] sm:m-auto m-0 sm:mt-10 pt-10'>
                <div className='md:w-1/2 text-center md:text-start flex flex-col '>
                    <h1 className='text-4xl md:text-[88px] font-bold mb-5'>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <form className='md:w-1/2 text-center md:text-start flex gap-3 flex-col justify-center items-center'>
                    <input type="text" name="name" className='bg-none outline-none' />
                    <input type="email" name="email" className='bg-none outline-none' />
                    <input type="text" name="message" className='bg-none outline-none' />
                    <button type="submit">Send Message</button>
                </form>
                <img src={patternRings} alt="rings" className='h-[5rem] xl:h-[7rem] absolute -left-36 -bottom-36  ' />
            </div>
            <Footer />

        </div>
    )
}

export default ContactSection