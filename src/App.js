import React, { useState, useEffect } from "react";
import "./styles.css";

const Rules = () => {
  return (
    <section className="container">
      <h2>Rules</h2>
      <ul className="rules">
        <li>create a project per day</li>
        <li>
          share your progress on Social Media (
          <a
            href="https://twitter.com/florinpop1705"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://facebook.com/florinpop17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/florinpop17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          ,{" "}
          <a
            href="https://instagram.com/florinpop17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          etc) using the <strong>#100Days100Projects</strong> hashtag
        </li>
        <li>
          an project could be: an app, acomponent, a website, a game, a library,
          etc
        </li>
        <li>You can pick what programing language and framework you like</li>
        <li>
          the project has to be done by <strong>11:59 PM</strong>
        </li>
      </ul>
    </section>
  );
};

const Projects = (props) => {
  const { projects } = props;

  return (
    <section className="container">
      <h2>Projects</h2>
      <div>
        <div className="projects-container">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div className="project" key={project.img_url}>
                <img src={project.img_url} alt={project.name} />
                <div className="project-info">
                  <p>{project.description}</p>
                  <small>
                    <strong>Tags: </strong>{" "}
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </small>
                  <div className="btn-container">
                    <p className="a">See Project</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="lds-dual-ring"></div>
          )}
        </div>
      </div>
    </section>
  );
};

const Contribute = () => {
  return (
    <section className="container">
      <h2>Contribute</h2>
      <p>
        There is also a{" "}
        <a
          href="https://github.com/florinpop17/100Days100Projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repsitory
        </a>{" "}
        created by where you can propose any project you'd like florin pop to
        create! Let's see how creative you can be!{" "}
        <span role="img" aria-label="">
          😄
        </span>
      </p>
    </section>
  );
};

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://substantial-diascia.glitch.me/projects")
      .then((res) => res.json())
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => {
        setProjects([]);
      });
  }, []);

  return (
    <div className="app">
      <header>
        <div className="title">
          <h1>#100Days100Projects</h1>
          <p>~ the official website created by Florin Pop ~</p>
        </div>
      </header>

      <Rules />
      <Projects projects={projects} />
      <Contribute />

      <footer>
        <div className="container">
          <p>
            These projects are created with{" "}
            <img
              src="https://image.flaticon.com/icons/svg/535/535183.svg"
              alt="heart"
            />{" "}
            by <a href="https://florin-pop.com">Florin Pop</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
