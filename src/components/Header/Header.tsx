import React from 'react';
import { AppBar, Toolbar, Typography, Box, SxProps, Theme } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavItem {
    label: string;
    path: string;
}

const navItemBaseStyles: SxProps<Theme> = {
    textDecoration: 'none',
    color: 'text.primary',
    position: 'relative',
    '&:hover': {
        color: 'primary.main',
    },
};

const navItemUnderlineStyles = (active: boolean): SxProps<Theme> => ({
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: active ? 'primary.main' : 'transparent',
    },
});

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<string>('Home');

    const navItems: NavItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'CV', path: '/cv' },
    ];

    return (
        <Box mb={4}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <Toolbar sx={{ justifyContent: 'flex-start', width: '100%' }}>
                <Box sx={{ display: 'flex', gap: 4 }}>
                    {navItems.map((item) => (
                        <Typography
                            key={item.label}
                            component={Link}
                            to={item.path}
                            variant="body1"
                            onClick={() => setActiveTab(item.label)}
                            sx={{
                                ...navItemBaseStyles,
                                ...navItemUnderlineStyles(activeTab === item.label),
                            }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default Header;