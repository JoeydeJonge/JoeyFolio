import React from "react";
import "./Games.css";
import GameCard from "../../components/gameCard/GameCard";
import { gameSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Games() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="Games">
        <div className="blog-header">
          <h1 className="blog-header-text">{gameSection.title}</h1>
          <p className="subTitle blog-subtitle">{gameSection.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {gameSection.games.map(game => {
              return (
                <GameCard
                  game={{
                    url: game.url,
                    image: game.image,
                    title: game.title,
                    description: game.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
