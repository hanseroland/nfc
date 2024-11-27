import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';


const HighlightSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default", // Adapté au thème
        padding: "40px",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          
          margin: "0 auto",
        }}
      >
        {/* Texte principal */}
        <Grid size={{xs:12,md:6}}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Fonctionnalités
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
                marginBottom: "20px",
                fontSize:{md:'45px',xs:'35px'}
              }}
            >
              Faites un premier{" "}
              <span style={{ color: "#FF5722" }}>contact</span> qui laisse une
              impression générale
            </Typography>
          </Box>

          {/* Sous-titres */}
          <Box sx={{ display: "flex", gap: 4, marginTop: "30px" }}>
            {[
              { label: "Optimale", icon: "+" },
              { label: "Stories and Lore", icon: "+" },
              { label: "Art and Design", icon: "+" },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "text.primary",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "primary.main",
                    marginBottom: "5px",
                  }}
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  {feature.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Image mobile */}
        <Grid size={{xs:12,md:6}} sx={{ position: "relative" }}>
      
      {/* Boîte grise */}
      <Box
        id="fond"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(69,69,82)", // Couleur grise
          borderRadius: "100px",
          padding: "50px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          height: {xs:"300px",md:"450px"}, // Hauteur de la boîte grise
        }}
      >
      </Box>
      {/* Image au-dessus de la boîte */}
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/images/oumardiop.png`} // Remplacez par le chemin réel de votre image
        alt="Phone Mockup"
        sx={{
          position: "absolute", // Position absolue pour être en dehors de la boîte
          top: {xs:'10px',md:'-100px'}, // Dépassement au-dessus de la boîte
          left: "50%", // Centrage horizontal
          transform: "translateX(-50%)", // Ajustement pour centrer
          width:{xs:'200px',md:'400px'},
          //width: "120%", // Taille plus grande que la boîte
          maxWidth: "400px", // Taille maximale de l'image
          height: "auto", // Maintient les proportions de l'image
          
        }}
      />

    </Grid>
      </Grid>
    </Box>
  );
};

export default HighlightSection;
