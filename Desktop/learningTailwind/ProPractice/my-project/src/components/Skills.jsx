import React from 'react'
import HorizontalLine from './HorizontalLine'
import patternRings from "../assets/images/pattern-rings.svg"

const skillArr = [
    {
        name: "HTML",
        experience: "4 Years Experience"
    },
    {
        name: "CSS",
        experience: "4 Years Experience"
    }, {
        name: "JAVASCRIPT",
        experience: "4 Years Experience"
    }, {
        name: "Accessibility",
        experience: "4 Years Experience"
    },
    {
        name: "React",
        experience: "3 Years Experience"
    }, {
        name: "Sass",
        experience: "3 Years Experience"
    }
]
const Skills = () => {
    return (
        <div className='flex flex-col px-10 xl:px-0 xl:w-[80vw] w-[95vw]  justify-center items-center m-auto'>
            <HorizontalLine className={"mt-10 "} />
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-full' >
                {skillArr.map((skill) => {
                    return (
                        <div className='flex flex-col justify-start items-start p-10 pl-0'>
                            <h1 className='text-white font-bold text-3xl'>{skill.name}</h1>
                            <span className='mt-3 text-[grey]'>{skill.experience}</span>
                        </div>
                    )
                })}
            </div>
            <div className='overflow-clip '>
                <img src={patternRings} alt="rings" className=' h-[5rem]  md:h-[5rem] relative  bottom-28 left-[150%] ' />

            </div>
        </div>
    )
}

export default Skills