import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [hi, setHi] = useState(false);

  useEffect(() => {
    let textIndex = 0;

    const typingInterval = setInterval(() => {
      setHi(false);
      setIsVisible((prev) => !prev);
      if (textIndex <= text.length) {
        setDisplayText(text.slice(0, textIndex));
        if (textIndex === text.length) {
          setHi(true);
        }
        textIndex++;
      } else {
        textIndex = 0;
      }
    }, 300); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return (
    <>
      <span className="font-pixify">{displayText}</span>
      {hi && <span>👋 </span>}
      {isVisible && (
        <span className="font-mono text-black text-4xl text-opacity-75">|</span>
      )}
    </>
  );
};

export default TypingText;
