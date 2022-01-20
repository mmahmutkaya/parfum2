import React from 'react'
import Image from "next/image";


import { useContext } from 'react'
import FmpContext from "../context/FmpContext"

export default function Header() {

    const { counter, setCounter } = useContext(FmpContext);

    const handleClick = (gender) => {
        
    }
    return (
        <div id='Header' className='grid grid-cols-3 bg-indigo-300 min-h-fit'>

            <div className="relative bg-gray-300" onClick={() => handleClick({ gender: "man" })}>
                <Image
                    // className="object-contain"
                    layout='fill'
                    objectPosition="left"
                    objectFit='contain'
                    // width={5}
                    // height={5}
                    src={'/images/Lenovo_logo_2015.svg'} />
            </div>

            <div className="w-full"></div>

            <div className="relative bg-gray-300" onClick={() => handleClick({ gender: "man" })}>
                <Image
                    // className="object-contain"
                    layout='fill'
                    objectPosition="right"
                    objectFit='contain'
                    // width={5}
                    // height={5}
                    src={'/images/menu-hamburger.svg'} />
            </div>


        </div>
    )
}

