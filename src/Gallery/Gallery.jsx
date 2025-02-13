import React from 'react';
import { Container, Box, Typography, Grid2 } from '@mui/material';

const galleryItems = [
    '4.png', 'Armor Smith.gif', 'bellbrother.gif', 'Rolly_Golem.gif', 'swordgolem.gif'
];

const Gallery = () => {
    return (
        <Container sx={{mt:10}}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={5}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Gallery
                </Typography>
                <Grid2 container spacing={2}>
                    {galleryItems.map((item, index) => (
                        <Grid2 item size={{xs: 12, md: 4}} key={index}>
                            <Box component="img" src={item} alt={`Gallery item ${index + 1}`} width="100%" borderRadius={2} />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Container>
    );
};

export default Gallery;