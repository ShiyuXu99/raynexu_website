export interface PublicationUrls {
    pdfUrl?: string;
    paperUrl?: string;
    presentationUrl?: string;
    paperWebsiteUrl?: string;
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
    introduction?: string;
    urls?: PublicationUrls;
}
