import React from "react";
import {
  Line,
  LineChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  Legend,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const LineChartGraph = (props) => {
  // console.log(props.airQualityIndex);
  if (props.airQualityIndex.length > 1) {
    return (
      <ResponsiveContainer width="75%" height={500}>
        <LineChart
          data={props.airQualityIndex}
          margin={{ top: 15, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey="city" padding={{ left: 0 }} />
          <YAxis stroke="#fff" domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="aqi" stroke="#03fc90" />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <ResponsiveContainer width="75%" height={500}>
        <LineChart
          data={props.airQualityIndex}
          margin={{ top: 15, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey="time" padding={{ left: 0 }} />
          <YAxis stroke="#fff" domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="aqi" stroke="#03fc90" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
};

export default LineChartGraph;
