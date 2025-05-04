import {pairProgrammingImg, smartHomeImg} from "../assets/images/publicationImages";


export const publicationContents = [
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
        introduction: "This paper investigates how grouping students with similar or different coding solutions impacts the quality of discussions in peer learning within programming courses, aiming to identify the most effective grouping strategies to enhance student learning outcomes.",
        URLs: {
            pdfUrl: 'test URL',
            paperUrl: 'dsfsdlakfjs',
            presentationUrl: 'sadlkfjaskdl'
        }
    },
    {
        id: '2',
        imageUrl: smartHomeImg,
        title: "\"It would probably turn into a social faux-pas\": Users’ and Bystanders’ Preferences of Privacy Awareness Mechanisms in Smart Homes",
        authors: [
            { name: 'PK Thakkar' },
            { name: 'S He' },
            { name: 'S Xu', isBold: true }, // This author will be bold
            { name: 'DY Huang' },
            { name: 'Y Yao' }
        ],
        conference: 'CHI2022',
        introduction: "This research explored how to effectively deliver privacy-related notifications in smart homes to both users and bystanders. By surveying 136 users and 123 bystanders, the study examined their preferences for receiving privacy notifications and evaluated four mechanisms to increase privacy awareness,such as Data Dashboards and Ambient Light.",
        URLs: {
            pdfUrl: 'test URL',
            paperUrl: 'dsfsdlakfjs',
        }
    },
];