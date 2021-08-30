import React from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const LoaderComponent = (props) => {
  if (props.type === 1) {
    return (
      <div
        style={{ height: "80vh", width: "100vw" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Loader type="Audio" />
      </div>
    );
  } else {
    return (
      <div
        style={{ height: "20vh", width: "80vw", margin: "auto" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Loader type="Oval" />
      </div>
    );
  }
};

LoaderComponent.propTypes = {
  type: PropTypes.number.isRequired,
};

export default LoaderComponent;
