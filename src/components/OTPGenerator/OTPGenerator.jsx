import { useState, useRef } from "react";

const OTPGenerator = () => {
  const [num, setNum] = useState(0);
  const inputRef = useRef(null);

  const generate = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setNum(otp);
  };

  const copyText = async () => {
    try {
      if (inputRef.current) {
        // Use navigator.clipboard.writeText to copy text to clipboard
        await navigator.clipboard.writeText(num);

        // Display a message (optional)
        alert("Text copied to clipboard: " + num);
      }
    } catch (error) {
      console.error("Unable to copy text to clipboard:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-4xl text-red-700">OTP Generator</h1>
      </div>
      <div className="mt-9">
        <button
          className="bg-green-800 px-3 py-3 rounded-full border-1 hover:border-t-4"
          onClick={generate}
        >
          Generator
        </button>
      </div>
      <div className="mt-9">
        <input
          className="bg-slate-400 text-gray-800 hover:text-blue-600 text-center"
          ref={inputRef}
          type="text"
          disabled
          value={num ? num : ""}
        />
        <button
          onClick={copyText}
          className="px-2 bg-orange-600 rounded-full border-1 hover:border-t-4"
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default OTPGenerator;
