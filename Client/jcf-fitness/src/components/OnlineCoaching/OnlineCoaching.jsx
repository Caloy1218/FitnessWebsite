import React from 'react';
import './OnlineCoaching.css';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CheckIcon from '@mui/icons-material/Check';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const OnlineCoaching = () => {
  return (
    <div className="onlineCoaching-container">
      <div className="onlineCoaching-content">
        <h1>Is Online Coaching for You?</h1>
        <p>Online coaching with JC Fitness is offered via an app, allowing you to track your progress, log your workouts, watch exercise demonstrations, and manage your nutrition.</p>
      </div>
      <div className="onlineCoaching-cards">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardContent>
                <MessageIcon fontSize="large" />
                <Typography variant="h6">Messaging</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardContent>
                <CheckIcon fontSize="large" />
                <Typography variant="h6">Weekly Check-ins</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardContent>
                <FitnessCenterIcon fontSize="large" />
                <Typography variant="h6">Full Tailored Plan</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardContent>
                <RestaurantIcon fontSize="large" />
                <Typography variant="h6">Macros</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OnlineCoaching;
