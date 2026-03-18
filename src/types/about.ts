export type AboutInlineSegment =
    | { kind: 'text'; text: string }
    | { kind: 'strong'; text: string }
    | {
        kind: 'link';
        text: string;
        href: string;
        fontWeight?: 'normal' | 'bold' | number;
    };

export interface AboutParagraph {
    segments: AboutInlineSegment[];
}

export interface MentorEntry {
    name: string;
    href: string;
    description: AboutInlineSegment[];
}

export interface AboutBannerContent {
    variant: 'neutral' | 'success' | 'info';
    segments: AboutInlineSegment[];
}

export interface AboutContent {
    introParagraphs: AboutParagraph[];
    mentorsSummary: AboutParagraph;
    mentorsExpandedLead: AboutParagraph;
    mentors: MentorEntry[];
    banner: AboutBannerContent;
    banner2: AboutBannerContent;
}
