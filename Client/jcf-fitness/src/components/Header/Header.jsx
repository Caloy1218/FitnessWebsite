// src/components/Header.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TransformationIcon from '@mui/icons-material/Transform';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Header.css';

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SiteTitle = styled(Typography)(({ theme }) => ({
  marginRight: 'auto',
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <div
      className="drawerList"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/online-coaching">
          <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
          <ListItemText primary="Online Coaching" />
        </ListItem>
        <ListItem button component={Link} to="/transformations">
          <ListItemIcon><TransformationIcon /></ListItemIcon>
          <ListItemText primary="Transformations" />
        </ListItem>
        <ListItem button component={Link} to="/contact-us">
          <ListItemIcon><ContactMailIcon /></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SiteTitle variant="h6">
          JCFitness
        </SiteTitle>
        <NavLinks>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/online-coaching">Online Coaching</Button>
          <Button color="inherit" component={Link} to="/transformations">Transformations</Button>
          <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
        </NavLinks>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
