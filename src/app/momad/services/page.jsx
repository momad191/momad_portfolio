"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "full Stack Web develpment",
    description:
      "I offer professional full stack web development services utilizing the MERN stack (MongoDB, Express.js, React, and Node.js) to create efficient, scalable, and robust web applications tailored to your needs. My expertise ensures that each component of your web solution is optimally designed and seamlessly integrated",
    href: "/",
  },
  {
    num: "02",
    title: "Generative AI applications",
    description: `I offer a range of services for Generative AI applications using the LangChain framework, including: Building Retrieval-Augmented Generation (RAG) applications.
    Developing conversational RAG applications.
    Creating question/answering systems over SQL data.
    Constructing query analysis systems.
    Developing local RAG applications.
    Implementing question answering over graph databases.
    Building PDF ingestion and question/answering systems.`,

    href: "/",
  },
  {
    num: "03",
    title: "Front-End Development (React)",
    description: `Responsive UI/UX: Crafting intuitive and responsive user interfaces that work seamlessly across all devices, providing a great experience for your users.
      Custom Components: Building dynamic, reusable React components to enhance maintainability and efficiency.
      State Management: Using tools like Redux and Context API to manage application state effectively for better performance and interactivity.
      Animations & Transitions: Incorporating visually appealing animations to enrich user experience.`,
    href: "/",
  },

  {
    num: "04",
    title: "SEO",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    href: "/",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className=" flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                  transition-all duration-500
                  "
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {" "}
                  {service.title}
                </h2>
                <p className="text-white/60 min-h-[300px]">
                  {service.description}
                </p>
                <div className="border-b border-white/20  w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
