import React from 'react';
import { Box, Typography } from '@mui/material';
import ResourceLinks from './ResourceLinks';
import SectionHeader from "../../SectionHeader/SectionHeader";
import { publicationContents } from "../../../Contents/PublicationContents";

const PublicationComponent = () => {
    return (
        <Box>
            <SectionHeader title="Publications"/>
            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {publicationContents.map((pub) => (
                    <Box
                        key={pub.id}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 3,
                        }}
                    >
                        {/* Left Box - Image */}
                        <Box
                            sx={{
                                flex: { md: '0 0 180px' },
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'flex-start',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={pub.imageUrl}
                                alt={pub.title}
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>

                        {/* Right Box - Details */}
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1px'
                        }}>
                            {/* Title */}
                            <Typography variant="body1" sx={{ fontWeight: '700' }}>
                                {pub.title}
                            </Typography>

                            {/* Authors with bold styling */}
                            <Typography variant="body1" component="div">
                                {pub.authors.map((author, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: author.isBold ? 'bold' : 'normal',
                                            marginRight: index < pub.authors.length - 1 ? '4px' : '0'
                                        }}
                                    >
                    {author.name}{index < pub.authors.length - 1 ? ',' : ''}
                  </span>
                                ))}
                            </Typography>

                            {/* Conference */}
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                {pub.conference}
                            </Typography>

                            {/* Introduction */}
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                {pub.introduction}
                            </Typography>

                            <ResourceLinks
                                pdfUrl= {pub.URLs?.pdfUrl}
                                paperUrl={pub.URLs?.paperUrl}
                                presentationUrl={pub.URLs?.presentationUrl}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PublicationComponent;