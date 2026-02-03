import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionHeader from '../../SectionHeader/SectionHeader';
import {newsItems} from "../../../contents/NewsContent";



const NewsComponent = () => {

    return (
        <Box>
            <SectionHeader title="News" />
            <Box mt={2} mb={1} sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                {newsItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            gap: 2,
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}
                    >
                        <Typography variant="body1" sx={{ flex: 1, minWidth: 0, marginRight:'28px', lineHeight:'18px' }}>
                            {item.message}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}
                        >
                            {item.date}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default NewsComponent;
