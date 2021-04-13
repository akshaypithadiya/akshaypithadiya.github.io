import React from 'react';
import Project from '../components/project/Project';

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: 'Skim',
      type: null,
      year: '2021',
      desc: 'Skim through papers in this fast moving research world',
      website_url: 'https://skim.vercel.app/about',
      tags: ['React', 'JavaScript', 'SASS'],
      github_url: 'https://github.com/SkimHQ',
    },
    {
      id: 1,
      name: 'confviz',
      type: 'open source',
      year: '2020',
      desc:
        'Statistics, Visualizations and Paper Links of Machine Learning Conferences',
      website_url: 'https://confviz.now.sh/',
      tags: ['React', 'JavaScript', 'SASS', 'Flask'],
      github_url: 'https://github.com/akshaypithadiya/confviz',
    },
    {
      id: 2,
      name: 'TorchExpo',
      type: 'open source',
      year: '2020',
      desc:
        'Collection of models and extensions for mobile deployment in PyTorch',
      tags: ['React', 'Apollo GraphQL', 'JavaScript', 'LESS'],
      website_url: 'https://torchexpo.xyz/',
      github_url: 'https://github.com/torchexpo',
    },
    {
      id: 3,
      name: 'connex',
      type: 'personal',
      year: '2018',
      desc:
        'Portal for college where students can write posts, take notes, upload photos, add comments and connect with other students',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      website_url: null,
      github_url: 'https://github.com/akshaypithadiya/connex',
    },
  ];
  return (
    <div className="Projects">
      <div className="projects-header">
        <center>
          <h2>Projects</h2>
        </center>
        <p>These are some of the projects i have worked on :</p>
      </div>
      {projects.map((project) => {
        const {
          id,
          name,
          type,
          year,
          desc,
          tags,
          website_url,
          github_url,
        } = project;
        return (
          <Project
            key={id}
            name={name}
            type={type}
            year={year}
            desc={desc}
            tags={tags}
            website_url={website_url}
            github_url={github_url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
