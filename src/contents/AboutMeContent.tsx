import { Typography } from '@mui/material';
import CustomLink from "../components/CustomComponents/CustomLink";

export const AboutMeContent = () => ({
    introParagraphs: [
        <Typography variant="body1">
            <strong>Research Interests: </strong> Human-computer Interaction | Human-centered AI | Health (mental health focused) | Education
        </Typography>,
        <Typography variant="body1">
            Hi! my name is Shiyu (Rayne) Xu, my research focuses on <strong>designing and developing intelligent, human-centered systems</strong> that enhance human wellbeing and support better sense-making in both daily and clinical contexts.
        </Typography>,

        <Typography variant="body1">
            I hold a Master’s degree in Human-Computer Interaction from the <CustomLink
            fontWeight={600}
            text="University of Michigan"
            href="https://www.si.umich.edu"
        /> and a Bachelor’s degree in Computer Science from the University of Wisconsin–Madison, with minors in Mathematics and Graphic Design, and have three years of experience as a full-stack engineer.
        </Typography>,
    ],
    mentorsSummary: (
        <Typography variant="body1">
            I have been incredibly fortunate to learn from mentors including <CustomLink
            text="Prof. Xuhai Xu"
            href="https://orsonxu.com"
        />, <CustomLink
            text="Prof. Steve Oney"
            href="https://from.so/Steve_Oney/"
        /> and <CustomLink
            text="Prof. Yaxing Yao"
            href="https://yaxingyao.cs.vt.edu/"
        /> who have guided and inspired my research journey.
        </Typography>
    ),
    mentorsExpandedLead: (
        <Typography variant="body1">
            I have been incredibly fortunate to learn from exceptional mentors who have guided and inspired my research journey:
        </Typography>
    ),
    mentorsDetails: (
        <ul style={{ marginTop: 0, marginBottom: '1rem' }}>
            <li>
                <Typography variant="body1">
                    <CustomLink
                        text="Prof. Xuhai (Orson) Xu"
                        href="https://orsonxu.com"
                    /> — at the <CustomLink
                        text="SEA Lab"
                        href="https://sea-lab.space/"
                    /> at Columbia University, where I worked on research at the intersection of
                    Human–Computer Interaction (HCI), large language models (LLMs), and
                    mental health, utilizing multimodal data such as wearable sensing data.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <CustomLink
                        text="Prof. Steve Oney"
                        href="https://from.so/Steve_Oney/"
                    /> — at the University of Michigan, Ann Arbor, where I explored
                    HCI and computer science education, focusing on how technology can support learning.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <CustomLink
                        text="Prof. Yaxing Yao"
                        href="https://yaxingyao.cs.vt.edu/"
                    /> — as a summer research intern in his lab, studying
                    HCI topics related to data privacy and health.
                </Typography>
            </li>
        </ul>
    ),

    banner: {
        content: (
            <Typography variant="body1">
                🔎{"  "} I’m actively seeking Ph.D. opportunities in Human-Computer Interaction (HCI) for{" "}
                <strong>Fall 2026</strong>!
            </Typography>
        ),
        variant: 'info' as const,
    },

    banner2: {
        content: (
            <Typography variant="body1">
                📄{"  "} I am currently collaborating with Dr. Xuhai Xu on HCI and mental health research for the summer of 2025.
            </Typography>
        ),
        variant: 'neutral' as const,
    },
});
