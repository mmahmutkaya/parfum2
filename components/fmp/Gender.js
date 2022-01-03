import Image from "next/image";

const woman = "/images/woman2.png"
// import man from "../../public/images/dog1.png";


const Gender = () => {
  const handleClick = ({ gender }) => {
    console.log(gender);
  };

  return (
    <div
      id="Gender"
      className="max-w-screen-lg grid grid-cols-2 gap-20 justify-items-center "
    >
      <div onClick={() => handleClick({ gender: "man" })}>
        <Image
          className="transition ease-in-out hover:scale-110 hover:border-red-700 duration-1000"
          width={300}
          height={500}
          src={'/images/man2.png'}
        />
      </div>

      <div onClick={() => handleClick({ gender: "man" })}>
        <Image
          className="transition ease-in-out hover:scale-110 hover:border-red-700 duration-1000"
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
