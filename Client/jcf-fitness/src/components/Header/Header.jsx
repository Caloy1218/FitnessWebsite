// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Info as InfoIcon, FitnessCenter as FitnessCenterIcon, Transform as TransformationIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Header.css';
import jcFitnessLogoNoBG from '../Assets/jcFitness_Logo-noBG.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SiteTitle = styled(Typography)(({ theme }) => ({
  marginLeft: 'auto',
  marginTop: 'auto',
  '& img': {
    width: '150px', // Default width
    [theme.breakpoints.down('sm')]: {
      width: '120px', // Adjusted width for mobile screens
    },
  },
}));

const DrawerList = styled('div')(({ theme }) => ({
  width: 250,
  backgroundColor: theme.palette.background.paper,
  height: '100%',
  paddingLeft:'8px',
  paddingTop:'30px'
}));

const DrawerItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DrawerItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: '#418B24',
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
    <DrawerList
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <DrawerItem button component={Link} to="/">
          <DrawerItemIcon><HomeIcon /></DrawerItemIcon>
          <ListItemText primary="Home" />
        </DrawerItem>
        <DrawerItem button component={Link} to="/about">
          <DrawerItemIcon><InfoIcon /></DrawerItemIcon>
          <ListItemText primary="About" />
        </DrawerItem>
        <DrawerItem button component={Link} to="/online-coaching">
          <DrawerItemIcon><FitnessCenterIcon /></DrawerItemIcon>
          <ListItemText primary="Online Coaching" />
        </DrawerItem>
        <DrawerItem button component={Link} to="/transformations">
          <DrawerItemIcon><TransformationIcon /></DrawerItemIcon>
          <ListItemText primary="Transformations" />
        </DrawerItem>
        <DrawerItem button component={Link} to="/contact-us">
          <DrawerItemIcon><ContactMailIcon /></DrawerItemIcon>
          <ListItemText primary="Contact Us" />
        </DrawerItem>
      </List>
    </DrawerList>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{ backgroundColor: '#418B24' }}>
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
          <NavLinks>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/online-coaching">Online Coaching</Button>
            <Button color="inherit" component={Link} to="/transformations">Transformations</Button>
            <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
          </NavLinks>
          <SiteTitle>
            <img src={jcFitnessLogoNoBG} alt="jcFitnessLogo" />
          </SiteTitle>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
