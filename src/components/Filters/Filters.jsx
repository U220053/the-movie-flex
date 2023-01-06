import DropDown from "./DropDown";
import { Genres } from "./Modals/Genres";
import { Years } from "./Modals/Years";
import { Movies } from "./Modals/Movies";
import { Quality } from "./Modals/Quality";
import TvShows from "./Modals/TvShows";
import WebSeries from "./Modals/Webseries";

import "./Filters.css";

function Filters({
  setIsBollyWood,
  setGenre,
  setMovies,
  setQuality,
  setTv,
  setSeries,
  setYear,
}) {
  return (
    <div className="filters">
      <div className="filter-container">
        <div
          className="link-filter"
          style={{ borderRight: "1px solid #fff" }}
          onClick={() => {
            setIsBollyWood(false);
            setGenre(null);
            setMovies(null);
            setTv(null);
          }}
        >
          Home
        </div>
        <DropDown data={Genres} select="Genres" setId={setGenre} />
        <DropDown data={Years} select="Years" setId={setYear} />
        <DropDown data={Movies} select="Movies" setId={setMovies} />
        <DropDown data={Quality} select="Quality" setId={setQuality} />
        <DropDown data={TvShows} select="TV Shows" setId={setTv} />
        <DropDown data={WebSeries} select="Series" setId={setSeries} />
        <div className="link-filter" onClick={() => setIsBollyWood(true)}>
          Bollywood
        </div>
      </div>
    </div>
  );
}

export default Filters;
