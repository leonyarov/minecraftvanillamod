import React from 'react';
import {Container, Box, Typography, Button, Avatar} from '@mui/material';
import './Socials.css';

const Socials = () => {
    return (
        <Box className="patreon" my={2} mb={5}>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h4" color="white">
                        Join Our Patreon
                    </Typography>
                    <Avatar src={"patreon.png"} sx={{ ml: 1 }} />
                </Box>
                <Typography variant="body1" textAlign="center" color="white" gutterBottom>
                    Follow us on <span className={'orange'}>Patreon </span> to support the development process and receive exclusive updates
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Button variant="contained" sx={{ backgroundColor: '#f96854', '&:hover': { backgroundColor: '#e55744' } }} href="https://www.patreon.com" target="_blank">
                        Join Patreon
                    </Button>
                    <Button
                        variant="contained"
                        href="https://discord.com/invite/your-invite-link"
                        sx={{ backgroundColor: '#7289da', '&:hover': { backgroundColor: '#5b6eae' }, ml: 1 }}
                    >
                        Join Discord
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Socials;