import React from 'react';
import { ExternalLink } from '@geist-ui/react-icons';
import './Project.scss';

const Project = (props) => {
  const { name, type, year, desc, tags, website_url, github_url } = props;

  return (
    <div className="Project">
      <p className="project-header">
        <span className="project-name">
          {name} {type && <i className="project-type">({type})</i>}
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
              WEBSITE <ExternalLink size={16} className="external-link" />
            </a>
          )}
          {github_url && (
            <a href={github_url} target="_blank">
              GITHUB <ExternalLink size={16} className="external-link" />
            </a>
          )}
        </span>
      </p>
    </div>
  );
};

export default Project;
