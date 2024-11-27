import React from "react";
import { Box, Typography } from "@mui/material";

const OffreCard = ({ id, title, description, mode }) => {
    return (
        <Box
            sx={{
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                position: "relative",
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            {/* Icon + Number */}
            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#FF6B00",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    0{id}
                </Typography>

                <Box
                    component="span"
                    sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                    }}
                >
                    {title}
                </Box>
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: "14px",
                    marginTop: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                }}
            >
                {description}
            </Typography>

            {/* Underline */}

            <Box
                sx={{
                    marginTop: "10px",
                    height: "1px",
                    background: "linear-gradient(90deg, #FF6B00, #FFD700)",
                    width: "100%",
                }}
            />
        </Box>
    );
};

export default OffreCard;
