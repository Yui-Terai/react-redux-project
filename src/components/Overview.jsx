import React from "react";

const Overview = props => {
  const style = {
    width: 960,
    height: 160,
    backgoundColor: "red",
    taxtAlign: "center"
  };

  let numTables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }

  return (
    <div style={style}>
      <h1>Restaurant Title</h1>
      <h2>Tables Available: {numTables}</h2>
      <h2>Money Earned: {props.moneyEarned}</h2>
    </div>
  );
};

export default Overview;
