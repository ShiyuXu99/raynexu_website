// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#3d6c9f',   // muted academic blue
            dark: '#2C4E73',
            light: '#6B8FB3',
        },
        secondary: {
            main: '#8A4F7D',   // muted plum (替代红色)
            dark: '#6E3E64',
            light: '#B07FA6',
        },
        background: {
            default: '#F6F7F9',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#2E3440',
            secondary: '#5A6270',
        },
    },
    typography: {
        fontFamily: [
            '"IBM Plex Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),

        h1: {
            fontSize: '26px',
            lineHeight: 1.25,
            fontWeight: 700,
            color: '#42474D',
        },
        h2: {
            fontSize: '22px',
            lineHeight: 1.3,
            fontWeight: 600,
            color: '#2E3440',
            margin: '12px 0 8px',
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#3A3F45',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '15px',
            color: '#2E3440',
            lineHeight: 1.6,
        },
    },
    spacing: 8,
};

const theme = createTheme(themeOptions);

export default theme;
