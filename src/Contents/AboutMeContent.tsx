import { Typography } from '@mui/material';
import CustomLink from "../components/CustomComponents/CustomLink";

export const AboutMeContent = () => ({
    paragraphs: [
        <Typography variant="body1">
            My research interests lie in
            <Typography component="span" fontWeight="bold" display="inline">
                {" "}human-computer interaction (HCI) and artificial intelligence (AI), {" "}
            </Typography>
            with a particular focus on designing and developing innovative technologies to advance
            <Typography component="span" fontWeight="bold" display="inline">
                {" "}human health.
            </Typography>
        </Typography>,
        <Typography variant="body1">
            I earned my Master’s degree from the University of Michigan – Ann Arbor’s School of Information,
            specializing in the Human-Computer Interaction track.
            I also hold a Bachelor’s degree in Computer Science from the University of Wisconsin – Madison, with minors in Mathematics and Graphic Design.
        </Typography>,

        <Typography variant="body1">
            I previously worked with
            <CustomLink
                text="Prof. Steve Oney"
                href="https://from.so/Steve_Oney/"
            />
            as my advisor,
            on projects in computer science education,
            exploring how technology can support learning. I also worked with
            <CustomLink
                text="Prof. Yaxing Yao"
                href="https://yaxingyao.cs.vt.edu/"
            />
            as a research assistant, focusing on HCI topics related to data privacy and health. Through these experiences, I discovered my passion for building health systems—particularly those that support mental health. Motivated by this interest,
            I am currently collaborating with
            <CustomLink
                text="Prof. Xuhai Xu"
                href="https://orsonxu.com/"
            />
             on research at the intersection of HCI, AI, and mental health.
        </Typography>,
    ],

    banner: {
        content: (
            <Typography variant="body1">
                🔎 {" "} I’m actively seeking Ph.D. opportunities in Human-Computer Interaction (HCI) for
                <Typography component="span" fontWeight="bold" display="inline">
                    {" "}Spring/Fall 2026.
                </Typography>
            </Typography>
        ),
        variant: 'info' as const,
    }
});