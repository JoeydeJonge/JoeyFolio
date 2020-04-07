import React from "react";
import "./GameCard.css";

export default function GameCard({ game }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={game.image} alt="games" className="blog-card-image mask" />
          <div class="blog-card-title">{game.title}</div>
          <p className="blog-card-subtitle">{game.description}</p>

          <div>
            <a href={game.url} target="_" class="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
