import { useEffect, useState } from "react";
import "./App.css";
import requests from "./api/requests";
import { fetchData } from "./api/index";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Card/Cards";
import Pages from "./components/Pages/Pages";

function App() {
  const [shows, setShows] = useState([]);
  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchData(`${requests.fetchTrending}${page}`)
      .then((data) => {
        console.log(data);
        setTotalPages(data.results.total_pages);
        const index = Math.floor(Math.random() * data.results.length - 1);
        setMovie(data.results[index]);
        setShows(data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Banner
        movie={movie}
        trailerurl={trailerurl}
        setTrailerurl={setTrailerurl}
      />
      <Cards shows={shows} />
      <Pages totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
