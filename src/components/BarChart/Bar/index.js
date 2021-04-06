const Bar = ({ barHeight }) => {
  const style = {
    height: barHeight,
  };

  return <div className="barItem" style={style} />;
};

export default Bar;
