// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#7591C7',
            dark: '#4E6B96',
            light: '#4791db',
        },
        secondary: {
            main: '#dc004e',
            dark: '#9a0036',
            light: '#e33371',
        },
        background: {
            default: '#f4f6f8',
            paper: '#ffffff',
        },
        text: {
            primary: '#4B5056',
            secondary: '#dce0e5',
        },
    },
    typography: {
        fontFamily: [
            '"Inter"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '24px',
            lineHeight: '26px',
            fontWeight: 800,
            color: '#42474D',
        },
        h2: {
            fontSize: '1.5rem',
            lineHeight: 1.2,
            fontWeight: 500,
            color: '#42474D',
            margin: '16px 0',
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: 700,
            color: '#42474D',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '14px',
            color: '#42474D',
            lineHeight: 1.7,
        },
    },
    spacing: 8,
};

const theme = createTheme(themeOptions);

export default theme;
