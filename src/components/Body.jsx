import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.jsx";
import Menu from "./Menu.jsx";

const Body = () => {
  const style = {
    display: "flex",
    height: 480,
    minWidth: 960
  };

  return (
    <div style={style}>
      <DetailsContainer />
      <Layout />
      <Menu />
    </div>
  );
};

export default Body;
