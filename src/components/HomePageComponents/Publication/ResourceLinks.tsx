import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import SlideshowIcon from '@mui/icons-material/Slideshow';

interface ResourceLinksProps {
    pdfUrl?: string;
    paperUrl?: string;
    presentationUrl?: string;
}

const ResourceLinks = ({
                           pdfUrl,
                           paperUrl,
                           presentationUrl,
                       }: ResourceLinksProps) => {
    const theme = useTheme();

    const links = [
        {
            name: 'PDF',
            icon: <PictureAsPdfIcon />,
            url: pdfUrl,
            color: theme.palette.text.secondary
        },
        {
            name: 'Paper',
            icon: <LinkIcon />,
            url: paperUrl,
            color: theme.palette.text.secondary

        },
        {
            name: 'Presentation',
            icon: <SlideshowIcon />,
            url: presentationUrl,
            color: theme.palette.text.secondary
        },
    ].filter(link => !!link.url); // Only show links with valid URLs

    if (links.length === 0) return null;

    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
                        '&:hover': {
                            color: theme.palette.primary.main,
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
