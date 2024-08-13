import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import "./App.css"
import Texture from "./Texture";

const FourthPage = () => {

  const isDesktop = window.innerWidth >= 768;
  
  return (
    <div className="mt-20 md:h-screen h-screen">
      <div className=" bg-custom">
      {
      isDesktop &&  <div className=" absolute w-[100%] h-[100%] opacity-10">
      <Texture />
    </div>
     }

      </div>

      {/* contact page design */}

      <div className="mt-14 md:mt-36 bg-custom flex flex-col md:flex-row justify-center items-center py-40 pt-0 md:gap-14">

        <div className="border border-gray-500 p-4 rounded-lg md:w-[600px] w-[400px] md:mt-10 mb-8  flex flex-col">
          <div className="text-4xl text-yellow-500 font-bold">why choose me</div>

          <div className=" mt-10 text-2xl text-yellow-100 font-bold">With 5 years of experience in graphic design, I offer innovative solutions that are both visually appealing and strategically effective. My commitment to quality and client satisfaction ensures that every project I undertake is a step towards enhancing your brand’s identity.</div>
        </div>

        <div className="md:flex flex-col justify-center items-center gap-6 ">

          <div className="border  border-yellow-600  contact bg-[#373737] w-[350px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-white   flex justify-center items-center  ">
              <MdOutlineMailOutline />
              <div className="text-xl md:text-4xl ml-3 text-yellow-700">
              sohaimahansar@gmail.com
              </div>
            </div>
          </div>

          <div className="border  border-yellow-600 contact mt-6 md:mt-10 bg-[#373737] w-[350px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-white  flex justify-center items-center  ">
              <IoCallOutline />
              <div className="text-2xl md:text-4xl ml-3 text-yellow-700">
              03151087671
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FourthPage;
