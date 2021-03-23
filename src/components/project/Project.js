import React from "react";
import "./Project.scss";

const Project = (props) => {
  const { name, type, year, desc, tags, website_url, github_url } = props;

  return (
    <div className="Project">
      <p className="project-header">
        <span className="project-name">
          {name} <i className="project-type">({type})</i>
        </span>
        <span className="project-year">
          <i>{year}</i>
        </span>
      </p>
      <p className="project-body">{desc}</p>
      {tags.map((tag) => {
        return (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        );
      })}
      <p className="project-footer">
        <span>
          {website_url && (
            <a href={website_url} target="_blank">
              WEBSITE
            </a>
          )}
          {github_url && (
            <a href={github_url} target="_blank">
              GITHUB
            </a>
          )}
        </span>
      </p>
    </div>
  );
};

export default Project;
