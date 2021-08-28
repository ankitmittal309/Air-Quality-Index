import React from "react";
import ChartCategory from "./ChartCategory";

const AQIGuideChart = () => {
  return (
    <div className="classifyAQI">
      <ChartCategory
        category="Good"
        className="classifyImg good-color"
        index="0-50"
      />
      <ChartCategory
        category="Satisfactory"
        className="classifyImg Satisfactory-color"
        index="51-100"
      />
      <ChartCategory
        category="Moderate"
        className="classifyImg Moderate-color"
        index="101-200"
      />
      <ChartCategory
        category="Poor"
        className="classifyImg Poor-color"
        index="201-300"
      />
      <ChartCategory
        category="Very Poor"
        className="classifyImg ver-poor-color"
        index="301-400"
      />
      <ChartCategory
        category="Severe"
        className="classifyImg Severe-color"
        index="401-500"
      />
    </div>
  );
};

export default AQIGuideChart;
