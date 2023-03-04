import { Grid } from "@mui/material";
import ProjectData from '../../data/projects.json';
import ProjectView from "./ProjectView";


export default function Projects() {
    return (
        <Grid container spacing={2}>
            {
                ProjectData.map((project, index) => (
                    <ProjectView project={project} key={index} />
                ))
            }
        </Grid>)
}