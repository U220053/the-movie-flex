import { useEffect, useState } from "react";
import "./App.css";
import requests from "./api/requests";
import { fetchData } from "./api/index";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Card/Cards";
import Pages from "./components/Pages/Pages";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [shows, setShows] = useState([]);
  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [lastPage, setLastPage] = useState(8);
  const [firstPage, setFirstPage] = useState(1);
  useEffect(() => {
    fetchData(`${requests.fetchTrending}${page}`)
      .then((data) => {
        setTotalPages(data.total_pages);
        const index = Math.floor(Math.random() * data.results.length - 1);
        setMovie(data.results[index]);
        setShows(data.results);
        if (page === lastPage && page < totalPages + 10) {
          setFirstPage(page);
          setLastPage((l) => l + 8);
        }
        window.scrollTo(0, 0);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <Navbar />
      <Banner
        movie={movie}
        trailerurl={trailerurl}
        setTrailerurl={setTrailerurl}
      />
      <Cards shows={shows} />
      <Pages
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        lastPage={lastPage}
        firstPage={firstPage}
        setFirstPage={setFirstPage}
        setLastPage={setLastPage}
      />
    </div>
  );
}

export default App;
