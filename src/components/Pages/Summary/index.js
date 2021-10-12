import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import Card from "../../Card";
import Button from "../../Button";
const Summery = () => {
  const [results, setResults] = useState([]);

  const params = useParams();

  const fetchShow = async () => {
    const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const results = await resp.json();

    const filteredResults = results?.filter(({ show }) => show.id === parseInt(params.id));

    setResults(filteredResults);
  };

  useEffect(() => {
    fetchShow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(results);

  return (
    <>
      <div className="h-screen bg-gray-800 flex flex-col justify-start items-center">
        <div className="w-full m-1">
          <Button>Home</Button>
        </div>

        <div className="mt-20">
          <Card variant="summary">
            {results.map(({ show: { id, name, summary } }) => {
              return (
                <>
                  <h1 className="text-3xl font-bold m-3">{name}</h1>
                  <div dangerouslySetInnerHTML={{ __html: `${summary}` }} key={id}></div>
                  <Button>Book This Movie</Button>
                </>
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Summery;
