import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageStyles = {
  margin: "0 auto",
  textAlign: "center",
};

const headingStyles = {
  maxWidth: "75%",
  color: "#FFF",
  fontSize: "3.5rem",
  fontWeight: 500,
  lineHeight: 1.2,
  // Font family for headings for English, Chinese, and Korean
  fontFamily: "Roboto, Noto Sans SC, Noto Sans KR, sans-serif",
};

const headingFocus = {
  color: "#FF781F",
  fontWeight: 700,
};

const fontStyleNormal = {};

const heroContents = [
  {
    intro: "Hi there, ",
    name: "Xuan Hao",
    outro: " here",
    description: "Table Tennis Player, Climber, Skater, Software Engineer,",
    language: "eng",
  },
  {
    intro: "你好， 我是",
    name: "宣豪",
    outro: "",
    description: "Table Tennis Player, Climber, Skater, Software Engineer,",
    language: "chn",
  },
  {
    intro: "안녕하세요 ",
    name: "하오",
    outro: "라고 해요",
    description: "Table Tennis Player, Climber, Skater, Software Engineer,",
    language: "kor",
  },
];

const LandingPage: React.FC = () => {
  const [heroContentIdx, setHeroContentIdx] = React.useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      const nextIdx = (heroContentIdx + 1) % heroContents.length;
      setHeroContentIdx(nextIdx);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroContentIdx]);
  return (
    <div style={pageStyles}>
      <AnimatePresence mode="wait">
        <motion.span
          style={headingStyles}
          key={heroContentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {heroContents[heroContentIdx].intro}
          <span style={headingFocus}>{heroContents[heroContentIdx].name}</span>
          {heroContents[heroContentIdx].outro}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
