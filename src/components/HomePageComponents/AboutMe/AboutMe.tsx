import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import Banner from '../../CustomComponents/Banner/Banner';
import {AboutMeContent} from "../../../contents/AboutMeContent";

const AboutMe = () => {
    const content = AboutMeContent();
    const [isMentorsExpanded, setIsMentorsExpanded] = useState(false);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1
        }}>
            {content.introParagraphs}
            {isMentorsExpanded ? content.mentorsExpandedLead : content.mentorsSummary}
            {isMentorsExpanded && content.mentorsDetails}
            <Box mt={1} width={'100%'} display={'flex'} justifyContent={'center'}>
                <Button
                    onClick={() => setIsMentorsExpanded((prev) => !prev)}
                    startIcon={isMentorsExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    sx={{
                        textTransform: 'none',
                        color: 'text.primary',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        width:'100%',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                            color: 'text.primary',
                        },
                    }}
                >
                    {isMentorsExpanded ? 'show less about me' : 'more info about me'}
                </Button>
            </Box>
            <Box mt={2} width={'100%'}>
                <Banner
                    variant={content.banner.variant}
                >
                    {content.banner.content}
                </Banner>
            </Box>
            {/*<Box width={'100%'}>*/}
            {/*    <Banner*/}
            {/*        variant={content.banner2.variant}*/}
            {/*    >*/}
            {/*        {content.banner2.content}*/}
            {/*    </Banner>*/}
            {/*</Box>*/}
        </Box>
    );
};

export default AboutMe;
