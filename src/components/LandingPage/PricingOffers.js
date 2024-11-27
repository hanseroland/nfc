import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeroButton from "../buttons/HeroButton";
import OffreCard from "../Cards/OffreCard";


const offers = [
  { id: 1, title: "Formule basic", description: "A realm where advanced technology meets dystopian reality. Our website is your gateway." },
  { id: 2, title: "Formule particulier", description: "A realm where advanced technology meets dystopian reality. Our website is your gateway." },
  { id: 3, title: "Formule pro", description: "A realm where advanced technology meets dystopian reality. Our website is your gateway." },
  { id: 4, title: "Formule entreprise", description: "A realm where advanced technology meets dystopian reality. Our website is your gateway." },
];

const PricingOffers = ({mode}) => {
  return (
    <Box sx={{ 
        backgroundColor: mode === "light" ? "#fff" : "#000",
        color:mode === "light" ? "#000" : "#fff",
         padding: "4rem 2rem", 
         textAlign: "center",
         minHeight: "100vh", // S'assure que le conteneur prend toute la hauteur de l'écran
        display: "flex", // Utilisation de flexbox pour centrer verticalement
        flexDirection: "column",
        justifyContent: "center", // Centre verticalement
        
        }}
    >
      <Typography variant="h2" sx={{ marginBottom: "2rem", fontWeight: "bold", fontSize:{md:'45px',xs:'35px'} }}>
        Offres
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <HeroButton title="Particulier"/>
      </Box>

      <Grid 
        container 
        spacing={4}
        sx={{
          maxWidth: "1200px", // Largeur maximale pour limiter la taille sur les écrans larges
          margin: "0 auto", // Centre horizontalement le bloc
          justifyContent: "center", // Centre les colonnes dans le conteneur
        }}
        
      >

        {offers.map((offer) => (
          <Grid key={offer.id} size={{xs:12,md:3,sm:6}}>
            
                <OffreCard
                 id={offer.id}
                 title={offer.title}
                 description={offer.description}
                 mode={mode}
                />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingOffers;
