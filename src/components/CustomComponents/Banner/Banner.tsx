import { Box, Typography, SxProps } from '@mui/material';
import { ReactNode } from 'react';

type BannerVariant = 'neutral' | 'success' | 'info' ;

interface BannerProps {
    children: string | ReactNode;
    variant?: BannerVariant;
    icon?: ReactNode;
    iconSize?: 'small' | 'medium' | 'large' | number; // New prop
    sx?: SxProps;
}

const variantStyles = {
    neutral: { bg: '#e3f2fd', border: '#7591C7' },
    success: { bg: '#e8f5e9', border: '#a5d6a7' },
    info: { bg: '#fff8e1', border: '#ffe082' },
};

const Banner = ({
                    children,
                    variant = 'info',
                    sx = {}
                }: BannerProps) => {
    const styles = variantStyles[variant];

    return (
        <Box
            sx={{
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 2,
                mb: 2,
                borderRadius: '4px',
                backgroundColor: styles.bg,
                // borderLeft: `4px solid ${styles.border}`,
                border: `0.7px solid ${styles.border}`,
                ...sx,
            }}
        >
            <Typography variant="body1" component="div">
                {children}
            </Typography>
        </Box>
    );
};

export default Banner;