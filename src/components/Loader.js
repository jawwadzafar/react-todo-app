import React from "react";
import logo from "./../logo.svg";

const Loader = ({ text }) => {
  if (!text) text = "loading data...";
  return (
    <div className="col-lg-12 text-center">
      {/* <img alt="logo" className="img-fluid logo-animation" src={logo} /> */}
      <div className="display-center">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      {text}

      </div>
    </div>
  );
};
export default Loader;
