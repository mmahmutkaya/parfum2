
const burclar = [
    "koc",
    "boga",
    "ikizler",
    "yengec",
    "aslan",
    "basak",
    "terazi",
    "akrep",
    "yay",
    "oglak",
    "kova",
    "balik",
]


const Horoscope = () => {

    const handleClick = ({horoscope}) => {
        console.log(horoscope)
    };

    return (
        <div id='Burclar' className="flex flex-col gap-3 items-center justify-center ">
            {burclar.map(burc =>
                <button key={burc} onClick={() => handleClick({horoscope:burc})} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{burc}</button>
            )}
        </div>
    )
}

export default Horoscope


