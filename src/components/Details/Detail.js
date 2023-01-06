import React from "react";
import "./Detail.css";
// import { demoimg } from "../../demoimg.avif";
import demoMovies from "../../demoMovies.jpg";

function Detail() {
  return (
    <>
      {/* first Card Starts from here */}
      {/* <div className="DetailBody">
        <div className="DetailCard">
          <div className="DetailCardBody">
            <h1 className="DetailCardHeading">AVATAR: THE WAY OF WATER</h1>
            <p className="DetailCardPara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus! Ad dolore dignissimos asperiores
              dicta facere optio quod commodi nam tempore recusandae. Rerum sed
              nulla eum vero expedita ex delectus voluptates rem at neque quos
              facere sequi unde optio aliquam!
            </p>
            <div className="DetailCardRating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="DetailCardImg">
            <img src={demoMovies} alt="Movies Banner" />
          </div>
        </div>
      </div> */}

      {/* first Card End here */}

      {/* Second Card starts from here  */}
      <div className="DetailBody">
        <div className="DetailCard">
          <div className="DetailCardBody">
            <h1 className="DetailCardHeading">AVATAR: THE WAY OF WATER</h1>
            <h3 className="DetailCardPara">
              Season:<span> 2</span>
            </h3>
            <h3 className="DetailCardPara">
              Episodes:<span> 7</span>
            </h3>
            <h3 className="DetailCardPara">
              Languages:<span> Dual Audio (Hindi-English)</span>
            </h3>
            <h3 className="DetailCardPara">
              Subtitles:<span> Yes (English)</span>
            </h3>
            <h3 className="DetailCardPara">
              Release Year:<span> 2022</span>
            </h3>
            <h3 className="DetailCardPara">
              Format:<span> Mkv</span>
            </h3>
            <div className="DetailCardRating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
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
            <img src={demoMovies} alt="Movies Banner" />
          </div>
        </div>
      </div>
      {/* second class end here  */}
    </>
  );
}

export default Detail;
