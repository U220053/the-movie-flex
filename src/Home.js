import Banner from "./components/Banner/Banner";
import Cards from "./components/Card/Cards";
import Pages from "./components/Pages/Pages";
import Filters from "./components/Filters/Filters";

function Home({
  movie,
  trailerurl,
  setTrailerurl,
  setIsBollyWood,
  setGenre,
  setMovies,
  setQuality,
  setTv,
  setSeries,
  setYear,
  shows,
  totalPages,
  page,
  setPage,
  setFirstPage,
  setLastPage,
  firstPage,
  lastPage,
}) {
  return (
    <div>
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

export default Home;
