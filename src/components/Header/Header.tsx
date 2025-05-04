import React, {useEffect} from 'react';
import { AppBar, Toolbar, Typography, Box, SxProps, Theme } from '@mui/material';
import { Link } from 'react-router-dom';
import {shiyu_xu_CV} from "../../assets/PDF";
import { useLocation as useRouterLocation } from 'react-router-dom';

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
    const { pathname } = useRouterLocation();  // Destructure pathname directly
    const [activeTab, setActiveTab] = React.useState<string>('Home');

    useEffect(() => {
        if (pathname === '/projects') {
            setActiveTab('Projects');
        } else if (pathname === '/') {
            setActiveTab('Home');
        }
    }, [pathname]);  // Only depend on pathname

    const navItems: NavItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        // { label: 'CV', path: '/cv' },
    ];

    return (
        // remove the sx of Box will remove sticky header
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1999 }}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
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
                    <Typography
                        key="CV"
                        component="a"
                        href={shiyu_xu_CV}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body1"
                        sx={{
                            ...navItemBaseStyles,
                            ...navItemUnderlineStyles(activeTab === 'CV'),
                        }}
                    >
                        CV
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default Header;