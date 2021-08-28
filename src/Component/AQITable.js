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
              onClick={() => {
                props.getIndividualData([data]);
              }}
            >
              <td>{data.city}</td>
              <td style={{ color: colorfunc(data) }}>{data.aqi.toFixed(2)}</td>
              <td>{dayjs().fromNow()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AQITable;
