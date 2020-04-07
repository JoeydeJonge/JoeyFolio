import React from "react";
import "./StartupProjectCard.css";

export default function StartupProjectCard({ project }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={project.image} alt="project" className="blog-card-image mask" />
          <div class="blog-card-title">{project.title}</div>
          <p className="blog-card-subtitle">{project.description}</p>

          <div class="inline">
            <a href={project.url} target="_" class="button">
              Read More
            </a>
            <a href={project.url} target="_" class="button">
             Visit site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
