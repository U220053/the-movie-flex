import React from "react";
import "./Card.css";
import CardDemo from "../../CardDemo.webp"
function Card({ details }) {
    const id = 3.5
  return (
    <>
    <div className="card">
        <div className="cardRow">
            <div className="cardCol">
                <div className="cardImg">
                    <img src={CardDemo} alt="Movies Banner" />
                </div>
                <div className="cardText">
                    <h2 className="cardHeading">Money Hiest</h2>
                    <h5 className="cardSubheading">- The korean</h5>
                    <p className="cardPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam unde dicta ut eaque tenetur facilis.</p>
                    <div className="cardRating">
                        <i class={(id>=1)?"fa-solid fa-star":"fa-regular fa-star"}></i>
                        <i class={(id>=2)?"fa-solid fa-star":"fa-regular fa-star"}></i>
                        <i class={(id>=3)?"fa-solid fa-star":"fa-regular fa-star"}></i>
                        <i class={(id>=4)?"fa-solid fa-star":"fa-regular fa-star"}></i>
                        <i class={(id>=5)?"fa-solid fa-star":"fa-regular fa-star"}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Card;
