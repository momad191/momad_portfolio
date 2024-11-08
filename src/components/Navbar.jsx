"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logout from "@/components/Logout";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setuserName] = useState([]);
  const [session, setsession] = useState([]);

  setuserName([]);
  setsession([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-cyan-950 border-t-8">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-all duration-300 ease-in-out">
          <Link href="/">
            <Image
              src="/robot-chat-menu.jpg"
              width={223}
              height={70}
              alt="cooker"
            />
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:static top-20 left-0 right-0 bg-white md:bg-transparent z-40 p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link href="/">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all duration-300 ease-in-out w-full md:w-auto">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link href="/features/translation">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all duration-300 ease-in-out w-full md:w-auto">
                Tranlation
              </button>
            </Link>
          </li>
          <li>
            <Link href="/features/chatbot">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all duration-300 ease-in-out w-full md:w-auto">
                Chatbot
              </button>
            </Link>
          </li>
          <li>
            <Link href="/features/assistants">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all duration-300 ease-in-out w-full md:w-auto">
                Assistants
              </button>
            </Link>
          </li>

          <li>
            <Link href="/company/about">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all duration-300 ease-in-out w-full md:w-auto">
                About
              </button>
            </Link>
          </li>

          {/* Logout button if logged in */}
          <li>{userName && <Logout />}</li>
        </ul>

        {/* Profile Picture */}
        {userName ? (
          <div className="flex items-center">
            <Link href="/">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={25}
                  height={25}
                  className="rounded-full w-10 h-10 border-2 border-cyan-500 hover:border-cyan-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <CircleUserRound />
              )}
            </Link>
          </div>
        ) : (
          <>
            <ul className="hidden md:flex space-x-6">
              <Link href="/login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
                  Sign up
                </button>
              </Link>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
