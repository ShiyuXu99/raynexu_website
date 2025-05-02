import { SxProps } from '@mui/material';

export const homePageStyles = {
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
    leftBox: {
        flex: { md: '0 0 25%' },
        minWidth: { md: 270 },
        // bgcolor: '#e0e0e0',
        p: 2,
        display: 'flex',
        flexDirection: 'column'
    } as SxProps,
    rightBox: {
        flex: { md: '1 1 auto' },
        minWidth: { md: 300 },
        // bgcolor: '#cfd8dc',
        p: 2,
        display: 'flex',
        flexDirection: 'column'
    } as SxProps
};