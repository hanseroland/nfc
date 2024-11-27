import React from "react";
import { Box, Typography } from "@mui/material";
import FeatureCard from "../Cards/FeaturedCard";
import Grid from '@mui/material/Grid2';


const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh", 
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/card-are-promin.webp')`, // Chemin relatif au dossier public
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Titre Principal */}
      <Typography
        variant="h3"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        DakarIdentity la carte de visite numérique sans contact
      </Typography>

      {/* Section des Features */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 30,
          right: 30,
          maxWidth: "1200px", // Largeur maximale pour limiter la taille sur les écrans larges
          margin: "0 auto", // Centre horizontalement le bloc
          justifyContent: "center", // Centre les colonnes dans le conteneur
         
         
        }}
        
      >
        <Grid size={{xs:12,md:6}} >
          <FeatureCard
            title="Une experience repensée pour une utilisation optimale"
            description="Simplifiez vos échanges professionnels avec BlackIdentity"
            iconPath={`${process.env.PUBLIC_URL}/images/card-are-promin.webp`} 
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <FeatureCard
            title="Accès Universel"
            description="Compatible avec tous les smartphones dotés de NFC ou avec un QR code intégré"
            iconPath={`${process.env.PUBLIC_URL}/images/card-are-promin.webp`} 
            reverse 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
