import {Link} from "@mui/material";
import React from "react";

export interface NewsItem {
    message: React.ReactNode;
    date: string;
}


export const newsItems: NewsItem[] = [
    {
        message: 'Our paper MIND was conditionally accepted to CHI 2026. See you in Barcelona!\n',
        date: 'Jan 2026',
    },
    // {
    //     message: (
    //         <>
    //             New project launch: <Link href="https://example.com" target="_blank" rel="noopener noreferrer">Read more</Link>
    //         </>
    //     ),
    //     date: 'Dec 2025',
    // },
];