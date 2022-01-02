import React from 'react'


import { useContext } from 'react'
import FmpContext from "../context/FmpContext"

export default function Header() {

    const { counter, setCounter } = useContext(FmpContext);

    // const handleClick = setUser("mahmut3")

    return (
        <div id='Header' className='bg-gray-500 text-gray-200 p-4 rounded-lg mb-3'>
            {counter}
            {/* <button onClick={() => console.log("console")} >değiştir</button> */}
            <button onClick={() => setCounter(counter +1)} >++</button>
        </div>
    )
}
