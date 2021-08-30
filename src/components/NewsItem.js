import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";

export default function NewsItem(props) {
  return (
    <div
      className="card my-3"
      style={{
        width: "18rem",
        minHeight: "431px",
        display: "block",
        margin: "auto",
      }}
      // eslint-disable-next-line
      style={props.style}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
        }}
      >
        <span className="badge bg-danger" style={{ borderRadius: 0 }}>
          {" "}
          {props.source}{" "}
        </span>
      </div>
      <img
        src={
          props.image === null || props.image === ""
            ? "https://media3.s-nbcnews.com/i/newscms/2018_21/2442281/og-nbcnews1200x630_c986de7e1bb6ad2281723b692aa61990.png"
            : props.image
        }
        onError={(e) => {
          e.target.src =
            "https://media3.s-nbcnews.com/i/newscms/2018_21/2442281/og-nbcnews1200x630_c986de7e1bb6ad2281723b692aa61990.png";
        }}
        className="card-img-top"
        alt="..."
        style={{ height: "175px" }}
      />
      <div className="card-body" style={{ minHeight: "180px" }}>
        <h5 className="card-title">
          <LinesEllipsis
            text={props.title === null ? "" : props.title}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </h5>
        <div className="card-text">
          <LinesEllipsis
            text={props.desc === null ? "" : props.desc}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
      <div className="card-body">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  source: PropTypes.string,
  darkTheme: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
};
