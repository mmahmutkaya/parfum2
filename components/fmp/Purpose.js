

const array = [
    "casual",
    "special_night",
    "sport",
    "summmer",
]

const handleClick = () => console.log("handleClick")

const Purpose = () => {

    return (
        <div id='Purpose' className="flex flex-col gap-3 items-center justify-center ">
            {array.map(item =>
                <button key={item} onClick={handleClick} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{item}</button>
            )}
        </div>
    )
}

export default Purpose


