import React from "react";

const Marker = ({ text, onClick }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 18,
      height: 18,
      backgroundColor: "#000",
      border: "2px solid #fff",
    }}
    alt={text}
    onClick={onClick}
  />
);

export default Marker;
