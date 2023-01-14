import { useState } from "react";
import projects from "../data/projects.json";
import ProjectDisplay from "./ProjectDisplay";

export default function ProjectList() {
  const [projectsArray] = useState(projects);

  return (
    <ul className="projects--list">
      <h3>My Projects</h3>
      <p>
        <small>
          *Projects randomly update and may not be available for viewing.
        </small>
      </p>
      {projectsArray.map((project, index) => (
        <li key={index}>
          <ProjectDisplay
            title={project.title}
            description={project.description}
            imageSRC={project.imageSRC}
            projectUrl={project.projectUrl}
          />
        </li>
      ))}
    </ul>
  );
}
