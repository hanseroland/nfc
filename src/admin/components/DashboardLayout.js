import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBarComponent from './AppBarComponent';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const DashboardLayout = ({title, mode, toggleTheme }) => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  
  const links = [
    { text: 'Accueil', path: '/admin', icon: <HomeIcon /> },
    { text: 'Utilisateurs', path: '/admin/users', icon: <PeopleIcon /> },
    { text: 'Cartes NFC', path: '/admin/nfc', icon: <CreditCardIcon /> },
  ];
  
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarComponent 
        mode={mode} 
        toggleTheme={toggleTheme} 
        title={title} 
        open={open} 
        drawerWidth={240} 
        handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar 
        mode={mode} 
        toggleTheme={toggleTheme} 
        open={open} 
        handleDrawerClose={handleDrawerClose} 
        links={links}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default DashboardLayout;


