import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialLinks from "../SocialMediaLink/SocialMediaLink";
import IconText from '../../CustomComponents/IconText';
import { profilePic } from "../../../assets/images";

const Profile = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
        }}>
            <Box
                component="img"
                src={profilePic}
                alt="Profile picture"
                mb={3}
                sx={{
                    width: '80%',
                    maxWidth: '210px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
            />
            <Typography variant="h1">Shiyu (Rayne) Xu</Typography>
            <IconText icon={<LocationOnIcon />} iconSize={"medium"} text="Seattle, WA" />
            <SocialLinks/>
        </Box>
    );
};

export default Profile;