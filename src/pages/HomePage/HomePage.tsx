import { Box } from '@mui/material';
import Header from '../../components/Header/Header';
import Profile from '../../components/HomePageComponents/Profile/Profile';
import { homePageStyles } from "./HomePageStyles";
import AboutMe from "../../components/HomePageComponents/AboutMe/AboutMe";
import PublicationComponent from "../../components/HomePageComponents/Publication/Publication";


const HomePage = () => {
    return (
        <Box sx={homePageStyles.root}>
            <Box sx={homePageStyles.mainContainer}>
                <Box sx={homePageStyles.leftBox}>
                    <Profile/>
                </Box>
                <Box sx={homePageStyles.rightBox}>
                    <AboutMe/>
                </Box>
            </Box>
            {/* New container for full-width section header */}
            <Box sx={homePageStyles.newsContainer}>
                {/*<SectionHeader title="News"/>*/}
            </Box>
            <Box sx={homePageStyles.publicationContainer}>
                <PublicationComponent />
            </Box>
        </Box>
    );
};

export default HomePage;