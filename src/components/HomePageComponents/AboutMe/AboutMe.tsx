import { Box, Button, Collapse, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fragment, useState } from 'react';
import Banner from '../../CustomComponents/Banner/Banner';
import CustomLink from '../../CustomComponents/CustomLink';
import { aboutMeContent } from "../../../contents/AboutMeContent";
import { AboutInlineSegment, AboutParagraph } from '../../../types/about';

const renderInlineSegments = (segments: AboutInlineSegment[]) =>
    segments.map((segment, index) => {
        if (segment.kind === 'link') {
            return (
                <CustomLink
                    key={`${segment.text}-${index}`}
                    text={segment.text}
                    href={segment.href}
                    fontWeight={segment.fontWeight}
                />
            );
        }

        if (segment.kind === 'strong') {
            return (
                <Box
                    component="span"
                    key={`${segment.text}-${index}`}
                    sx={{ fontWeight: 550 }}
                >
                    {segment.text}
                </Box>
            );
        }

        return <Fragment key={`${segment.text}-${index}`}>{segment.text}</Fragment>;
    });

const renderParagraph = (paragraph: AboutParagraph) => (
    <Typography variant="body1">{renderInlineSegments(paragraph.segments)}</Typography>
);

const AboutMe = () => {
    const [isMentorsExpanded, setIsMentorsExpanded] = useState(false);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1
        }}>
            {aboutMeContent.introParagraphs.map((paragraph, index) => (
                <Fragment key={index}>{renderParagraph(paragraph)}</Fragment>
            ))}
            {isMentorsExpanded
                ? renderParagraph(aboutMeContent.mentorsExpandedLead)
                : renderParagraph(aboutMeContent.mentorsSummary)}
            <Collapse in={isMentorsExpanded} timeout={240} unmountOnExit>
                <Box component="ul" sx={{ mt: 0, mb: '1rem', pl: 3 }}>
                    {aboutMeContent.mentors.map((mentor) => (
                        <Box component="li" key={mentor.name} sx={{ mb: 0.5 }}>
                            <Typography variant="body1">
                                <CustomLink text={mentor.name} href={mentor.href} />
                                {renderInlineSegments(mentor.description)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
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
                    variant={aboutMeContent.banner.variant}
                >
                    <Typography variant="body1">
                        {renderInlineSegments(aboutMeContent.banner.segments)}
                    </Typography>
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
