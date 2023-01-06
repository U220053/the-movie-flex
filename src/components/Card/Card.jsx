import React from "react";
import "./Card.css";
import { truncate } from "./../../handlers/descriptionHandlers";
import { Link } from "react-router-dom";

function Card({ show }) {
  // const id = 3.5;
  const {
    id,
    name,
    overview,
    vote_average,
    poster_path,
    title,
    original_name,
    backdrop_path,
  } = show;
  return (
    <>
      {poster_path ? (
        <Link to={`/${id}`}>
          <div className="cardCol">
            <div className="cardImg">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  poster_path || backdrop_path
                }`}
                alt="Movies Banner"
              />
            </div>
            <div className="cardText">
              <h2 className="cardHeading">{name || title || original_name}</h2>
              {/* <h5 className="cardSubheading">- The korean</h5> */}
              <p className="cardPara">{truncate(overview, 150)}</p>
              <div className="cardRating">
                <i
                  className={
                    vote_average >= 1
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 2
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 3
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 4
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 5
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 6
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 7
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 8
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 9
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
                <i
                  className={
                    vote_average >= 10
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                ></i>
              </div>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}

export default Card;
