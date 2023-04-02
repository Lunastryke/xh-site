import React from "react";

const headerStyles = {
  color: "#FFF",
  opacity: "87%",
  margin: "auto",
  fontSize: "1rem",
  fontWeight: 500,
  textAlign: "center" as const,
};

const navStyles = {
  display: "inline-flex",
  justifyContent: "space-between",
  columnGap: "3rem",
  margin: "auto",
};

const NavigationBar: React.FC = (stateNav) => {
  return (
    <div style={headerStyles}>
      <span style={navStyles}>
        <a>Home</a>
        <a>Projects</a>
        <a>Blog</a>
        <a>About</a>
      </span>
    </div>
  );
};

export default NavigationBar;
