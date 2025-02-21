import "./index.scss";
import { card } from "../types";

interface props {
  card: card;
  playAnimation: boolean;
}

export const Card = ({ card, playAnimation }: props) => {
  return (
    <div
      className={`card-container type-${card.type} ${
        playAnimation ? "play" : ""
      }`}
    >
      <img className="card-image" src={card.image}></img>
      <h2 className="card-title">{card.name}</h2>
      <p className="card-instructions">{card.description}</p>
    </div>
  );
};
