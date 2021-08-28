import "./App.css";
import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { clientAPI } from "./constants";
import LineChartGraph from "./Component/LineChart";
import AQIGuideChart from "./Component/AQIGuideChart";
import AQITable from "./Component/AQITable";
import { sortOn, merge } from "./Utility/common";
import { addKeyAndValue } from "./Utility/common";
import dayjs from "dayjs";

const client = new W3CWebSocket(clientAPI);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function App() {
  const [airQualityIndex, setAirQualityIndex] = useState([]);

  const dataonClick = function getIndividualData(e) {
    // const addpercitydata = addKeyAndValue(
    //   airQualityIndex,
    //   "perCity",
    //   e[0].city
    // );
    // console.log(addKeyAndValue(airQualityIndex, "perCity", e[0].city));
    // setAirQualityIndex(addpercitydata);
    return e;
  };

  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    };

    client.onmessage = (event) => {
      const dataFromServer = JSON.parse(event.data);

      var finalmerge = merge(airQualityIndex, dataFromServer, "city");
      finalmerge.sort(sortOn("city"));
      addKeyAndValue(finalmerge, "time", dayjs().format());

      setAirQualityIndex(finalmerge);
    };

    // return () => {
    //   client.close();
    // };
  });

  return (
    <>
      <h1 className="header">Air Quality Index</h1>

      <AQIGuideChart />

      <div className="top">
        <LineChartGraph airQualityIndex={airQualityIndex} />
        <div className="tablewrapper">
          <AQITable
            airQualityIndex={airQualityIndex}
            getIndividualData={dataonClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
