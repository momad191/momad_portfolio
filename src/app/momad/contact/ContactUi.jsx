"use client";

import React, { useState } from "react";
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
import { motion } from "framer-motion";

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

const ContactUi = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const validateForm = () => {
    const { first_name, last_name, email, phone, service, message } = formData;

    if (!first_name || !last_name || !email || !phone || !service || !message) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^\d{8,15}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must contain only digits and be 8-15 characters long.";
    }

    if (message.length < 10) {
      return "Message must be at least 10 characters long.";
    }

    return null; // No errors
  };

  async function onSubmit(event) {
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setLoading(true); // Start loading
    try {
      await creatContact(formData);
      setSuccess("Message sent successfully!");
      setError("");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (e) {
      console.error(e);
      setError("An error occurred. Please try again.");
      setSuccess("");
    } finally {
      setLoading(false); // End loading
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
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div
              className={`relative ${
                loading ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                  <div className="text-white text-xl">Loading...</div>
                </div>
              )}

              {success ? (
                <div className="flex flex-col-2 gap-3 items-center justify-center bg-accent border border-white p-4 rounded-xl">
                  <FaCheckCircle className="text-5xl text-black/80 " />
                  <h4 className="text-black text-2xl font-bold">{success}</h4>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                >
                  {error && (
                    <div className="flex flex-col-2 gap-3 items-center justify-center bg-red-500 border border-white p-4 rounded-xl">
                      <FaCheckCircle className="text-5xl text-white/80 " />
                      <h4 className="text-white text-2xl font-bold">{error}</h4>
                    </div>
                  )}

                  <h3 className="text-4xl text-accent">Let’s work together</h3>
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo, ea.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                      type="text"
                      placeholder="First name"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                    <input
                      className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                      type="text"
                      placeholder="Last name"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    <input
                      className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <Select
                    name="service"
                    id="service"
                    value={formData.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="logo">Logo Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <textarea
                    cols={30}
                    rows={60}
                    className="flex h-[250px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                    placeholder="Type your message here"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    size="md"
                    className="max-w-60 bg-accent hover:bg-green-200 rounded-xl p-10 text-xl text-black font-semibold"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="font-primary text-white/80">{item.title}</div>
                  <div className="font-primary font-bold text-white">
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUi;
