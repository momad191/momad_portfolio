import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our <span className="text-green-500">Features</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            YOUR 24/7 AI SUPPORT ASSISTANT THAT HELPS YOU GROW YOUR BUSINESS.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group perspective cursor-pointer">
              <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg front">
                  <i className="fa fa-clock-o text-green-500 text-6xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">
                    3X FASTER RESPONSE
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-500 text-white shadow-lg p-8 rounded-lg transform rotate-y-180 back">
                  <h3 className="text-xl font-semibold">3X FASTER RESPONSE</h3>
                  <p className="mt-2">
                    Our chatbot responds 3x faster than a human.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group perspective cursor-pointer">
              <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg front">
                  <i className="fa fa-file-text text-green-500 text-6xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">
                    100% ACCURACY
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-500 text-white shadow-lg p-8 rounded-lg transform rotate-y-180 back">
                  <h3 className="text-xl font-semibold">100% ACCURACY</h3>
                  <p className="mt-2">
                    Our chatbot has 100% accuracy in answering questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group perspective cursor-pointer">
              <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg front">
                  <i className="fa fa-weixin text-green-500 text-6xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">
                    24/7 SUPPORT ASSISTANT
                  </h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-500 text-white shadow-lg p-8 rounded-lg transform rotate-y-180 back">
                  <h3 className="text-xl font-semibold">
                    24/7 SUPPORT ASSISTANT
                  </h3>
                  <p className="mt-2">
                    The chatbot is available 24/7 for your clients, ensuring
                    constant support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Text Section */}
            <div className="flex items-center justify-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  We really love what we do & our work on every project truly
                  reflects that.
                </h3>
                <hr className="border-t-2 border-green-500 w-16 mx-auto mt-4" />
              </div>
            </div>

            {/* Center Features */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 shadow-lg rounded-lg hover:bg-green-50 transition duration-200">
                <i className="fa fa-cloud-download text-green-500 text-4xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    EASILY IMPORT YOUR DATA
                  </h4>
                  <p className="text-gray-600">
                    We need only 3 minutes to import your data.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 shadow-lg rounded-lg hover:bg-green-50 transition duration-200">
                <i className="fa fa-cog text-green-500 text-4xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    TRAIN ADVANCED GPT
                  </h4>
                  <p className="text-gray-600">
                    Our chatbots are based on the most advanced AI and NLP
                    technologies available.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              {/* Feature 3 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 shadow-lg rounded-lg hover:bg-green-50 transition duration-200">
                <i className="fa fa-magic text-green-500 text-4xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    CUSTOMIZE AND MATCH YOUR BRAND
                  </h4>
                  <p className="text-gray-600">
                    A branded chatbot can set your customer service apart from
                    competitors.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 shadow-lg rounded-lg hover:bg-green-50 transition duration-200">
                <i className="fa fa-code text-green-500 text-4xl"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    ADD IT TO YOUR WEBSITE
                  </h4>
                  <p className="text-gray-600">
                    With just a few clicks, your chatbot is ready—no coding
                    skills required!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-500">Plans</span>
          </h1>
          <p className="text-lg text-gray-600">
            Pick the plan that best fits your business needs. You can start with
            a free plan and upgrade to premium as you grow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-green-500">Pro</h3>
              <div className="text-4xl font-bold text-gray-800 mt-2">
                $29.00
              </div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
            <p className="text-gray-500 mb-6">What's included:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>
                <strong>2</strong> Chatbots
              </li>
              <li>
                <strong>50</strong> Training Links
              </li>
              <li>
                <strong>10,000,000</strong> Chars/Chatbot
              </li>
              <li>
                <strong>4,000</strong> Messages
              </li>
              <li>
                Up to <strong>100</strong> Lead Generation
              </li>
              <li>
                <strong>20</strong> Files Upload
              </li>
              <li>Multiple Language Support</li>
              <li>Remove Branding</li>
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
            >
              Buy Now
            </a>
          </div>

          {/* Business Plan */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border-4 border-green-500">
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              Best Value
            </div>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-green-500">
                Business
              </h3>
              <div className="text-4xl font-bold text-gray-800 mt-2">
                $99.00
              </div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
            <p className="text-gray-500 mb-6">What's included:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>
                <strong>10</strong> Chatbots
              </li>
              <li>
                <strong>500</strong> Training Links
              </li>
              <li>
                <strong>10,000,000</strong> Chars/Chatbot
              </li>
              <li>
                <strong>10,000</strong> Messages
              </li>
              <li>
                Up to <strong>500</strong> Lead Generation
              </li>
              <li>
                <strong>100</strong> Files Upload
              </li>
              <li>Multiple Language Support</li>
              <li>Remove Branding</li>
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
            >
              Buy Now
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-green-500">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-gray-800 mt-2">
                $999.00
              </div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
            <p className="text-gray-500 mb-6">What's included:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Unlimited</strong> Chatbots
              </li>
              <li>
                <strong>Unlimited</strong> Training Links
              </li>
              <li>
                <strong>10,000,000</strong> Chars/Chatbot
              </li>
              <li>
                <strong>100,000</strong> Messages
              </li>
              <li>Unlimited Lead Generation</li>
              <li>Unlimited Files Upload</li>
              <li>Multiple Language Support</li>
              <li>Remove Branding</li>
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Try Free Demo */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-center lg:text-left transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                <span className="text-green-500">Try Free</span> Demo
              </h1>
              <p className="text-gray-600 mb-6">
                Test your chatbot without any commitment. No credit card
                required. After 7 days of inactivity, the chat will be disabled.
              </p>
              <a
                href="#"
                className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition-colors"
              >
                GET STARTED
              </a>
            </div>

            {/* Right Section - What's Included */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                What's Included
              </h1>
              <div className="space-y-6">
                {/* Feature Block */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      1 Chatbot
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      5 Training Links
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      100,000 Chars/Chatbot
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      40 Messages
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Up to 5 Lead Generation
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      20 Files Upload
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Remove Brand - Add-on
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      English Language Only
                    </h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet sit legimus copiosae
                      instructior fierentis ea saperet inimicu ut qui dolor
                      oratio mnesarchum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
