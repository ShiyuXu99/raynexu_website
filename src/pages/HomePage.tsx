import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import {homePageStyles} from "./HomePageStyles";
import AboutMe from "../components/AboutMe/AboutMe";

const HomePage = () => {
    return (
        <Box sx={homePageStyles.root}>
            <Header />
            <Box sx={homePageStyles.mainContainer}>
                <Box sx={homePageStyles.leftBox}>
                    <Profile/>
                </Box>
                <Box sx={homePageStyles.rightBox}>
                    <AboutMe/>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;