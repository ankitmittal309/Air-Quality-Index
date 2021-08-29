import "./App.css";
import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { clientAPI } from "./constants";
import LineChartGraph from "./Component/LineChart";
import AQIGuideChart from "./Component/AQIGuideChart";
import AQITable from "./Component/AQITable";
import { prepareHistoricalAQI } from "./Utility/common";

const client = new W3CWebSocket(clientAPI);

function App() {
  const [airQualityIndex, setAirQualityIndex] = useState([]);
  const [aqiDataonClick, setAqiDataonClick] = useState([]);

  const dataonClick = function getIndividualData(e) {
    setAqiDataonClick(e[0].city);
  };

  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    };

    client.onmessage = (event) => {
      const dataFromServer = JSON.parse(event.data);
      const updatedAQI = prepareHistoricalAQI(airQualityIndex, dataFromServer);
      setAirQualityIndex(updatedAQI);
    };
  }, [airQualityIndex]);

  return (
    <>
      <h1 className="header">Air Quality Index</h1>

      <AQIGuideChart />

      <div className="top">
        <LineChartGraph
          airQualityIndex={airQualityIndex}
          aqiDataonClick={aqiDataonClick}
        />

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
