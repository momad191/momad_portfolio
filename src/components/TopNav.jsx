"use client";
import React from "react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800  text-white ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li className="flex items-center space-x-2">
                <Phone />
                <a href="tel:+966551203580" className="hover:text-gray-300">
                  +966551203580
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail />
                <a href="#" className="hover:text-gray-300">
                  faizbot@faizads.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/faizads1"
                  className="hover:text-gray-300"
                >
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/faizads-company-40b835259"
                  className="hover:text-gray-300"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
