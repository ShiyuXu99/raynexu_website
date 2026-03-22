import React from 'react';
import {Box, Chip, Typography} from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ResourceLinks from './ResourceLinks';
import SectionHeader from "../../SectionHeader/SectionHeader";
import { publicationContents } from "../../../contents/PublicationContents";

const PublicationComponent = () => {
    return (
        <Box>
            <SectionHeader title="Publications" sx={{ mb: 1 }} dividerSx={{ opacity: 0.55 }} />
            <Box mt={2.5} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {publicationContents.map((pub) => (
                    <Box
                        key={pub.id}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 3,
                            alignItems: { xs: 'stretch', md: 'center' },
                            px: { xs: 1, md: 1 },
                            py: { xs: 1, md: 1 },
                            borderRadius: 3,
                            backgroundColor: 'transparent',
                            transition: 'background-color 180ms ease, box-shadow 180ms ease',
                            '&:hover': {
                                backgroundColor: '#f7f8fb',
                                boxShadow: '0 10px 28px rgba(15, 23, 42, 0.05)',
                            },
                            '&:hover .publication-thumbnail': {
                                boxShadow: 'none',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flex: { md: '0 0 180px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: { xs: 'stretch', md: 'center' },
                            }}
                        >
                            <Box
                                className="publication-thumbnail"
                                sx={{
                                    width: { xs: '100%', md: 180 },
                                    maxWidth: { xs: 320, md: 'none' },
                                    aspectRatio: '1.35 / 1',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    backgroundColor: 'transparent',
                                    transition: 'background-color 180ms ease, box-shadow 180ms ease',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={pub.imageUrl}
                                    alt={pub.title}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'center center',
                                        display: 'block',
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 0.65,
                        }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    lineHeight: 1.4,
                                    fontSize: '16px',
                                }}
                            >
                                {pub.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.55,
                                }}
                            >
                                {pub.authors.map((author, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: author.isBold ? 600 : 400,
                                            color: author.isBold ? 'rgb(43,46,53)' : undefined,
                                            marginRight: index < pub.authors.length - 1 ? '4px' : '0',
                                        }}
                                    >
                                {author.name}{index < pub.authors.length - 1 ? ',' : ''}
                                    </span>
                                ))}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, minHeight: '20px', pt: 0.1 }}>
                                <Chip
                                    size='small'
                                    sx={{
                                        height: '20px',
                                        width: 'fit-content',
                                        borderRadius: '4px',
                                        backgroundColor: 'transparent',
                                        color: '#0047BB',
                                        border: '1px solid rgba(0, 71, 187, 0.35)',
                                        fontStyle:'italic',
                                        fontWeight: 600,
                                        letterSpacing: '0.1px',
                                        '& .MuiChip-label': {
                                            px: 1,
                                        },
                                    }}
                                    label={pub.conference}
                                />
                                {pub.award && (
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.45,
                                            color: '#8A5A14',
                                            fontSize: '0.88rem',
                                            lineHeight: 1.3,
                                            fontWeight: 500,
                                        }}
                                    >
                                        <EmojiEventsOutlinedIcon sx={{ fontSize: '0.95rem' }} />
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: 'inherit',
                                                lineHeight: 'inherit',
                                                fontWeight: 'inherit',
                                                color: 'inherit',
                                            }}
                                        >
                                            {pub.award}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                    pt: 0.05,
                                    minHeight: '28px',
                                }}
                            >
                                <ResourceLinks
                                    pdfUrl= {pub.urls?.pdfUrl}
                                    paperUrl={pub.urls?.paperUrl}
                                    presentationUrl={pub.urls?.presentationUrl}
                                    paperWebsiteUrl={pub.urls?.paperWebsiteUrl}
                                    githubUrl={pub.urls?.githubUrl}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PublicationComponent;
