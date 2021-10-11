import { useEffect, useState } from "react";
import Button from "../../Button";
import Card from "../../Card";
import Page from "../Page";

const Home = () => {
  const [results, setResults] = useState([]);

  const fetchShow = async () => {
    const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const results = await resp.json();

    // console.log(results);

    setResults(results);
  };

  const handleSummary = () => {
    console.log("clicked");
  };

  useEffect(() => {
    fetchShow();
  }, []);

  return (
    <Page>
      {results.map(({ show: { id, name, image, premiered, status } }) => {
        return (
          <Card key={id}>
            <div className="flex items-center justify-center">
              <div>
                <div className="">
                  <div className="w-48 object-fit">
                    <img src={image.medium} alt={name} className="w-full  rounded   " />
                  </div>
                  <h1 className="text-3xl font-bold mt-2">{name}</h1>
                </div>
                <div className=" ">
                  <p>Premiered: {premiered}</p>
                  <p>status: {status}</p>
                </div>
              </div>
            </div>

            <Button onClick={handleSummary}>Summary</Button>
          </Card>
        );
      })}
    </Page>
  );
};

export default Home;
