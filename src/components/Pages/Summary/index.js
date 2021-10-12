import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router";
import Card from "../../Card";
import Button from "../../Button";
import Form from "../Form";

const API_URL = "https://api.tvmaze.com/search/shows?q=all";

const Summary = () => {
  const [results, setResults] = useState([]);
  const [openFormModal, setOpenFormModal] = useState(false);

  const history = useHistory();
  const params = useParams();

  const fetchShow = async () => {
    const resp = await fetch(API_URL);
    const results = await resp.json();
    const filteredResults = results?.filter(({ show }) => show.id === parseInt(params.id));

    setResults(filteredResults);
  };

  useEffect(() => {
    fetchShow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="min-h-screen p-20 bg-gray-800 flex flex-col justify-start items-center ">
        <div className="w-full m-1 flex  sm:justify-center ">
          <Button onClick={() => history.push("/")}>Home</Button>
        </div>

        <div className="mt-20">
          <Card cardType="summary-card">
            {results.map(({ show: { id, name, summary, image } }) => {
              return (
                <>
                  <div className="flex justify-center items-center  flex-col p-2" key={id}>
                    <img src={image.medium} alt={name} />
                    <h1 className="text-3xl font-bold m-3">{name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${summary}` }} key={id} className="text-base leading-snug my-1 "></div>
                    <Button onClick={() => setOpenFormModal(true)}>Book Movie</Button>
                  </div>
                </>
              );
            })}
          </Card>
        </div>

        {openFormModal ? <Form results={results} openFormModal={openFormModal} setOpenFormModal={setOpenFormModal}></Form> : null}
      </div>
    </>
  );
};

export default Summary;
