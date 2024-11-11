"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { creatContact } from "../../actions/contact";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+966)551203580",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "moemad191@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Riyadh king Fahad road 11454",
  },
];

import { motion } from "framer-motion";

const ContactUi = () => {
  const inputClassStyle =
    "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    // service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (
        formData.first_name === "" ||
        formData.last_name === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.message === ""
      ) {
        setError("Please complete all necessary information");
        setSuccess("");
      } else {
        await creatContact(formData);
        setSuccess("Thank you for sending the message");
        setError("");

        // // Clear form data after successful submission
        // setFormData({
        //   first_name: "",
        //   last_name: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        // });
      }
    } catch (e) {
      console.error(e);
      setError("Check your credentials");
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              {success !== "" && (
                <div className=" flex flex-col-2 gap-3 items-center justify-center bg-accent border border-white p-4 rounded-xl">
                  <FaCheckCircle className="text-5xl text-black/80 " />
                  <h4 className="text-black text-2xl font-bold ">{success}</h4>
                </div>
              )}
              {error !== "" && (
                <div className=" flex flex-col-2 gap-3 items-center justify-center bg-red-500 border border-white p-4 rounded-xl">
                  <FaCheckCircle className="text-5xl text-white/80 " />
                  <h4 className="text-white text-2xl font-bold ">{error}</h4>
                </div>
              )}

              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                ea.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  className={inputClassStyle}
                  type="text"
                  placeholder="first name"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  className={inputClassStyle}
                  type="text"
                  placeholder="last name"
                  name="last_name"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                <input
                  className={inputClassStyle}
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className={inputClassStyle}
                  type="text"
                  placeholder="phone"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Select */}
              <Select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <textarea
                className="h-[200px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="type your message here"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUi;
