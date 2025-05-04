import { SxProps } from '@mui/material';

export const ProjectsPageStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    } as SxProps,
    mainContainer: {
        px: 3,
        py: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        alignItems: 'stretch'
    } as SxProps,
};