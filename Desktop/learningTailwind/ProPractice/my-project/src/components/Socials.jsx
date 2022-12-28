import React from 'react'
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
const Socials = () => {
    return (
        <div className='flex xl:justify-end justify-center'>
            {socials.map((social) => {
                return (
                    <a href={social.url} key={social.name} className="flex justify-center items-center p-3">
                        <img src={social.icon} alt={social.name} />
                    </a>
                )
            })}
        </div>
    )
}

export default Socials