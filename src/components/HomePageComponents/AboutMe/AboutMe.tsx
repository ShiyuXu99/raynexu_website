import { Box, Typography } from '@mui/material';
import Banner from '../../CustomComponents/Banner/Banner';
import {AboutMeContent} from "../../../Contents/AboutMeContent";

const AboutMe = () => {
    const content = AboutMeContent();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
        }}>
            {content.paragraphs}
            <Box mt={3} width={'100%'}>
                <Banner
                    variant={content.banner.variant}
                >
                    {content.banner.content}
                </Banner>
            </Box>
        </Box>
    );
};

export default AboutMe;