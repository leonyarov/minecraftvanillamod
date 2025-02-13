import React from 'react';
import {Container, Typography, Box, Grid2} from '@mui/material';

const About = () => {
    return (
        <Box my={2} mb={5}>
            <Container>
                <Typography variant="h4"  fontSize={'xxx-large'} color="primary" textAlign="center" gutterBottom>
                    About the project
                </Typography>
                <Grid2 container spacing={2} alignItems="center" justifyContent={'space-between'}>
                    <Grid2 item size={{xs: 12, md: 6}}>
                        <Typography variant="body1" fontSize={'larger'} textAlign={{xs: 'center', md: "left"}} color="textSecondary">
                            Hello! My name is <span className={'black'}> Nikolai </span>. This project is developed, without a knowledge in coding and
                            started as 3D modeling exercise in BlockBench, but then I decided to make it into a gamemode.
                            Minecraft supports resource packs and there are online tools to create Command Block commands,
                            which is much more simpler and straightforward than learning Java and creating a mod. On the other hand this allows me to potentially run the game
                            on vanilla servers and have more people play it.
                            Im am dedicated to creating this unique and engaging mod, since I have been working on it for the past year.
                            I had a lot of progress done since I started it, and I have a lot of ideas for the future.
                            Expect new updates and features. <span className={'blue'}> Stay Tuned! </span> <br/>
                            There is no release date yet, the development slowed down since I started a new job. <br/>
                        </Typography>
                    </Grid2>
                    <Grid2 item size={{xs: 12, md: 6}}>
                        <Box component={"img"} src={"bird.gif"} width={'100%'}/>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default About;