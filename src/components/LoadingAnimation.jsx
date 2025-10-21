import React, { useEffect, useState } from "react";

export const LoadingAnimation = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Call onComplete after a short delay
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }
    }, 200); // typing speed

    // ✅ Cleanup when component unmounts
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-gray-100">
      <div className="text-4xl mb-4 font-mono font-bold">
        {text}
        <span className="blink-animate">|</span>
      </div>

      <div className="h-[2px] w-[200px] rounded relative bg-gray-500 overflow-hidden">
        <div className="h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
