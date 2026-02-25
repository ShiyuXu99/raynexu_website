import {Box, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LanguageIcon from '@mui/icons-material/Language';

interface ResourceLinksProps {
    pdfUrl?: string;
    paperUrl?: string;
    paperWebsiteUrl?: string;
    presentationUrl?: string;
}

const ResourceLinks = ({
                           pdfUrl,
                           paperUrl,
                           paperWebsiteUrl,
                           presentationUrl,
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
    ].filter(link => !!link.url); // Only show links with valid URLs

    return (
        <Box sx={{ display: 'flex', gap: 1.5 }}>
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
                        '& .MuiButton-startIcon': { marginRight: '7px' },
                        '&:hover': {
                            color: theme.palette.text.primary,
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
