import {
    graphingInlineImg,
    mentalHealthDashboardImg,
    pairProgrammingImg,
    pawsImg,
    smartHomeImg,
} from "../assets/images/publicationImages";
import {pair_programming} from "../assets/PDF";
import {smart_home_privacy} from "../assets/PDF";
import { Publication } from "../types/publication";

export const publicationContents : Publication[] = [
    {
        id: '3',
        imageUrl: mentalHealthDashboardImg,
        title: 'Empowering Mental Health Clinicians with Multimodal Data Insights through a Narrative Dashboard',
        authors: [
            { name: 'Shiyu Xu*', isBold: true, isCoAuth: true },
            { name: 'Ruishi Zou*', isCoAuth: true},
            { name: 'Margaret E. Morris'},
            { name: 'Jihan Ryu'},
            { name: 'Timothy D. Becker'},
            { name: 'Nicholas Allen'},
            { name: 'Anne Marie Albano'},
            { name: 'Randy Auerbach'},
            { name: 'Dan Adler'},
            { name: 'Varun Mishra'},
            { name: 'Lace Padilla'},
            { name: 'Dakuo Wang'},
            { name: 'Ryan Sultan'},
            { name: 'Xuhai “Orson” Xu'},
        ],
        conference: 'CHI2026',
        award: 'Best Paper Honorable Mention (top 5%)',
        urls: {
            paperUrl: 'https://arxiv.org/abs/2601.14641',
            paperWebsiteUrl: 'https://sea-lab.space/MIND/',
            githubUrl: 'https://github.com/sea-lab-space/MIND',
        }
    },
    {
        id: 'graphing-inline',
        imageUrl: graphingInlineImg,
        title: 'Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers',
        authors: [
            { name: 'Siyu Lu*', isCoAuth: true },
            { name: 'Yanhan Liu*', isCoAuth: true },
            { name: 'Shiyu Xu', isBold: true },
            { name: 'Ruishi Zou†' },
            { name: 'Chen Ye' },
        ],
        conference: "CHI '26 Posters",
        urls: {
            paperUrl: 'https://dl.acm.org/doi/10.1145/3772363.3798356',
            paperWebsiteUrl: 'https://salmooonaa.github.io/graphing-inline/',
        },
    },
    {
        id: 'paws',
        imageUrl: pawsImg,
        title: 'PAWS: Empowering Everyday Cannabis Use Disorder Support through a Personalized AI Digital Pet on Smartwatches',
        authors: [
            { name: 'Zhihan Jiang' },
            { name: 'Mengyuan “Millie” Wu' },
            { name: 'Ruishi Zou' },
            { name: 'Shiyu Xu', isBold: true },
            { name: 'Emma Macmanus' },
            { name: 'Steven Liao' },
            { name: 'Ping Zhang' },
            { name: 'Dakuo Wang' },
            { name: 'James L. David' },
            { name: 'Nabila El-Bassel' },
            { name: 'Lena Mamykina' },
            { name: 'Frances R. Levin' },
            { name: 'Ryan Sultan' },
            { name: 'Xuhai “Orson” Xu' },
        ],
        conference: "CHI '26 Workshop",
        urls: {
            pdfUrl: 'https://everydaywearableforhealth.github.io/assets/pdf/CHI26W_Submission_Digital_Pet_for_CUD.pdf',
        },
    },
    {
        id: '1',
        imageUrl: pairProgrammingImg,
        title: 'How Pairing by Code Similarity Influences Discussions in Peer Learning',
        authors: [
            { name: 'Shiyu Xu', isBold: true },
            { name: 'Ashley Ge Zhang' },
            { name: 'Steve Oney'  },
        ],
        conference: 'CHI 2023 LBW',
        // introduction: "This paper investigates how grouping students with similar or different coding solutions impacts the quality of discussions in peer learning within programming courses, aiming to identify the most effective grouping strategies to enhance student learning outcomes.",
        urls: {
            pdfUrl: pair_programming,
            paperUrl: 'https://dl.acm.org/doi/full/10.1145/3544549.3585837',
        }
    },
    {
        id: '2',
        imageUrl: smartHomeImg,
        title: "\"It would probably turn into a social faux-pas\": Users’ and Bystanders’ Preferences of Privacy Awareness Mechanisms in Smart Homes",
        authors: [
            { name: 'Parth Kirankumar Thakkar' },
            { name: 'Shijing He' },
            { name: 'Shiyu Xu', isBold: true },
            { name: 'Danny Yuxing Huang' },
            { name: 'Yaxing Yao' }
        ],
        conference: 'CHI2022',
        // introduction: "This research explored how to effectively deliver privacy-related notifications in smart homes to both users and bystanders. By surveying 136 users and 123 bystanders, the study examined their preferences for receiving privacy notifications and evaluated four mechanisms to increase privacy awareness,such as Data Dashboards and Ambient Light.",
        urls: {
            pdfUrl: smart_home_privacy,
            paperUrl: 'https://dl.acm.org/doi/10.1145/3491102.3502137',
            presentationUrl: 'https://www.youtube.com/watch?v=4Pao_Dg9C2Y'
        }
    },
];
