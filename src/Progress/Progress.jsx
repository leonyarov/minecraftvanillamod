import React from 'react';
import {Container, keyframes, LinearProgress, linearProgressClasses, styled, Typography} from '@mui/material';


const stripes = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    backgroundImage: `repeating-linear-gradient(
      -45deg, 
      transparent, 
      transparent 0.6rem,
      #1976d266 0.6rem,
       #1976d266 1.2rem
    )`,
    backgroundSize: `200% 200%`,
    animation: `${stripes} 8s linear infinite`,
}));


const LoadingSection = () => {
    return (
        <Container sx={{ my: 3 }}>
            <Typography variant="h6" textAlign="center" gutterBottom>
                In Development. Stay tuned...
            </Typography>
            <BorderLinearProgress variant="determinate" value={-20} />
        </Container>
    );
};

export default LoadingSection;