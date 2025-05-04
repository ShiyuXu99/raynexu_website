import React from 'react';
import { Typography, Divider, Box, SxProps, Theme } from '@mui/material';

interface SectionHeaderProps {
    title: string;
    sx?: SxProps<Theme>;
    dividerSx?: SxProps<Theme>;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         title,
                                                         sx = {},
                                                         dividerSx = {}
                                                     }) => {
    return (
        <Box sx={{ ...sx }}>
            <Typography
                variant="h2"
            >
                {title}
            </Typography>
            <Divider
                sx={{
                    height: '0.5px',
                    // borderColor: 'divider',
                    width: '100%',
                }}
            />
        </Box>
    );
};

export default SectionHeader;