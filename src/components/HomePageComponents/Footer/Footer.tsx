import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 3, color: 'text.secondary' }}>
            <Typography variant="body2">
                Last updated: January 2026. All Rights Reserved.
            </Typography>
            <Typography variant="body2" sx={{fontSize:'11px'}}>
                Design inspired by{' '}
                <Box
                    component="a"
                    href="https://ruishizou.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'inherit', textDecoration: 'underline' }}
                >
                    Ruishi Zou
                </Box>
                .
            </Typography>
        </Box>
    );
};

export default Footer;
