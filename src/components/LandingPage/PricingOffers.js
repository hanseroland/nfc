import React from "react";
import { Box, Typography, Button } from "@mui/material";
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
         textAlign: "center" }}
    >
      <Typography variant="h2" sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
        Offres
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <HeroButton title="Particulier"/>
      </Box>

      <Grid container spacing={4}>

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
