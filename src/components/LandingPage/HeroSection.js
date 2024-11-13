import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      id="accueil"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', // Dégradé bleu à violet
        backdropFilter: 'blur(10px)',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: {md:'flex-start'},
        color: 'white',
        textAlign: {md:'center',xs:'left'},
        padding: '0 20px',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb:{md:2,xs:0},fontSize:{xs:'30px',md:'50px'} }}>
        Bienvenue sur NFC Contact
      </Typography>
      <Typography variant="h5" sx={{ mb:4, fontSize:{xs:'20px'} }}>
        La solution de partage de contact simplifiée
      </Typography>
      <Button 
        variant="outlined" 
        color="inherit"
        sx={{ padding: '10px 20px', fontSize: '16px', textTransform: 'capitalize',borderRadius: "20px",width:{xs:'200px'} }}
        >
        En savoir plus
      </Button>
      
      
      {/* Image incliné à droite */}
          <Box
            component={motion.img}
            src={`${process.env.PUBLIC_URL}/images/inc.png`} // Remplacez par le chemin de votre image
            alt="Illustration"
            initial={{ x: -200,y:-300, rotate: 0, opacity: 0 }}
            animate={{ x: -180,y:-100, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            sx={{
              position: 'absolute',
              right: '10%',
              bottom: '0%',
              display:{xs:'none',md:'block'},
              width: {md:'300px',xs:'200px'}, // Ajustez la taille de l'image
              transformOrigin: 'center', // Point d'origine pour la rotation
            }}
          />
          <Box
            component={motion.img}
            src={`${process.env.PUBLIC_URL}/images/oumardiop.png`} // Remplacez par le chemin de votre image
            alt="Illustration"
            initial={{ x: 200, rotate: 0, opacity: 0 }}
            animate={{ x: 170, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            sx={{
              position: 'absolute',
              right: '10%',
              bottom: '0%',
              width: {md:'410px',xs:'245px'}, // Ajustez la taille de l'image
              transformOrigin: 'center', // Point d'origine pour la rotation
            }}
          />
    </Box>
  );
};

export default HeroSection;
