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
        <div className=' flex-wrap-reverse flex flex-col-reverse   p-5  xl:flex-row justify-center '>
            <div className='flex flex-col justify-start z-50'>

                <h2 className='font-semibold'>muzamil Karim</h2>
                <div className='xl:w-8/12 w-full '>
                    <img src={patternRings} alt="rings" className='h-[5rem] xl:h-[10rem] xl:absolute -left-10 m-auto  xl:mt-10 ' />
                </div>
                <div className='my-10 mt-40'>
                    <h1 className='font-bold text-7xl'>Nice To meet You!</h1>
                    <h1 className='font-bold text-7xl '>I'm <span className='!decoration-[#4EE1A0] underline-offset-[0.4rem] underline'>Muzamil Karim.</span> </h1>
                    <p className='my-10 text-normal text-[grey] w-[60%]'>Based in India, I'm a front end Developer passionate about building accessible web apps that users love</p>
                </div>
                <a href='mailto:mozammilkarim@gmail.com' className='w-fit inline-block underline hover:text-[#4EE1A0]  decoration-[#4EE1A0]  underline-offset-[0.8rem]'>CONTACT ME</a>
            </div>
            <div style={{ backgroundImage: `url(${profileImg})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'contain' }} className={"relative md:mr-10 !mr-0 top-10 right-10 mt-5 md:mt-0  md:-top-5 h-[90vh]  w-1/2 md:w-[30rem]  max-w-[130%] "}>
                <div className='flex justify-end'>
                    {socials.map((social) => {
                        return (
                            <a href={social.url} key={social.name} className="flex justify-center items-center p-3">
                                <img src={social.icon} alt={social.name} />
                            </a>
                        )
                    })}
                </div>
                <img src={patternCircle} alt="circleDesign" className='md:absolute relative left-[70%] top-[60%] md:bottom-7 md:-left-16' />
            </div>
        </div>
    )
}

export default TopSection