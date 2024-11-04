"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section
        id="footer"
        className="bg-gray-900 text-white py-10 border-white border-t-4"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="footer-block">
              <h4 className="text-lg font-semibold">FaizBot</h4>
              <hr className="my-2 border-gray-600" />
              <p className="text-gray-400">
                Your 24/7 AI Support Assistant that helps you to grow your
                business.
              </p>
              <a
                href="/"
                className="text-blue-400 hover:text-blue-500 mt-2 inline-block"
              >
                Learn More <i className="fa fa-caret-right"></i>
              </a>
            </div>

            <div className="footer-block">
              <h4 className="text-lg font-semibold">Useful Links</h4>
              <hr className="my-2 border-gray-600" />
              <ul className="space-y-2">
                <li>
                  <a
                    href="/company/about"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/company/pricing"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/company/portfolio"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/company/contact"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-block">
              <h4 className="text-lg font-semibold">Use Cases</h4>
              <hr className="my-2 border-gray-600" />
              <ul className="space-y-2">
                <li>
                  <a
                    href="/usecasess/book-authors"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Book Authors
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/coaches"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Coaches
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/course-creators"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Course Creators
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/entrepreneurs"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Entrepreneurs
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/musicians"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Musicians
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/podcasters"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Podcasters
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/web3-enthusiasts"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Web 3.0 Enthusiasts
                  </a>
                </li>
                <li>
                  <a
                    href="/usecasess/jewelry-store-owners"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Jewelry Store Owners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="bottom-footer" className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="space-x-4">
              <a href="/company/privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="/company/terms" className="hover:text-gray-400">
                Terms of Use
              </a>
              <a href="/company/cookie-policy" className="hover:text-gray-400">
                Cookies Policy
              </a>
            </div>
            <div className="mt-2 sm:mt-0 text-gray-400">
              &copy; 2024 Faizbot. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
