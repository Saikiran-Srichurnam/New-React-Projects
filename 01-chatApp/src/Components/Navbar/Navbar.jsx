import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

function Navbar() {
    const navOptions = [{
        name: "Charts",
        logo: <IoChatbubbleEllipsesOutline />,
    },
    {
        name: "Calls",
        logo: <IoCallSharp />
    },
    {
        name: "Groups",
        logo: <MdGroup />
    },
    {
        name: "Archive",
        logo: <IoArchiveOutline />
    },
    {
        name: "Settings",
        logo: <MdOutlineSettings />
    }]
    return (

        <nav className='h-screen w-20 text-white px-12 py-20'>

            <div className='flex flex-col items-center gap-6 relative '>
                {navOptions.map((opt) => (
                    <button className='relative group hover:font-bold hover:text-green-200 cursor-pointer text-2xl'>{opt.logo}
                        <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
