"use client";
import React from "react";

import Image from "next/image";

const AssistantsUi = () => {
  return (
    <div className="bg-sky-100 flex items-center justify-center min-h-screen space-x-5">
      <button className="p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-blue-300">
        <Image src="/cooker.png" width={100} height={100} alt="cooker" />
      </button>
      <button className="p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-blue-300">
        <Image src="/sporty.png" width={100} height={100} alt="sporty" />
      </button>
      <button className="p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-blue-300">
        <Image src="/cooker.png" width={100} height={100} alt="cooker" />
      </button>
    </div>
  );
};

export default AssistantsUi;
