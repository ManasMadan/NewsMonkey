import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSearch = () => {
    props.setLoading(true);
    const search = document.getElementById("search");
    props.setQuery(search.value);
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    document.getElementById("search").addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
  }, []);

  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"}>
      <div className="container-fluid">
        <span className="navbar-brand">
          NewsMonkey -
          <span className="text-warning">
            {` ${
              props.category.charAt(0).toUpperCase() + props.category.slice(1)
            }`}
          </span>
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "general" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("general");
                }}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "business" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("business");
                }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "entertainment" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("entertainment");
                }}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "health" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("health");
                }}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "science" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("science");
                }}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "sports" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("sports");
                }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  props.category === "technology" ? "active" : ""
                }`}
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setPageNumber(1);
                  props.setLoading(true);
                  props.setCategory("technology");
                }}
              >
                Technology
              </div>
            </li>
            <li>
              <div className="d-flex my-2 mx-2">
                <input
                  id="search"
                  className="form-control"
                  placeholder="Enter Keywords"
                  aria-label="Search"
                  style={{ width: "15vw", minWidth: "200px" }}
                  autoComplete={"off"}
                />
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    handleSearch();
                    props.setLoading(true);
                  }}
                >
                  Go
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={"form-check-label text-light"}
              htmlFor="flexSwitchCheckDefault"
            >
              {width < 525 ? "" : "Dark Mode"}
            </label>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
