import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Importer useNavigate pour la redirection


const Navbar = ({ mode, toggleTheme }) => {

  const navigate = useNavigate(); // Initialiser useNavigate
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ["Accueil", "Fonctionnalité", "Avantages", "Offres", "Contact"];

  // Gestion de l'ouverture/fermeture du menu mobile
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCreateCardClick = () => {
    navigate("/connexion"); // Redirige vers la page de connexion
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.default",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link
          to="accueil"
          smooth
          duration={500}
          style={{
            textDecoration: "none",
            color: "#FF5722",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize:'20px'
          }}
        >
          Black<span style={{ color: "secondary.main" }}>Identity</span>
        </Link>

        {/* Menu Mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            color="primary.main"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link
                  to={page.toLowerCase()}
                  smooth
                  duration={500}
                  style={{
                    textDecoration: "none",
                    color: mode === "light" ? "#000" : "#fff",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menu Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {pages.map((page) => (
            <Link
              key={page}
              to={page.toLowerCase()}
              smooth
              duration={500}
              style={{
                textDecoration: "none",
                color: mode === "light" ? "#000" : "#fff",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {page}
            </Link>
          ))}
        </Box>

        {/* Boutons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Bouton pour changer de thème */}
          <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* Bouton principal */}
          <Button
            sx={{
              background: "linear-gradient(to right, #FF5722, #FFD700)", // Dégradé
              color: "text.primary",
              fontWeight: "bold",
              padding: { xs: "4px 8px", md: "4px 8px", sm: "4px 8px" },
              borderRadius: "8px",
              textTransform: "none",
              fontSize:{xs:'12px',md:'16px',sm:'16px'},
              "&:hover": {
                background: "linear-gradient(to left, #FF5722, #FFD700)",
              },
            }}
            onClick={handleCreateCardClick}
          >
            Créez votre carte
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
