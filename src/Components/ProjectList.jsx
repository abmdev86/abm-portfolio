import { useState } from "react";
import PROJECTS from "../data/projects.json";
import ProjectDisplay from "./ProjectDisplay";
import ImageList from "@mui/material/ImageList";
import { Container } from "@mui/system";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
export default function ProjectList(props) {
  const [projectsArray] = useState(PROJECTS);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" sx={{ mb: 4, color: "white" }}>
        My Projects
      </Typography>
      <Typography variant="subtitle2">
        {`\u26A0\uFE0F`}Projects maybe unavailble for viewing
      </Typography>
      <ImageList {...props}>
        {projectsArray.map((project, index) => (
          <ProjectDisplay
            title={project.title}
            description={project.description}
            src={project.imageSRC}
            url={project.projectUrl}
            key={index}
          />
        ))}
      </ImageList>
    </Container>
  );
}

ProjectList.propTypes = {
  cols: PropTypes.number,
  gap: PropTypes.number,
};
