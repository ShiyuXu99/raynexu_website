// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#506e97',
            dark: '#34485C',
            light: '#6E8296',
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
            // 'Source Sans 3',
            // 'Plus Jakarta Sans',
            // 'JetBrains Mono',
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
            color: '#2b2d30',
        },
        h2: {
            fontSize: '22px',
            lineHeight: 1.3,
            fontWeight: 600,
            color: '#2b2d30',
            margin: '12px 0 8px',
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#3A3F45',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '15.5px',
            color: '#2b2d30',
            fontWeight: 400,
            lineHeight: 1.65,
        },
        body2: {
            fontSize: '12px',
            lineHeight: 1.6,
        },
    },
    spacing: 8,
};

const theme = createTheme(themeOptions);

export default theme;
