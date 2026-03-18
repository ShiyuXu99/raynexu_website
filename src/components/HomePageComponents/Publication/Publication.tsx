import React from 'react';
import {Box, Chip, Typography} from '@mui/material';
import ResourceLinks from './ResourceLinks';
import SectionHeader from "../../SectionHeader/SectionHeader";
import { publicationContents } from "../../../contents/PublicationContents";

const PublicationComponent = () => {
    return (
        <Box>
            <SectionHeader title="Publications"/>
            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
                                alignItems: 'center',
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
                            {/*<Typography variant="body1" sx={{ fontStyle: 'italic' }}>*/}
                            {/*    {pub.conference}*/}
                            {/*</Typography>*/}

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', minHeight: '28px'}}>
                                <Chip
                                    size='small'
                                    sx={{
                                        height: '20px',
                                        marginRight:'10px',
                                        width: 'fit-content',
                                        borderRadius: '4px',
                                        backgroundColor: '#0047BB',
                                        color: 'white',
                                        fontFamily: '"IBM Plex Sans", sans-serif',
                                        fontStyle:'italic',
                                        fontWeight: 600,
                                        letterSpacing: '0.2px',
                                    }}
                                    label={pub.conference}
                                />
                                {pub.urls && <Box component="span" sx={{ color: 'text.disabled' }}>|</Box>}
                                <ResourceLinks
                                    pdfUrl= {pub.urls?.pdfUrl}
                                    paperUrl={pub.urls?.paperUrl}
                                    presentationUrl={pub.urls?.presentationUrl}
                                    paperWebsiteUrl={pub.urls?.paperWebsiteUrl}
                                />
                            </Box>

                            {/* Introduction */}
                            {/*{pub?.introduction && <Typography variant="body1" sx={{mt: 1}}>*/}
                            {/*    {pub.introduction}*/}
                            {/*</Typography>}*/}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PublicationComponent;
