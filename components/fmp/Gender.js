import Image from "next/image";
import { useContext } from 'react'
import FmpContext from '../../context/FmpContext'

const woman = "/images/woman2.png"
// import man from "../../public/images/dog1.png";


const Gender = () => {

  const {
    setShowGender,
    setShowHoroscope
  } = useContext(FmpContext)

  const handleClick = ({ gender }) => {
    console.log(gender);
    setShowGender(false)
    setShowHoroscope(true)
  };

  return (
    <div
      id="Gender"
      className="max-w-screen-lg grid grid-cols-2 gap-20 justify-items-center "
    >
      <div onClick={() => handleClick({ gender: "man" })}>
        <Image
          className="transition ease-in-out hover:scale-105 hover:border-red-700 duration-500"
          width={300}
          height={500}
          src={'/images/man2.png'}
        />
      </div>

      <div onClick={() => handleClick({ gender: "woman" })}>
        <Image
          className="transition ease-in-out hover:scale-105 hover:border-red-700 duration-500"
          width={300}
          height={500}
          src={woman}
        />
      </div>


    </div>
  );
};

export default Gender;

{
  /* <div onClick={() => handleClick({ gender: "man" })} >
<Image className='transition ease-in-out hover:scale-110 hover:border-red-700 duration-1000' width={300} height={500} src={man}/>
</div> */
}
