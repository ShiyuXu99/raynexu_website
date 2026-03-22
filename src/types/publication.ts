export interface PublicationUrls {
    pdfUrl?: string;
    paperUrl?: string;
    presentationUrl?: string;
    paperWebsiteUrl?: string;
    githubUrl?: string;
}

export interface PublicationAuthor {
    name: string;
    isBold?: boolean;
    isCoAuth?: boolean;
}

export interface Publication {
    id: string;
    imageUrl: string;
    title: string;
    authors: PublicationAuthor[];
    conference: string;
    award?: string;
    introduction?: string;
    urls?: PublicationUrls;
}
