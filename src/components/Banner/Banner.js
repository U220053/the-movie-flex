import { truncate } from "../../handlers/descriptionHandlers";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner({ movie }) {
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
               "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
           )`,
          backgroundPosition: "center-center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">
              <Link to={`/${movie.id}`} className="banner-link">
                Download
              </Link>
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
