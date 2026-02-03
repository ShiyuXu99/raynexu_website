import {mentalHealthDashboardImg, pairProgrammingImg, smartHomeImg} from "../assets/images/publicationImages";
import {pair_programming} from "../assets/PDF";
import {smart_home_privacy} from "../assets/PDF";

interface URLs {
    pdfUrl?: string;
    paperUrl?: string;
    presentationUrl?: string;
    paperWebsiteUrl?: string;
}

interface Author {
    name: string;
    isBold?: boolean;
    isCoAuth?: boolean;
}

interface Publication {
    id: string;
    imageUrl: string;
    title: string;
    authors: Author[];
    conference: string;
    introduction?: string;
    URLs?: URLs; // presentationUrl is optional here
}

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
        URLs: {
            paperUrl: 'https://arxiv.org/abs/2601.14641',
            paperWebsiteUrl: 'https://sea-lab.space/MIND/',
        }
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
        conference: 'CHI2023',
        // introduction: "This paper investigates how grouping students with similar or different coding solutions impacts the quality of discussions in peer learning within programming courses, aiming to identify the most effective grouping strategies to enhance student learning outcomes.",
        URLs: {
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
        URLs: {
            pdfUrl: smart_home_privacy,
            paperUrl: 'https://dl.acm.org/doi/10.1145/3491102.3502137',
            presentationUrl: 'https://www.youtube.com/watch?v=4Pao_Dg9C2Y'
        }
    },
];