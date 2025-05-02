import { Box, Typography, SxProps } from "@mui/material";

interface IconTextProps {
    icon: React.ReactNode;
    text: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    iconColor?: string;
    sx?: SxProps;
}

const sizeMap: Record<'small' | 'medium' | 'large' | 'inherit', string | 'inherit'> = {
    small: '16px',
    medium: '18px',
    large: '22px',
    inherit: 'inherit',
};

const IconText = ({
                      icon,
                      text,
                      iconSize = 'medium',
                      iconColor = 'inherit',
                      sx = {}
                  }: IconTextProps) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', ...sx }}>
        <Box
            sx={{
                display: 'flex',
                color: iconColor,
                '& > svg': {
                    fontSize: sizeMap[iconSize],
                }
            }}
        >
            {icon}
        </Box>
        <Typography variant="body1">{text}</Typography>
    </Box>
);

export default IconText;
