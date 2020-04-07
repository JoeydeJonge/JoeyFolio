import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Podcast() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">{podcastSection.subtitle}</p>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map(podcastLink => {
          return (
            <div>
              <iframe src="https://open.spotify.com/embed/track/7ua5ORSWsf8JOrcX6SJ9Ub" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          );
        })}
      </div>
    </div>
    </Fade>
  );
}
