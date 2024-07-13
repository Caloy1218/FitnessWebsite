import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import back from '../Assets/Transformation/back.png';
import backfat from '../Assets/Transformation/backfat.jpg';
import frontpic from '../Assets/Transformation/frontpic.png';
import frontfat from '../Assets/Transformation/frontfat.jpg';
import side from '../Assets/Transformation/side.png';
import sidefat from '../Assets/Transformation/sidefat.jpg';
import sideback from '../Assets/Transformation/sideback.png';
import sidebackfat from '../Assets/Transformation/sidebackfat1.jpg';
import './Transformation.css';

const images = [
  { src: back, alt: 'Back' },
  { src: backfat, alt: 'Back Fat' },
  { src: frontpic, alt: 'Front' },
  { src: frontfat, alt: 'Front Fat' },
  { src: side, alt: 'Side' },
  { src: sidefat, alt: 'Side Fat' },
  { src: sideback, alt: 'Side Back' },
  { src: sidebackfat, alt: 'Side Back Fat' },
];

const Transformations = () => {
  return (
    <Box className="transformation-container">
      <Box className="transformation-title">
        <h1>My six-month transformation took place in 2020. The top picture was taken in April 2020, and the bottom picture was taken in September 2020.</h1>
        <p>The key to achieving these results was following a meal plan with adjusted daily calories and macronutrients, along with a fully tailored workout.</p>
      </Box>
      <Grid container spacing={2} className="transformation-pics">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="transformation-grid-item">
            <img src={image.src} alt={image.alt} className="transformation-image" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Transformations;
