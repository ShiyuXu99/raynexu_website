import { SxProps } from '@mui/material';

export const socialLinksContainerStyles: SxProps = {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    mt: 4,
};

export const iconButtonStyles = (color: string): SxProps => ({
    color: color,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'action.hover',
    },
    transition: 'all 0.3s ease',
    fontSize: '18px',
    width: 22,
    height: 22,
    '& svg': {
        fontSize: 'inherit'
    }
});