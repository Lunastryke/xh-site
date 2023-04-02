import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageStyles = {
  margin: "auto",
  paddingTop: "14%",
  verticalAlign: "middle",
};

const headingStyles = {
  maxWidth: "75%",
  color: "#FFF",
  fontSize: "3.5rem",
  opacity: "87%",
  fontWeight: 500,
  lineHeight: 1.2,
  margin: "auto",
  textAlign: "center" as const,
  // Font family for headings for English, Chinese, and Korean
  fontFamily: "Roboto, Noto Sans SC, Noto Sans KR, sans-serif",
};

const headingFocus = {
  color: "#FF781F",
  fontWeight: 700,
};

const fontStyleNormal = {
  color: "#FFF",
  fontSize: "1.5rem",
  fontWeight: 500,
  lineHeight: 3,
  opacity: "60%",
};

const heroContents = [
  {
    idx: 0,
    intro: "Hi there, ",
    name: "Xuan Hao",
    outro: " here",
    description:
      "Table Tennis Player - Climber - Inline Skater - Software Engineer",
    language: "eng",
  },
  {
    idx: 1,
    intro: "你好， 我是",
    name: "宣豪",
    outro: "",
    description: "乒乓球爱好者 - 室内攀岩者 - 滑轮者 - 软件工程师",
    language: "chn",
  },
  {
    idx: 2,
    intro: "안녕하세요 ",
    name: "하오",
    outro: "라고 해요",
    description:
      "탁구 선수 - 실내 암벽등반자 - 인라인 스케이터 - 소프트웨어 엔지니어",
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
        <motion.div
          style={headingStyles}
          key={heroContentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            {heroContents[heroContentIdx].intro}
            <span style={headingFocus}>
              {heroContents[heroContentIdx].name}
            </span>
            {heroContents[heroContentIdx].outro}
          </div>
          <div style={fontStyleNormal}>
            {heroContents[heroContentIdx].description}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
