import React, { useEffect } from "react";
import { motion } from "framer-motion";

const headingStyles = {
  maxWidth: "75%",
  color: "#FFF",
};

const fontStyleFocus = {};

const fontStyleNormal = {};

const heroContents = [
  {
    intro: "Hi there,",
    name: "Xuan Hao",
    outro: " here",
    description: "Table Tennis Player, Climber, Skater, Software Engineer,",
  },
  {
    intro: "Hi there 2,",
    name: "Xuan Hao",
    outro: " here.",
    description: "Table Tennis Player, Climber, Skater, Software Engineer,",
  },
];

const LandingPage: React.FC = () => {
  const [heroContentIdx, setHeroContentIdx] = React.useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      const nextIdx = (heroContentIdx + 1) % heroContents.length;
      setHeroContentIdx(nextIdx);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroContentIdx]);
  return (
    <div>
      <motion.div
        style={headingStyles}
        key={heroContentIdx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={heroContentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={fontStyleNormal}
        >
          {heroContents[heroContentIdx].intro}{" "}
          <motion.span
            key={heroContentIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={fontStyleFocus}
          >
            {heroContents[heroContentIdx].name}
          </motion.span>{" "}
          {heroContents[heroContentIdx].outro}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default LandingPage;
