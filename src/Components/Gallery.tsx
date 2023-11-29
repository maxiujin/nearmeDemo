import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Gallery() {
  const images = [
    { src: '/cimg1.png', text: 'Travel anywhere' },
    { src: '/cimg2.png', text: 'Easy and affordable cheaper than a taxi' },
    { src: '/cimg3.png', text: 'We can seat 9 passengers' },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeStep, images.length]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        overflow: 'hidden',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image.src}
          alt={`Slide ${index}`}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            opacity: index === activeStep ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
      {images.map((image, index) => (
        index === activeStep && (
          <Typography
            key={index}
            variant="h6"
            component="div"
            sx={{
              color: 'black', // Changed text color to black
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {image.text}
          </Typography>
        )
      ))}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: '#784BC8', // Changed arrow color to #784BC8
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: '#784BC8', // Changed arrow color to #784BC8
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
