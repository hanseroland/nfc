import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      py={2} 
      textAlign="center"
      sx={{
        backgroundColor:'#051937'
      }}
      >
      <Typography sx={{color:'white'}} variant="body2">© 2024 NFC Contact. Tous droits réservés. By HRP</Typography>
    </Box>
  );
};

export default Footer;
