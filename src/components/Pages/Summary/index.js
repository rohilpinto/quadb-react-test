import React, { useEffect, useState } from "react";
import Page from "../Page";

import { useParams } from "react-router";
import Card from "../../Card";
const Summery = () => {
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState();
  const params = useParams();

  const fetchShow = async () => {
    const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const results = await resp.json();

    // console.log(results);

    const filteredResults = results?.filter(({ show }) => show.id == params.id);

    // setSummary(results);
    setResults(filteredResults);
  };

  useEffect(() => {
    fetchShow();
  }, []);

  console.log(results);

  return (
    <Page>
      <Card>
        {results.map((obj) => {
          const summary = obj?.show?.summary;
          const newSummary = summary.replace("p", "");

          return <p key={obj.show.id}>{newSummary}</p>;
        })}
      </Card>
      ;
    </Page>
  );
};

export default Summery;
