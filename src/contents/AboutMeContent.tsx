import { AboutContent } from '../types/about';

export const aboutMeContent: AboutContent = {
    introParagraphs: [
        {
            segments: [
                { kind: 'strong', text: 'Research Interests: ' },
                { kind: 'text', text: 'Human-computer Interaction | Human-centered AI | Health - Mental Health focused' },
            ],
        },
        {
            segments: [
                { kind: 'text', text: 'Hi! my name is Shiyu (Rayne) Xu, ' +
                        'I am an incoming PhD student at University of Michigan- Ann Arbor, ' +
                        'where I will be advised by ' },
                {
                    kind: 'link',
                    text: 'Prof. Dan Adler',
                    href: 'https://dadler.co',
                    fontWeight: 600,
                },
                { kind: 'text', text: '. ' },
                { kind: 'text', text: 'Previously, I earned my master’s degree in Information (HCI) from the University of Michigan, my bachelor’s degree in Computer Science from the University of Wisconsin–Madison, and worked for three years as a full stack engineer.' },

            ],
        },
        {
            segments: [
                { kind: 'text', text: 'My research focuses on ' },
                { kind: 'strong', text: 'designing and developing intelligent, human-centered systems' },
                { kind: 'text', text: ' that enhance human wellbeing and support better sense-making in both daily and clinical contexts.' },
            ],
        },

    ],
    mentorsSummary: {
        segments: [
            { kind: 'text', text: 'I have been incredibly fortunate to learn from mentors including ' },
            { kind: 'link', text: 'Prof. Xuhai Xu', href: 'https://orsonxu.com' },
            { kind: 'text', text: ', ' },
            { kind: 'link', text: 'Prof. Steve Oney', href: 'https://from.so/Steve_Oney/' },
            { kind: 'text', text: ' and ' },
            { kind: 'link', text: 'Prof. Yaxing Yao', href: 'https://yaxingyao.cs.vt.edu/' },
            { kind: 'text', text: ' who have guided and inspired my research journey.' },
        ],
    },
    mentorsExpandedLead: {
        segments: [
            { kind: 'text', text: 'I have been incredibly fortunate to learn from exceptional mentors who have guided and inspired my research journey:' },
        ],
    },
    mentors: [
        {
            name: 'Prof. Xuhai (Orson) Xu',
            href: 'https://orsonxu.com',
            description: [
                { kind: 'text', text: ' at the ' },
                { kind: 'link', text: 'SEA Lab', href: 'https://sea-lab.space/' },
                { kind: 'text', text: ' at Columbia University, where I worked on research at the intersection of Human–Computer Interaction (HCI), large language models (LLMs), and mental health, utilizing multimodal data such as wearable sensing data.' },
            ],
        },
        {
            name: 'Prof. Steve Oney',
            href: 'https://from.so/Steve_Oney/',
            description: [
                { kind: 'text', text: ' at the University of Michigan, Ann Arbor, where I explored HCI and computer science education, focusing on how technology can support learning.' },
            ],
        },
        {
            name: 'Prof. Yaxing Yao',
            href: 'https://yaxingyao.cs.vt.edu/',
            description: [
                { kind: 'text', text: ' as a summer research intern in his lab, studying HCI topics related to data privacy and health.' },
            ],
        },
    ],
    banner: {
        segments: [
            { kind: 'strong', text: '🧳 I plan to attend CHI 2026 with my paper listed ' },
            { kind: 'link', text: 'here', href: 'https://programs.sigchi.org/chi/2026/search/content?searchKey=Shiyu%20xu' },
            { kind: 'strong', text: '! See you in Barcelona!' },
        ],
        variant: 'neutral',
    },
    banner2: {
        segments: [
            { kind: 'text', text: '🧳 I plan to attend CHI 2026! See you in Barcelona! Check out my papers in the CHI 2026 program! ' },
            { kind: 'strong', text: 'Fall 2026' },
            { kind: 'text', text: '!' },        ],
        variant: 'neutral',
    },
};
