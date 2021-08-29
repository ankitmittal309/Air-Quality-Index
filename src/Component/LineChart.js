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
  var checkCityInAQI = props.airQualityIndex.map((data) => data.city);

  var dataforEachCity = props.airQualityIndex
    .filter((data) => data.city === props.aqiDataonClick)
    .map((data) => data.AQIs);
  if (checkCityInAQI.includes(props.aqiDataonClick)) {
    dataforEachCity[0] = dataforEachCity[0].slice(-10);
  }

  if (!checkCityInAQI.includes(props.aqiDataonClick)) {
    return (
      <ResponsiveContainer width="75%" height={500}>
        <LineChart
          data={props.airQualityIndex}
          margin={{ top: 15, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey="city" padding={{ left: 0 }} />
          <YAxis stroke="#fff" domain={[0, 400]} />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="currentaqi" stroke="#03fc90" />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <ResponsiveContainer width="75%" height={500}>
        <LineChart
          data={dataforEachCity[0]}
          margin={{ top: 15, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey="datePublished" padding={{ left: 0 }} />
          <YAxis stroke="#fff" domain="auto, auto" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="aqi" stroke="#03fc90" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
};

export default LineChartGraph;
