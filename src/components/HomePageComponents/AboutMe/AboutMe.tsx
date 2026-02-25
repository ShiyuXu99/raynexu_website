import { Box, Button, Collapse } from '@mui/material';
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
            <Collapse in={isMentorsExpanded} timeout={240} unmountOnExit>
                {content.mentorsDetails}
            </Collapse>
            <Box mt={1} width={'100%'} display={'flex'} justifyContent={'center'}>
                <Button
                    onClick={() => setIsMentorsExpanded((prev) => !prev)}
                    startIcon={isMentorsExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    aria-expanded={isMentorsExpanded}
                    sx={{
                        textTransform: 'none',
                        color: 'text.primary',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.5,
                        '&:hover': {
                            backgroundColor: 'action.hover',
                            color: 'text.primary',
                        },
                    }}
                >
                    {isMentorsExpanded ? 'show less about me' : 'show more about me'}
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
