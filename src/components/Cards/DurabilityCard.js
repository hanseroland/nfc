import React from "react";
import { Box, Typography } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle"; // Icône personnalisable

const DurabilityCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent", // Fond noir par défaut
        padding: "20px",
      }}
    >
      {/* Icône avec contour stylisé */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid", // Contour de l'icône
          borderColor: "#FFD700", // Couleur dorée
          borderRadius: "8px",
          width: "60px",
          height: "60px",
          marginRight: "20px",
        }}
      >
        <BuildCircleIcon sx={{ color: "#FF5722", fontSize: "40px" }} />
      </Box>

      {/* Texte à côté de l'icône */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "text.primary", // Couleur dynamique du texte
            marginBottom: "5px",
          }}
        >
          Durabilité
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary", // Texte secondaire
          }}
        >
          Carte de visite NFC fabriquée avec des matériaux de haute qualité et
          recyclables.
        </Typography>
      </Box>
    </Box>
  );
};

export default DurabilityCard;