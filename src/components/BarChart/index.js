import Bar from "./Bar";

const BarChart = ({ bars }) => {
  return (
    <div className="barContainer">
      {bars.map((value) => (
        <Bar barHeight={value} />
      ))}
    </div>
  );
};

export default BarChart;
