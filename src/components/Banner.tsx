import { Box, Typography, SxProps } from '@mui/material';
import { ReactNode } from 'react';

type BannerVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

interface BannerProps {
    children: string | ReactNode;
    variant?: BannerVariant;
    icon?: ReactNode;
    iconSize?: 'small' | 'medium' | 'large' | number; // New prop
    sx?: SxProps;
}

const variantStyles = {
    info: { bg: '#e3f2fd', border: '#90caf9', iconColor: '#2196f3' },
    success: { bg: '#e8f5e9', border: '#a5d6a7', iconColor: '#4caf50' },
    warning: { bg: '#fff8e1', border: '#ffe082', iconColor: '#ffc107' },
    danger: { bg: '#ffebee', border: '#ef9a9a', iconColor: '#f44336' },
    neutral: { bg: '#f5f5f5', border: '#e0e0e0', iconColor: '#757575' },
};

const Banner = ({
                    children,
                    variant = 'info',
                    icon,
                    iconSize = 'medium', // Default size
                    sx = {}
                }: BannerProps) => {
    const styles = variantStyles[variant];

    // Convert size to numeric value if needed
    const getIconSize = () => {
        if (typeof iconSize === 'number') return iconSize;
        switch (iconSize) {
            case 'small': return 22;
            case 'medium': return 24;
            case 'large': return 32;
            default: return 24;
        }
    };

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
                borderLeft: `4px solid ${styles.border}`,
                ...sx,
            }}
        >
            {icon && (
                <Box sx={{
                    color: styles.iconColor,
                    display: 'flex',
                    flexShrink: 0,
                    fontSize: getIconSize(), // Apply the size
                    '& svg': {
                        fontSize: 'inherit' // Makes the icon inherit this size
                    }
                }}>
                    {icon}
                </Box>
            )}

            <Typography variant="body1" component="div">
                {children}
            </Typography>
        </Box>
    );
};

export default Banner;