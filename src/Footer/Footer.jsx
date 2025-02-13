import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <Box className="footer">
            <Container>
                <Typography variant="body1" textAlign="center" color="white">
                    2025
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;