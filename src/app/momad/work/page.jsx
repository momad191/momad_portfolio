"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fron-end",
    title: "project1",
    description:
      "fron-end design for Ruknan for public Relations building the website with HTML, CSS, and JavaScript(JQuery Library),This is the company's main website and shows key information about the company and contact information.",
    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/project1.png",
    live: "https://ruknan.com.sa",
    github: "https://github.com/momad191/ruknan-website",
  },

  {
    num: "02",
    category: "fullstack",
    title: "project2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quo quibusdam, distinctio officia in enim!",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/project1.png",
    live: "/",
    github: "/",
  },

  {
    num: "03",
    category: "front-end",
    title: "project3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quo quibusdam, distinctio officia in enim!",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/project3.png",
    live: "/",
    github: "/",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project4",
    description:
      "this project for faizbot website, website for chatbots design and development ",
    stack: [
      { name: "Python" },
      { name: "Langchain" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
    ],
    image: "/project4.png",
    live: "https://www.faizads.com/",
    github: "https://github.com/momad191/chatbot-buisness-Arabic",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handelSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {/* remove the last comma  */}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live projec</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mt-12"
              onSlideChange={handelSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className=" w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-scale-down"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:m-max xl:justify-none"
                BtnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
