import Image from 'next/image'


import woman from "../../public/images/woman2.png"
import man from "../../public/images/man2.png"


const Gender = () => {

    const handleClick = ({ gender }) => {
        console.log(gender)
    };

    return (
        <div id='Gender' className="max-w-screen-lg grid grid-cols-2 gap-20 justify-items-center ">
            <div onClick={() => handleClick({ gender: "woman" })} >
                <Image alt="woman" className='transition ease-in-out hover:scale-110 hover:border-red-700 duration-1000' width={300} height={500} src={woman} />
            </div>
            <div onClick={() => handleClick({ gender: "man" })} >
                <Image alt="man" className='transition ease-in-out hover:scale-110 hover:border-red-700 duration-1000' width={300} height={500} src={man} />
            </div>
        </div>
    )
}

export default Gender




// const Gender = () => {

//     const handleClick = ({ gender }) => {
//         console.log(gender)
//     };

//     return (
//         <div id='Gender' className="max-w-screen-lg grid grid-cols-2 gap-20 justify-items-center ">
//             <div >
//                 <button onClick={() => handleClick({ gender: "woman" })} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{"woman"}</button>
//             </div>
//             <div >
//                 <button onClick={() => handleClick({ gender: "man" })} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{"man"}</button>
//             </div>
//         </div>
//     )
// }

// export default Gender