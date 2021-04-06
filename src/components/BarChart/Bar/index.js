import React from "react";

const Bar = ({ barHeight }) => {
  const style = {
    height: barHeight,
    width: "100%",
    background: "#468EC1",
    margin: "0 10px",
  };

  return <div className="barItem" style={style} />;
};

export default Bar;
