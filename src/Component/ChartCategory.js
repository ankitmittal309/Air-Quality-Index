import React from "react";

const ChartCategory = (props) => {
  return (
    <div>
      <span className={props.className}>{props.index}</span>
      <p>{props.category}</p>
    </div>
  );
};

export default ChartCategory;
