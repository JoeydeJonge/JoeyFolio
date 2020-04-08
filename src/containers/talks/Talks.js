import React from "react";
import "./Talks.css";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Talks() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{talkSection.title}</h1>
          <p className="subTitle podcast-header-subtitle">{talkSection.subtitle}</p>
        </div>
        <div className="podcast-main-div">
          {talkSection.talks.map(talkLink => {
            return (
              <div>
                <iframe src="https://open.spotify.com/embed-podcast/episode/0ibeqca2qoLSRCtWUO8onu" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <iframe src="https://open.spotify.com/embed-podcast/episode/6UZBltnRTTRRqcoOxOZiJw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <iframe src="https://open.spotify.com/embed-podcast/episode/18erRfCLjOsK9nsZNMvsNJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
