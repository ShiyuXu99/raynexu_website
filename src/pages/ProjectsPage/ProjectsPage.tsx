import {Box} from "@mui/material";
import { ProjectsPageStyles } from "./ProjectsPageStyles";
import {ProjectsIntro} from "../../Contents/ProjectsContents/ProjectsIntro";

const ProjectsPage = () => {
    return (
        <Box sx={ProjectsPageStyles.root}>
            <Box sx={ProjectsPageStyles.mainContainer}>
            <ProjectsIntro/>
            </Box>
        </Box>
    );
};


export default ProjectsPage;