import React from 'react';
import {Container, Typography, Box, Grid2, useMediaQuery} from '@mui/material';

const sections = [
    {
        title: "Combat System!",
        text: "<span class='blue'> Slash </span>  and <span class='green'> Parry </span>  your way forward with custom combat mechanics and unique animations",
        image: "screenshots/1.png",
    },
    {
        title: "New Enemies!",
        text: "Fight against <span class='pink'> new </span> and challenging monsters",
        image: 'screenshots/3.png',
    },
    {
        title: "Entirely Vanilla!",
        text: "New experience <span class='red'> without </span>  any mods or installations",
        image: 'screenshots/2.png',
    },
];

const Main = () => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Container sx={{ padding: '0 16px' }}>
            <Typography variant={"h1"} fontSize={"xxx-large"} textAlign={'center'}>
                Welcome to a new Minecraft Game Mode made entirely in <span className={'gold'}>vanilla!</span>
            </Typography>
            {sections.map((section, index) => (
                <Grid2 container spacing={4} justifyContent={'space-between'} key={index} alignItems="center"
                       direction={isMobile ? "column" : (index % 2 === 1 ? "row-reverse" : "row")}
                       sx={{ my: 4 }}>
                    <Grid2 item xs={12} md={6} sx={ !isMobile ? { maxWidth: '50%' } : {}}>
                        <Typography variant="h3" className={'black'}  fontWeight={"bold"}
                                    textAlign={isMobile ? "center" : "left"}>{section.title}</Typography>
                        <Typography variant="body1" fontSize={"x-large"}
                                    textAlign={isMobile ? "center" : "left"}
                                    noWrap={false}
                                    dangerouslySetInnerHTML={{__html:section.text}}/>
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Box component="img" src={section.image} alt={`Section ${index + 1}`} sx={isMobile ? {width: "100%"} : { width: '500px' }} borderRadius={2} boxShadow={1} />
                    </Grid2>
                </Grid2>
            ))}
        </Container>
    );
};

export default Main;