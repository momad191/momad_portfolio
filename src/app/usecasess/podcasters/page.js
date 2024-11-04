import React from "react";

const page = () => {
  return (
    <div className="bg-sky-100 flex items-center justify-center min-h-screen mt-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <section className="bg-gradient-to-b from-indigo-800 to-indigo-900 text-white py-12 px-4 lg:px-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-6">
            Boost Listener Engagement and Podcast Subscriptions with Faizbot
            Intelligent AI
          </h1>
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
            Faizbot is your 24/7 AI-powered assistant, designed to help
            podcasters engage with listeners, answer inquiries, and drive
            podcast subscriptions effortlessly.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            What is Faizbot?
          </h2>
          <p className="text-gray-200 mb-8">
            In the competitive world of podcasting, connecting with listeners
            and promoting episodes can be challenging. Faizbot, an AI-powered
            chatbot, seamlessly manages listener interactions, providing
            exceptional support to guide your audience and encourage podcast
            subscriptions with relevant links.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            Key Features of Faizbot
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-medium text-yellow-300 mb-2">
                1. 24/7 Listener Support
              </h3>
              <p className="text-gray-200">
                Imagine being able to respond to listener questions anytime, day
                or night. With Faizbot, this becomes a reality, offering 24/7
                support for inquiries about your latest episode, upcoming shows,
                or merchandise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-yellow-300 mb-2">
                2. No-Code Chatbot Setup
              </h3>
              <p className="text-gray-200 mb-3">
                Setting up Faizbot is easy and requires no coding skills. Just
                follow these three simple steps to make it live:
              </p>
              <ul className="list-decimal list-inside space-y-2 pl-6 text-gray-300">
                <li>Step 1: Add your website link or files.</li>
                <li>Step 2: Train Faizbot on your podcast content.</li>
                <li>Step 3: Deploy it on your site.</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                For more guidance, check out our Getting Started Tutorials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-yellow-300 mb-2">
                3. Adaptable AI for Podcasters
              </h3>
              <p className="text-gray-200">
                Faizbot adapts to the unique needs of podcasters. Train it with
                episode descriptions, transcripts, and links to provide
                accurate, relevant responses, making it an ideal tool for
                listener queries and directing subscribers to your content.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-yellow-300 mb-2">
                4. Cost Efficiency
              </h3>
              <p className="text-gray-200">
                Managing listener inquiries can be costly. Faizbot reduces
                support costs by up to 50%, enabling you to focus on creating
                content while it handles multiple listener interactions
                efficiently.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
