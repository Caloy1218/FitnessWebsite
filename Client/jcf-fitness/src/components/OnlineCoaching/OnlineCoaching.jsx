import React, { useState } from 'react';
import './OnlineCoaching.css';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Grid, Collapse, Button } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CheckIcon from '@mui/icons-material/Check';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import JCFitnessIcon from '../Assets/jcFitness_Icon-noBG.png'; // Adjust the path as per your actual project structure

const OnlineCoaching = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const cardData = [
    { icon: <MessageIcon sx={{ color: '#418B24' }} />, title: 'Messaging', subheader: 'Stay connected', content: 'Through the app, you will have access to a one-on-one messaging system, allowing me to respond at any time.' },
    { icon: <CheckIcon sx={{ color: '#418B24' }} />, title: 'Weekly Check-ins', subheader: 'Track progress', content: 'There will be weekly check-ins where you will submit progress photos, measurements, and weigh-ins through the app. These will be reviewed and discussed via Zoom or Messenger.' },
    { icon: <FitnessCenterIcon sx={{ color: '#418B24' }} />, title: 'Full Tailored Plan', subheader: 'Customized for you', content: 'This program will be customized to suit your goals, experience, and lifestyle. It will include video demonstrations, guiding you on how to perform each movement correctly.' },
    { icon: <RestaurantIcon sx={{ color: '#418B24' }} />, title: 'Macros', subheader: 'Nutritional guidance', content: 'Macros (carbohydrates, proteins, and fats) will be set for you and adjusted weekly to help you achieve your goals.' },
  ];

  return (
    <div className="onlineCoaching-container">
      <div className="onlineCoaching-content">
        <h1>Is Online Coaching for You?</h1>
        <p>Online coaching with JC Fitness is offered via an app, allowing you to track your progress, log your workouts, watch exercise demonstrations, and manage your nutrition.</p>
      </div>
      <div className="onlineCoaching-cards">
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="card">
                <CardHeader
                  avatar={null}
                  title={
                    <div className="card-header">
                      {card.icon}
                      <Typography variant="h6" component="div">
                        {card.title}
                      </Typography>
                    </div>
                  }
                  subheader={card.subheader}
                />
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph sx={{ margin: '0px' }}>{card.content}</Typography>
                  </CardContent>
                </Collapse>
                <CardActions sx={{ paddingTop: '0px' }} disableSpacing className="card-actions">
                  <IconButton
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded === index}
                    aria-label="show more"
                  >
                    {expanded === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
           
        </Grid>
      </div>
      <Button variant="contained" color="primary" fullWidth className="join-now-button">
                  <img src={JCFitnessIcon} alt="JC Fitness Icon" width="24px" height="24px" style={{ marginRight: '8px' }} />
                  JOIN NOW
        </Button>
    </div>
  );
};

export default OnlineCoaching;
