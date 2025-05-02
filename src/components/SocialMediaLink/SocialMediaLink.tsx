import { Box, IconButton, Tooltip } from '@mui/material';
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    School as GoogleScholarIcon,
    Email as EmailIcon,
} from '@mui/icons-material';
import {
    socialLinksContainerStyles,
    iconButtonStyles
} from './SocialMediaLinkStyles';

interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
    color: string;
}

const SocialLinks = () => {
    const socialLinks: SocialLink[] = [
        {
            name: 'GitHub',
            icon: <GitHubIcon />,
            url: 'https://github.com/yourusername',
            color: '#333',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedInIcon />,
            url: 'https://linkedin.com/in/yourprofile',
            color: '#0077B5',
        },
        {
            name: 'Google Scholar',
            icon: <GoogleScholarIcon />,
            url: 'https://scholar.google.com/citations?user=yourid',
            color: '#4285F4',
        },
        {
            name: 'Email',
            icon: <EmailIcon />,
            url: 'mailto:your@email.com',
            color: '#D44638',
        },
    ];

    return (
        <Box sx={socialLinksContainerStyles}>
            {socialLinks.map((link) => (
                <Tooltip key={link.name} title={link.name} arrow>
                    <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconButtonStyles(link.color)}
                    >
                        {link.icon}
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};

export default SocialLinks;