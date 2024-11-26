import React from "react";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from '@mui/material/Grid2';

const AvantagesSection = () => {
  const avantages = [
    { label: "Partage Sans Contact", color: "#FFD700" },
    { label: "Design Personnalisé", color: "#FF5722" },
    { label: "Sécurisée", color: "#FFD700" },
  ];

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default", // Couleur dynamique selon le thème
        padding: "40px",
        position: "relative",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#333333", // Couleur grise foncée comme dans l'image
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          height: "100%",
        }}
      >
        {/* Texte principal */}
        <Grid size={{xs:12,md:6}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              marginBottom: "20px",
            }}
          >
            Boostez votre business avec votre carte de visite multifonction
          </Typography>
        </Grid>

        {/* Liste des avantages */}
        <Grid size={{xs:12,md:6}}>
          <Box
            sx={{
              border: "1px solid #FFD700", // Bordure dorée
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <List>
              {avantages.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Indicateur coloré */}
                    <ListItemIcon
                      sx={{
                        minWidth: "auto",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: item.color,
                        }}
                      />
                    </ListItemIcon>
                    {/* Texte */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        variant: "body1",
                        color: "text.primary",
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                  {/* Flèche */}
                  <ArrowForwardIosIcon
                    sx={{
                      color: "text.primary",
                      fontSize: "14px",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvantagesSection;
