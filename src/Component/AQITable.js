import React from "react";
import colorfunc from "../ColorPerIndex";
import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const AQITable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>City</th>
          <th>Current AQI</th>
          <th>Last Updated</th>
        </tr>

        {props.airQualityIndex.map((data) => {
          return (
            <tr
              key={data.city}
              style={{ backgroundColor: colorfunc(data).bg }}
              onClick={() => {
                props.getIndividualData([data]);
              }}
            >
              <td>{data.city}</td>
              <td style={{ color: colorfunc(data).color }}>
                {data.AQIs[data.AQIs.length - 1].aqi}
              </td>
              <td>{data.AQIs[data.AQIs.length - 1].datePublished}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AQITable;
