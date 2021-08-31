import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderComponent from "./Loader";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  let style1 = props.darkTheme
    ? {
        color: "white",
      }
    : {
        backgroundColor: "white",
        color: "black",
      };

  let style2 = props.darkTheme
    ? {
        backgroundColor: "#4e5359",
        color: "white",
        border: "2px solid white",
      }
    : {
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
      };

  const updateNews = async (url) => {
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticlesCount(parsedData.totalResults);
    props.setProgress(80);
    props.setPageNumber(props.pageNumber + 1);
    props.setProgress(90);
    setArticles(parsedData.articles);
    props.setProgress(99);
    props.setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `${props.url}&page=${props.pageNumber}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticlesCount(parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
    props.setPageNumber(props.pageNumber + 1);
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    updateNews(props.url);
  }, [props.url]);

  if (props.loading) {
    return <LoaderComponent type={1} />;
  } else if (articlesCount !== 0) {
    return (
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articlesCount !== articles.length && props.pageNumber <= 5}
          loader={<LoaderComponent type={2} />}
          endMessage={
            <p className={`text-center ${props.darkTheme ? "text-light" : ""}`}>
              <b>No More Atricles To Show</b>
            </p>
          }
        >
          <div className="container" style={style1} style={{ width: "100vw" }}>
            <div className="row align-items-center">
              {articles.map((element) => {
                return (
                  <div
                    className={`col-md-${
                      width < 992 && width > 768 ? "5" : "4"
                    }`}
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title}
                      desc={element.description}
                      image={element.urlToImage}
                      url={element.url}
                      darkTheme={props.darkTheme}
                      style={style2}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  } else {
    return (
      <div
        className={`d-flex align-items-center justify-content-center ${
          props.darkTheme ? "text-light" : ""
        }`}
        style={{ width: "100vw", height: "80vh" }}
      >
        <h1>No Articles Found</h1>
      </div>
    );
  }
}

News.propTypes = {
  url: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  setProgress: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};
