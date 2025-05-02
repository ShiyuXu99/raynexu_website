import { Box, Link, Typography } from '@mui/material';
import Banner from '../Banner';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AboutMe = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
        }}>
            <Typography variant="body1">
                My name is Shiyu (Rayne) Xu. I am currently a software engineer working at Moderna. Previously, I earned my Master’s degree from the University of Michigan - Ann Arbor’s School of Information, focusing on the Human-Computer Interaction track. I also earned a Bachelor’s degree in Computer Science from the University of Wisconsin - Madison, with minors in Mathematics and Graphic Design. During my Master’s, I was lucky to have Prof. Steve Oney as my advisor for research and thesis, and I was fortunate to work with Prof. Yaxing Yao as a research assistant.
            </Typography>
            <Typography variant="body1" mb={3}>
                My research interest lies in human-computer interaction, specifically in designing technology that better understands and facilitates human needs, in the areas of mental health and education.
            </Typography>
            <Banner variant="info" icon={<CheckCircleIcon />} iconSize="small">
                <Box>
                    {' '}Your document has been <Link href="/download">uploaded</Link>
                </Box>
            </Banner>
            {/*<Banner*/}
            {/*    icon={<span style={{ fontSize: '24px' }}>🚨</span>}*/}
            {/*    variant="warning"*/}
            {/*>*/}
            {/*    Emergency alert with emoji icon*/}
            {/*</Banner>*/}
        </Box>
    );
};

export default AboutMe;