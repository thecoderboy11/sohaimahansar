import { motion, useAnimation } from "framer-motion";

import "./App.css";
import React, { useEffect } from "react";
import Texture from "./Texture";

const SecondPage = () => {
  const updown = useAnimation();
  const du = useAnimation();
  const ud = useAnimation();
  const lefttoright = useAnimation();
  const righttoleft = useAnimation();
  const bounce = useAnimation();
  const bouncerev = useAnimation();

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
        repeatType: "loop",
      },
    });

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lefttoright]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    ud.start({
      y: [-50, 0], // Up to Down
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
      },
    });

    du.start({
      y: [50, 0], // Down to Up
      transition: {
        ease: "easeInOut",
        yoyo: Infinity,
        duration: 1,
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

    bounce.start({
      y: [0, -100, 0, -80, 0, -60, 0, -40, 0, -20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    bouncerev.start({
      y: [0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0],
      transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
    });

    updown.start({
      y: [0, 50, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [updown]);

  const isDesktop = window.innerWidth >= 768;

  const service = [
    'Logo design',
    'poster design',
    'business card',
    'brochure',
    'banners',
    'menu design',
    'wedding cards',
    'magazine design',
    'book covers',
    'instagram highlight covers',
    'background removal',
    'social media gaphics',
    'infographic'
  ]

  return (
    <div className="relative px-10 md:px-32 py-20 bg-custom">
      {isDesktop && (
        <div className=" absolute w-[100%] h-[100%] opacity-10">
          <Texture />
        </div>
      )}

      <>
        <div>
          <motion.h1
            animate={lefttoright}
            className="md:text-5xl text-3xl text-yellow-500 font-bold ml-4 md:ml-[10%]"
          >
            Services
          </motion.h1>

          <motion.div
            animate={righttoleft}
            className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[22%] mt-2 bg-[#bab6b6]"
          ></motion.div>
        </div>

        {/* services  cards */}
        <div className="  mt-10 flex flex-wrap justify-center items-center gap-8">
          {service.map((s, index) => (
            <div
              key={index}
              className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 bg-neutral-800 rounded-xl"
            >
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
              <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
              <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
              <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center items-center">
                <span className="text-neutral-50 font-bold text-xl italic"></span>
                <p className="text-white font-bold text-2xl">
                  {s}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default SecondPage;
