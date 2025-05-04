import React from 'react';
import Link from '@mui/material/Link';

interface CustomLinkProps {
    text: string;
    href: string;
    fontWeight?: 'normal' | 'bold' | number;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const CustomLink: React.FC<CustomLinkProps> = ({
                                                   text,
                                                       href,
                                                       fontWeight = 'bold',
                                                       target = '_blank',
                                                   }) => {
    return (
        <>
            {' '}
            <Link
                underline="hover"
                href={href}
                target={target}
                rel="noopener noreferrer"
                fontWeight={fontWeight}
            >
                {text}
            </Link>
            {' '}
        </>
    );
};

export default CustomLink;