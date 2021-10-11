import React, { useEffect, useState } from "react";
import Page from "../Page";
const Summery = () => {
  const [results, setResults] = useState([]);

  const fetchShow = async () => {
    const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const results = await resp.json();

    // console.log(results);

    setResults(results);
  };

  useEffect(() => {
    fetchShow();
  }, []);

  return <Page>hlkfrkasdjf</Page>;
};

export default Summery;
