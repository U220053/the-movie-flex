import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect } from "react";

function Detail({ setLocation, details }) {
  const { id } = useParams();
  useEffect(() => {
    setLocation(id);
  }, [setLocation, id]);
  return (
    <>
      {/* first Card Starts from here */}
      {details ? (
        <div className="DetailBody">
          <div className="DetailCard">
            <div className="DetailCardBody">
              <h1 className="DetailCardHeading">
                {details.name || details.title || details.original_name}
              </h1>
              <p className="DetailCardPara">{details.overview}</p>
              <h3 className="DetailCardPara">
                Languages:<span> {details.original_language}</span>
              </h3>
              <h3 className="DetailCardPara">
                Subtitles:<span> Yes (English)</span>
              </h3>
              <h3 className="DetailCardPara">
                Release Year:<span> {details.release_date}</span>
              </h3>
              <div className="DetailCardRating">
                <i
                  className={
                    details.vote_average >= 1
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 2
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 3
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 4
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 5
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 6
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 7
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 8
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 9
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    details.vote_average >= 10
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
              </div>
              <div className="DetailCardButton">
                <button>
                  Download <i class="fa-solid fa-download"></i>
                </button>
                <button>
                  Watch Online <i class="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
            <div className="DetailCardImg">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  details.poster_path || details.backdrop_path
                }`}
                alt="Movies Banner"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
