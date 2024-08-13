import p1 from "./projectpic/pr1.png";
import p2 from "./projectpic/drone.jpg";
import p3 from "./projectpic/ironman.jpg";
import p4 from "./projectpic/globe-3984876_1920.jpg";
import p5 from "./projectpic/mars-67522.jpg";
import p6 from "./projectpic/aircraft-63032.jpg";
import "./App.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Texture from "./Texture";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { setupHoverEffect } from "./HoverCard3D";

const ThirdPage = () => {
  const updown = useAnimation();
  const du = useAnimation();
  const ud = useAnimation();
  const lefttoright = useAnimation();
  const righttoleft = useAnimation();


  const isDesktop = window.innerWidth >= 768;

  const handleScroll = () => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });

    ud.start({
      y: [-50, 50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });
  };

  useEffect(() => {
   
      setupHoverEffect(".card3d");
      
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;
  

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    ud.start({
      y: [-50, 50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 2,
      },
    });

    lefttoright.start({
      x: [-100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    righttoleft.start({
      x: [100, 0],
      transition: { ease: "easeInOut", yoyo: Infinity, duration: 2 },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [updown]);

  const cardsData = [
    { img: p1, title: "Car-X", link: "https://www.instagram.com/the_coder_boy__" },
    { img: p2, title: "Drone-X", link: "https://www.instagram.com/the_coder_boy__" },
    { img: p3, title: "Iron-X", link: "https://www.instagram.com/the_coder_boy__" },
    { img: p4, title: "Jet-X", link: "https://www.instagram.com/the_coder_boy__" },
    { img: p5, title: "Mars-X", link: "https://www.instagram.com/the_coder_boy__" },
    { img: p6, title: "Plane-X", link: "https://www.instagram.com/the_coder_boy__" },
  ];

  

  return (
    <div className="relative py-20 bg-custom">
       {
      isDesktop &&  <div className=" absolute w-[100%] h-[100%] opacity-10">
      <Texture />
    </div>
     }

      <div>
        <div>
          <motion.h1 animate={lefttoright} className="md:text-5xl text-yellow-500 text-3xl font-bold ml-4 md:ml-[10%]">
            Portfolio
          </motion.h1>
        </div>
        <motion.div
          animate={righttoleft}
          className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"
        ></motion.div>
      </div>

      <div className="mx-auto md:mx-0 mt-10 md:mt-28 gap-16 flex flex-wrap justify-center items-center">
        {cardsData.map((card, index) => (
          isDesktop ? (
            <a
              key={index}
              href={card.link}
              target="__blank"
              className="card3d hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center group"
            >
              <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
                <img className="w-full h-full object-cover group-hover:opacity-30" src={card.img} alt={card.title} />
              </div>
              <div 
                className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
                <motion.div animate={ud} className="text-2xl font-mono font-bold">
                  {card.title}
                </motion.div>
                <motion.div animate={ud} className="mt-3 font-mono font-semibold text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt repellat natus deserunt beatae ipsum est
                  pariatur nam voluptatem dignissimos explicabo mollitia repellendus a odio, eligendi minima? Vitae, reiciendis nulla.
                </motion.div>
                
              </div>
            </a>
          ) : (
            <div
              key={index}
              className=" hover:border hover:border-yellow-600 uppermorphic relative bg-[#4d4c4c] w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center group"
            >
              <div className="rounded-lg w-[350px] h-[410px] md:w-[450px] md:h-[400px]">
                <img className="w-full h-full object-cover group-hover:opacity-30" src={card.img} alt={card.title} />
              </div>
              <div 
                className="opacity-0 group-hover:opacity-100 p-4 absolute w-[350px] h-[410px] md:w-[450px] md:h-[400px] flex flex-col justify-center items-center">
                <motion.div animate={ud} className="text-2xl font-mono font-bold">
                  {card.title}
                </motion.div>
                <motion.div animate={ud} className="mt-3 font-mono font-semibold text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt repellat natus deserunt beatae ipsum est
                  pariatur nam voluptatem dignissimos explicabo mollitia repellendus a odio, eligendi minima? Vitae, reiciendis nulla.
                </motion.div>
                <motion.div
                  animate={ud}
                  className="bg-black  text-white mt-4 text-2xl h-12 w-[100px] flex justify-center items-center rounded-lg"
                >
                  <a target="__blank" href={card.link}>
                    <FaExternalLinkAlt />
                  </a>
                </motion.div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
