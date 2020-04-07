import React from "react";
import "./StartupProjects.css";
import StartupProjectCard from "../../components/StartupProjectCard/StartupProjectCard";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProjects() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="blog-header">
          <h1 className="blog-header-text">{bigProjects.title}</h1>
          <p className="subTitle blog-subtitle">{bigProjects.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {bigProjects.projects.map(project => {
              return (
                <StartupProjectCard
                  project={{
                    url: project.url,
                    image: project.image,
                    title: project.title,
                    description: project.description
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
