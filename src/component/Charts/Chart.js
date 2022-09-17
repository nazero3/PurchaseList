import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let datapointsValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...datapointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
