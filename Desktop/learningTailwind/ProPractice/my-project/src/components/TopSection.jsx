import React from 'react'
import patternRings from "../assets/images/pattern-rings.svg"
import patternCircle from "../assets/images/pattern-circle.svg"
import profileImg from "../assets/images/image-profile-desktop.webp"
import linkedin from "../assets/images/icon-linkedin.svg"
import twitter from "../assets/images/icon-twitter.svg"
import frontend from "../assets/images/icon-frontend-mentor.svg"
import github from "../assets/images/icon-github.svg"

const socials = [
    {
        name: "linkedIn",
        url: "#",
        icon: linkedin
    },
    {
        name: "github",
        url: "#",
        icon: github
    }, {
        name: "twitter",
        url: "#",
        icon: twitter
    }, {
        name: "frontend",
        url: "#",
        icon: frontend
    },
]

const TopSection = () => {
    return (
        <div className=' flex flex-col-reverse sm:px-10  p-5  sm:flex-row justify-center '>
            <div className='flex flex-col justify-start z-50'>

                <h2 className='font-semibold sm:block hidden'>muzamil Karim</h2>
                <div className='xl:w-8/12 w-full '>
                    <img src={patternRings} alt="rings" className='h-[5rem] xl:h-[10rem] absolute -left-20 top-28 xl:-left-10 m-auto  xl:mt-10 ' />
                </div>
                <div className='my-10 sm:mt-40'>
                    <h1 className='font-bold text-3xl sm:text-7xl text-center sm:text-start'>Nice To meet You!</h1>
                    <h1 className='font-bold text-3xl sm:text-7xl text-center sm:text-start '>I'm <span className='!decoration-[#4EE1A0] underline-offset-[0.4rem] underline'>Muzamil Karim.</span> </h1>
                    <p className='my-10 text-normal text-[grey] sm:w-[60%] w-full text-center sm:text-start'>Based in India, I'm a front end Developer passionate about building accessible web apps that users love</p>
                </div>
                <a href='mailto:mozammilkarim@gmail.com' className='w-fit inline-block underline hover:text-[#4EE1A0]  decoration-[#4EE1A0]  underline-offset-[0.8rem] text-3xl m-auto sm:m-0 sm:text-start'>CONTACT ME</a>
            </div>
            <div style={{ backgroundImage: `url(${profileImg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'contain' }} className={"sm:relative md:mr-10 !mr-0 top-10 sm:right-10 sm:mt-5 md:mt-0  md:-top-5 h-[90vh]  w-[100%] m-auto sm:w-1/2 md:w-[30rem]  max-w-[130%] "}>
                <h2 className='font-semibold block sm:hidden text-center'>muzamil Karim</h2>

                <div className='flex xl:justify-end justify-center'>
                    {socials.map((social) => {
                        return (
                            <a href={social.url} key={social.name} className="flex justify-center items-center p-3">
                                <img src={social.icon} alt={social.name} />
                            </a>
                        )
                    })}
                </div>
                <div className='overflow-clip sm:overflow-auto relative sm:static'>

                <img src={patternCircle} alt="circleDesign" className='absolute  sm:right-0 top-[23rem] -right-[3rem] sm:bottom-7 sm:-left-16' />
                </div>
            </div>
        </div>
    )
}

export default TopSection