import { Box } from '@mui/material';
import Profile from '../../components/HomePageComponents/Profile/Profile';
import { homePageStyles } from "./HomePageStyles";
import AboutMe from "../../components/HomePageComponents/AboutMe/AboutMe";
import PublicationComponent from "../../components/HomePageComponents/Publication/Publication";
import Footer from "../../components/HomePageComponents/Footer/Footer";
import NewsComponent from "../../components/HomePageComponents/News/NewsComponent";


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

            <Box sx={homePageStyles.newsContainer}>
                <NewsComponent/>
            </Box>
            <Box sx={homePageStyles.publicationContainer}>
                <PublicationComponent />
            </Box>
            <Box sx={homePageStyles.footerContainer}>
                <Footer />
            </Box>

        </Box>
    );
};

export default HomePage;
