import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypeWriter = () => {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const fullText1 = "Wear Confidence,";
  const fullText2 = "Define Your Style.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText1.length) {
        setDisplayText1(fullText1.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Start second line after a delay
        setTimeout(() => {
          let j = 0;
          const secondInterval = setInterval(() => {
            if (j < fullText2.length) {
              setDisplayText2(fullText2.substring(0, j + 1));
              j++;
            } else {
              clearInterval(secondInterval);
            }
          }, 100); // Typing speed for second line
        }, 500); // Delay between lines
      }
    }, 100); // Typing speed for first line

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-[2.5rem] md:text-6xl lg:text-7xl font-bold mb-4 md:mb-7 px-4 min-h-[6rem] md:min-h-[10rem]">
      <span className="relative bg-gradient-to-r from-white via-lime-400 to-lime-500 bg-clip-text text-transparent leading-tight">
        {displayText1}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="absolute -right-2 bottom-1 w-[2px] h-6 md:h-8 bg-lime-400"
        />
      </span>
      <br />
      <span className="relative bg-gradient-to-r from-lime-500 via-lime-400 to-white bg-clip-text text-transparent leading-tight">
        {displayText2}
        {displayText1 === fullText1 && displayText2.length > 0 && displayText2.length < fullText2.length && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="absolute -right-2 bottom-1 w-[2px] h-6 md:h-8 bg-lime-400"
          />
        )}
      </span>
    </h1>
  );
};

export default TypeWriter;