// src/components/Transformations.js
import React from 'react';
import back from '../Assets/Transformation/back.png';
import backfat from '../Assets/Transformation/backfat.jpg';
import frontpic from '../Assets/Transformation/frontpic.png';
import frontfat from '../Assets/Transformation/frontfat.jpg';
import side from '../Assets/Transformation/side.png';
import sidefat from '../Assets/Transformation/sidefat.jpg';
import sideback from '../Assets/Transformation/sideback.png';
import sidebackfat from '../Assets/Transformation/sidebackfat1.jpg';
import './Transformation.css';
const Transformations = () => {
  return (
    <div className='transformation-container'>
      <div className="transformation-title">
        <h1>My six-month transformation took place in 2020. The top picture was taken in April 2020, and the bottom picture was taken in September 2020. </h1>
        <p>The key to achieving these results was following a meal plan with adjusted daily calories and macronutrients, along with a fully tailored workout </p>
      </div>
    </div>
  );
};

export default Transformations;
