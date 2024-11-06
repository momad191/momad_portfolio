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
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-500 mt-2 inline-block"
              >
                Learn More <i className="fa fa-caret-right"></i>
              </Link>
            </div>

            <div className="footer-block">
              <h4 className="text-lg font-semibold">Useful Links</h4>
              <hr className="my-2 border-gray-600" />
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/company/about"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/pricing"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/portfolio"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/contact"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-block">
              <h4 className="text-lg font-semibold">Use Cases</h4>
              <hr className="my-2 border-gray-600" />
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/usecasess/book-authors"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Book Authors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/coaches"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/course-creators"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Course Creators
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/entrepreneurs"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/musicians"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Musicians
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/podcasters"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Podcasters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/web3-enthusiasts"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Web 3.0 Enthusiasts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usecasess/jewelry-store-owners"
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Jewelry Store Owners
                  </Link>
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
              <Link href="/company/privacy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="/company/terms" className="hover:text-gray-400">
                Terms of Use
              </Link>
              <Link
                href="/company/cookie-policy"
                className="hover:text-gray-400"
              >
                Cookies Policy
              </Link>
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
