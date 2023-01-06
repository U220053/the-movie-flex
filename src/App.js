import { useEffect, useState } from "react";
import "./App.css";
import requests from "./api/requests";
import { fetchData } from "./api/index";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Card/Cards";
import Pages from "./components/Pages/Pages";
import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
function App() {
  const [isBollyWood, setIsBollyWood] = useState(false);
  const [shows, setShows] = useState([]);
  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [lastPage, setLastPage] = useState(8);
  const [firstPage, setFirstPage] = useState(1);
  const [genre, setGenre] = useState(null);
  // eslint-disable-next-line
  const [movies, setMovies] = useState(null);
  // eslint-disable-next-line
  const [quality, setQuality] = useState(null);
  // eslint-disable-next-line
  const [tv, setTv] = useState(null);
  // eslint-disable-next-line
  const [series, setSeries] = useState(null);
  // eslint-disable-next-line
  const [year, setYear] = useState(null);
  useEffect(() => {
    if (genre) {
      setTv(null);
      fetchData(
        !isBollyWood
          ? `${requests.fetchAccordingGenre}${genre}&page=${page}`
          : `${requests.fetchAccordingGenre}${genre}&page=${page}&region=IN&language=hi-IN&with_original_language=hi`
      )
        .then((data) => {
          setTotalPages(data.total_pages);
          const index = Math.floor(Math.random() * data.results.length - 1);
          setMovie(data.results[index]);
          setShows(data.results);
        })
        .catch((err) => console.error(err));
    }
    if (tv) {
      setGenre(null);
      fetchData(
        !isBollyWood
          ? `${requests.fetchTvShows}&page=${page}`
          : `${requests.fetchTvShows}&page=${page}&region=IN&language=hi-IN&with_original_language=hi`
      )
        .then((data) => {
          console.log(data);
          setTotalPages(data.total_pages);
          const index = Math.floor(Math.random() * data.results.length - 1);
          setMovie(data.results[index]);
          setShows(data.results);
        })
        .catch((err) => console.error(err));
    }
    if (!genre || !tv) {
      fetchData(
        !isBollyWood
          ? `${requests.fetchTrending}${page}`
          : `${requests.fetchBollywood}${page}`
      )
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
    }
    console.log(shows);

    // eslint-disable-next-line
  }, [isBollyWood, page, genre, tv]);

  return (
    <div>
      <Navbar />
      <Banner
        movie={movie}
        trailerurl={trailerurl}
        setTrailerurl={setTrailerurl}
      />
      <Filters
        setIsBollyWood={setIsBollyWood}
        setGenre={setGenre}
        setMovies={setMovies}
        setQuality={setQuality}
        setTv={setTv}
        setSeries={setSeries}
        setYear={setYear}
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
