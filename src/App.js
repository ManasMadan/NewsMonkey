import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?language=en&category=general&q=&apiKey=${apiKey}`
  );
  const [darkTheme, setDarkTheme] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleMode = () => {
    if (darkTheme === true) {
      setDarkTheme(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDarkTheme(true);
      document.body.style.backgroundColor = "#313438";
    }
  };

  useEffect(() => {
    setUrl(
      `https://newsapi.org/v2/top-headlines?language=en&category=${category}&q=${query}&apiKey=${apiKey}`
    );
  }, [category, query]);

  return (
    <>
      <Navbar
        setCategory={setCategory}
        setLoading={setLoading}
        setQuery={setQuery}
        darkTheme={darkTheme}
        toggleMode={toggleMode}
        setPageNumber={setPageNumber}
        category={category}
      />
      <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <News
        loading={loading}
        setLoading={setLoading}
        url={url}
        darkTheme={darkTheme}
        setProgress={setProgress}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}
