import React from 'react'
import project1 from "../assets/images/thumbnail-project-1-large.webp";
const Projects = () => {
    return (
        <div className='flex flex-col  px-10 xl:px-0 xl:w-[80%] w-[95%] sm:m-auto m-0 sm:mt-36'>
            <div className='w-full mb-20  flex justify-between items-center'>
                <h1 className='font-bold text-6xl'>Projects</h1>
                <div>
                    <a href='mailto:mozammilkarim@gmail.com' className='w-fit inline-block underline hover:text-[#4EE1A0]  decoration-[#4EE1A0]  underline-offset-[0.8rem] text-3xl m-auto sm:m-0 sm:text-start'>CONTACT ME</a>
                </div>
            </div>
            <div className='grid grid-cols-3 mb-10'>
                <div className='flex flex-col relative hover:opacity-75'>

                    <img src={project1} alt="project1" className='' />
                    {/* style={{ backgroundImage: `url(${project1})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'contain' }} */}
                    <div className='absolute top-10 m-auto ' >
                        <a href='mailto:mozammilkarim@gmail.com' className='w-fit inline-block underline hover:text-[#4EE1A0]  decoration-[#4EE1A0]  underline-offset-[0.8rem] text-base m-auto sm:m-0 sm:text-start'>VIEW PROJECT</a>
                        <a href='mailto:mozammilkarim@gmail.com' className='mt-10  w-fit inline-block underline hover:text-[#4EE1A0]  decoration-[#4EE1A0]  underline-offset-[0.8rem] text-base m-auto sm:m-0 sm:text-start'>VIEW CODE</a>

                    </div>
                    <h2 className='font-bold text-2xl my-3'>DESIGN PORTFOLIO</h2>
                    <div className='flex gap-3 text-[#D9D9D9] text-lg'>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects