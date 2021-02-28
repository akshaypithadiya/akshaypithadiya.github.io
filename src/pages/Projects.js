import React from "react";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "confviz",
      year: "2021",
      desc:
        "Statistics, Visualizations and Paper Links of Machine Learning Conferences",
      website_url: "https://confviz.now.sh/",
      github_url: "https://github.com/akshaypithadiya/confviz",
    },
    {
      id: 2,
      name: "TorchExpo",
      year: "2020",
      desc:
        "Collection of models and extensions for mobile deployment in PyTorch",
      website_url: "https://torchexpo.xyz/",
      github_url: null,
    },
    {
      id: 3,
      name: "connex",
      year: "2018",
      desc:
        "Portal for college where students can write posts, take notes, upload photos, add comments and connect with other students",
      website_url: null,
      github_url: "https://github.com/akshaypithadiya/connex",
    },
  ];
  return (
    <div className="Projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>These are some of the projects i have worked on</p>
      </div>
      {projects.map((project) => {
        const { id, name, year, desc, website_url, github_url } = project;
        return (
          <Project
            key={id}
            name={name}
            year={year}
            desc={desc}
            website_url={website_url}
            github_url={github_url}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Projects;
