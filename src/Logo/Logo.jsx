import React from 'react';
import { Container, Box } from '@mui/material';

const CenteredLogoSection = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2, marginY: 1 }}>
            <Box component="img" src="logo.png" alt="Logo" sx={{ width: '20vw' }} />
        </Container>
    );
};

export default CenteredLogoSection;