"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about Data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem rerum doloribus assumenda dolore quaerat et, blanditiis quisquam illum nam itaque nemo veniam facilis consequuntur earum magnam voluptates molestias labore",
  info: [
    {
      fieldName: "name",
      fieldValue: "Mohammed Emad",
    },
    {
      fieldName: "Phone",
      fieldValue: "+966551203580",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Momad191",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sudanese",
    },
    {
      fieldName: "Email",
      fieldValue: "moemad191@gmail.com",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Arabic,Spanish",
    },
  ],
};

// Experiences Data
const experience = {
  icon: "/sporty.png",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem rerum doloribus assumenda dolore quaerat et, blanditiis quisquam illum nam itaque nemo veniam facilis consequuntur earum magnam voluptates molestias labore",

  items: [
    {
      company: "Faizads",
      position: "Generative AI Software Engineer",
      duration: "from 2022 - now",
    },

    {
      company: "Ruknan for public relations",
      position: "Full Stack  Developer",
      duration: "from 2014 - now",
    },
    {
      company: "Ecommerce startup ",
      position: " freelance web Developer",
      duration: "from 2014 - now",
    },
    {
      company: "Digital Agency ",
      position: " UI/UX Designer",
      duration: "from 2014 - now",
    },
    {
      company: "AlMehwer Travel Agency ",
      position: " freelance front-end Developer",
      duration: "from 2014 - now",
    },
    {
      company: "ANO Consultancy Realestate company ",
      position: "freelance web Developer",
      duration: "from 2014 - now",
    },
    {
      company: "unisco  Fedration club  ",
      position: "programming language tutor",
      duration: "from 2014 - now",
    },
  ],
};

// education  Data
const education = {
  icon: "/sporty.png",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem rerum doloribus assumenda dolore quaerat et, blanditiis quisquam illum nam itaque nemo veniam facilis consequuntur earum magnam voluptates molestias labore",

  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Develpment",
      duration: "2023",
    },
    {
      institution: "Code academy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Code Online Course",
      degree: "Code Course",
      duration: "2022 - 2021",
    },
    {
      institution: "Tech institute ",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Community College ",
      degree: "Bachelor Degree in Computer Sciences",
      duration: "2008 - 2013",
    },
  ],
};

//Skills Data

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem rerum doloribus assumenda dolore quaerat et, blanditiis quisquam illum nam itaque nemo veniam facilis consequuntur earum magnam voluptates molestias labore",

  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailWind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from "../../../components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

import { ScrollArea } from "../../../components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
