import {Box, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ResourceLinksProps {
    pdfUrl?: string;
    paperUrl?: string;
    paperWebsiteUrl?: string;
    presentationUrl?: string;
    githubUrl?: string;
}

const ResourceLinks = ({
                           pdfUrl,
                           paperUrl,
                           paperWebsiteUrl,
                           presentationUrl,
                           githubUrl,
                       }: ResourceLinksProps) => {
    const theme = useTheme();

    const links = [
        {
            name: 'PDF',
            icon: <PictureAsPdfIcon />,
            url: pdfUrl,
            color: theme.palette.text.primary
        },
        {
            name: 'Paper',
            icon: <LinkIcon />,
            url: paperUrl,
            color: theme.palette.text.primary

        },
        {
            name: 'Website',
            icon: <LanguageIcon />,
            url: paperWebsiteUrl,
            color: theme.palette.text.primary
        },
        {
            name: 'Presentation',
            icon: <SlideshowIcon />,
            url: presentationUrl,
            color: theme.palette.text.primary
        },
        {
            name: 'GitHub',
            icon: <GitHubIcon />,
            url: githubUrl,
            color: theme.palette.text.primary
        },
    ].filter(link => !!link.url); // Only show links with valid URLs

    return (
        <Box sx={{ display: 'flex', gap: 0.25, flexWrap: 'wrap' }}>
            {links.map(link => (
                <Button
                    key={link.name}
                    component="a"
                    href={link.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={link.icon}
                    sx={{
                        color: link.color,
                        textTransform: 'none',
                        backgroundColor: 'transparent',
                        borderRadius: 1.5,
                        px: 1,
                        py: 0.375,
                        minWidth: 0,
                        '& .MuiButton-startIcon': {
                            marginRight: '7px',
                            '& > *:first-of-type': {
                                fontSize: '1rem',
                            },
                        },
                        '&:hover': {
                            color: '#0047BB',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {link.name}
                </Button>
            ))}
        </Box>
    );
};

export default ResourceLinks;
