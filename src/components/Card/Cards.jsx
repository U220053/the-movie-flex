import "./Card.css";
import Card from "./Card";

function Cards({ shows }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="cardRow">
          {shows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
