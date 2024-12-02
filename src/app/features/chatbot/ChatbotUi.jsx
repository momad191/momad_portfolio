"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import ChatbotAction from "./ChatbotAction";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");
      setLoading(true);

      try {
        const response = await ChatbotAction(input);
        setLoading(false);

        // Show typing effect by splitting response text
        let index = 0;
        const responseText = { sender: "bot", text: "" };
        const streamInterval = setInterval(() => {
          if (index < response.length) {
            responseText.text += response[index];
            setMessages((prevMessages) => [
              ...prevMessages.slice(0, -1),
              responseText,
            ]);
            index++;
          } else {
            clearInterval(streamInterval);
          }
        }, 50);

        setMessages((prevMessages) => [...prevMessages, responseText]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleEnterKey = (event) => {
    if (event.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chatbot Icon */}
      {!isOpen && (
        <button
          className="p-1 bg-accent text-white rounded-full shadow-lg transform transition-all duration-700 ease-in-out animate-bounce"
          onClick={toggleChatbot}
        >
          <Image
            src="/momad.jpg"
            width={80}
            height={80}
            alt="momad image"
            className="rounded-full"
          />
        </button>
      )}

      {/* Chatbot Popup */}
      {isOpen && (
        <div className=" w-80 h-[500px] bg-[#27272c] text-white rounded-lg shadow-lg flex flex-col transition-all duration-500">
          <header className="flex justify-between p-3 border-b border-black">
            <div className="flex flex-row items-center justify-start ">
              <Image
                src="/momad.jpg"
                width={40}
                height={40}
                alt="momad image"
                className="rounded-xl mr-3"
              />
              <h3 className="text-accent text-sm">Chat with momad AI</h3>
            </div>

            <button
              onClick={toggleChatbot}
              className="text-lg text-accent font-bold"
            >
              ✖
            </button>
          </header>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-scroll p-3 space-y-3 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-thumb-rounded hover:scrollbar-thumb-black">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center  ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <Image
                    src="/momad.jpg"
                    width={40}
                    height={40}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-2 max-w-xs rounded-md ${
                    msg.sender === "user"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && <FaUser width={40} height={40} />}
              </div>
            ))}

            {/* Loading Animation */}
            {loading && (
              <div className="flex justify-start items-center space-x-2">
                <Image
                  src="/momad.jpg"
                  width={40}
                  height={40}
                  alt="Bot Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex space-x-1">
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse"></div>
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse delay-75"></div>
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnterKey}
              className="flex-1 px-3 py-2 rounded-full text-black focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-1 w-10 h-10 bg-accent rounded-full flex items-center justify-center"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
