import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
      }}
    >
      <span className="fas fa-sync fa-spin"></span>
    </div>
  );
};

export default Loader;
