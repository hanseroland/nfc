import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Avatar, Link as MuiLink, Button } from '@mui/material';
import {
  Email,
  Phone,
  LinkedIn,
  WhatsApp,
  Instagram,
  Telegram,
} from '@mui/icons-material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LinkIcon from '@mui/icons-material/Link';
import Grid from '@mui/material/Grid2';
import XIcon from '@mui/icons-material/X';
import ClickableImage from '../buttons/ClickableImage';


// Données fictives de l'utilisateur
const userData = {
  name: "Jean Dupont",
  position: "Développeur Full Stack",
  company: "TechCorp",
  email: "jean.dupont@example.com",
  phone: "+33 1 23 45 67 89",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Exemple de photo de profil
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/jeandupont",
    github: "https://github.com/jeandupont",
    gmail:'mailto:example@example.com',
    instagram:'https://instagram.com',
    telegram:'https://t.me/',
    whatsapp:'https://wa.me/',
    twitter:'https://twitter.com/',
  }
};

const ContactDetail = ({ mode, toggleTheme }) => {


  // Fonction pour ouvrir les liens
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };



  return (
    <Box
      sx={{
        bgcolor: 'background.default', // Utilisation du thème de fond
        p: 3, // Padding général
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Pour occuper toute la hauteur de la page
      }}
    >
      <Box>
        <IconButton href="/" sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        {/* Bouton pour changer de thème */}
        <IconButton onClick={toggleTheme} sx={{ mb: 2, color: "text.primary" }}>
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Box>
      <Card 
        sx={{ 
          maxWidth: 500, 
          width: '100%', 
          borderRadius: 2, 
          boxShadow: 3,
          backgroundImage: "linear-gradient(to right bottom, #e3e5eb, #b7c4ef, #8ea3f1, #6381f0, #2d5fec)",

        }}
        >
        <CardContent>
          <Typography align='center' variant="h5" color="black" sx={{fontWeight:'bold'}} >
            {userData.name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Avatar alt={userData.name} src={userData.avatar} 
              sx={{ 
                width: 100, 
                height: 100,
                border:"10px solid #fff" 
                }} 
              />
          </Box>

          <Typography align='center' variant="h6" sx={{ marginTop: 2,color:'#000',fontSize:'15px' }} >
            {userData.position}
          </Typography>
           {/** Boutons de partage et téléchargement */}
           <Box sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            justifyContent: 'center'
          }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                mx: 1,
                textTransform: 'none',
                textTransform: 'none',
                borderRadius: '12px'

              }}
            >
              Enregistrer le contact
            </Button>

          </Box>
          
          <Typography  variant="body1"  sx={{ marginTop: 2,color:'#000' }}>
            Société : {userData.company}
          </Typography>


          {/** Sites externes */}
          <Grid container spacing={3} >
              <Grid size={{ md: 6, xs: 6 }}>
             

          <Typography variant="body2" sx={{color:'#000'}} >
            <Phone sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            {userData.phone}
          </Typography>
          <Typography sx={{ color:'#000' }} variant="body2" >
            <Email
              sx={{
                verticalAlign: 'middle',
                marginRight: 1
              }}
            />
            {userData.email}
          </Typography>
              </Grid>
              <Grid size={{ md: 6, xs: 6 }}>
              <Box >
               <MuiLink
              href="https://portfolio.example.com" // URL du Portfolio
              target="_blank" // Ouvre dans un nouvel onglet
              rel="noopener noreferrer" // Sécurise le lien externe
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'right',
                color: "#fff",
                textDecoration: "none",
                borderRadius:'12px',
                padding:'2px 2px',
               
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <LinkIcon sx={{color:'#000'}} fontSize="small" /> {" "}
              <Typography sx={{color:'#000'}}  variant="body1">
               Portfolio
              </Typography>

            </MuiLink>

            {/* Lien vers Site web */}
            <MuiLink
              href="https://website.example.com" // URL du Site web
              target="_blank" // Ouvre dans un nouvel onglet
              rel="noopener noreferrer" // Sécurise le lien externe
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'right',
                color: "#fff",
                textDecoration: "none",
                borderRadius:'12px',
                padding:'2px 2px',
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <LinkIcon sx={{color:'#000'}}  fontSize="small" />
              <Typography sx={{color:'#000'}}   align='center' variant="body1" >
                Site web
              </Typography>

            </MuiLink>
          </Box>
              </Grid>
          </Grid>
          



          {/* Social Icons */}
          <Grid mt={2} container spacing={3} justifyContent="center">
            <Grid sx={{ display: 'flex', justifyContent:{md:'left',xs:'center'} }} size={{ md: 4, xs: 6 }} >
              <ClickableImage
                link={userData?.socialLinks.whatsapp}
                imageSrc={`${process.env.PUBLIC_URL}/images/Whatsapp_37229 (1).png`}
              />
             
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent:{md:'center',xs:'center'}  }} size={{ md: 4, xs: 6 }}>
              <ClickableImage
                link={userData?.socialLinks.gmail}
                imageSrc={`${process.env.PUBLIC_URL}/images/gmail_new_logo_icon_159149 (1).png`}
              />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent:{md:'right',xs:'center'}  }} size={{ md: 4, xs: 6 }}>
              <ClickableImage
                link={userData?.socialLinks.telegram}
                imageSrc={`${process.env.PUBLIC_URL}/images/telegram_icon-icons.com_72055 (1).png`}
              />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent:{md:'left',xs:'center'}  }} size={{ md: 4, xs: 6 }}>
             <ClickableImage
                link={userData?.socialLinks.instagram}
                imageSrc={`${process.env.PUBLIC_URL}/images/3721672-instagram_108066 (1).png`}
              />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent:{md:'center',xs:'center'}  }} size={{ md: 4, xs: 6 }}>
            <ClickableImage
                link={userData?.socialLinks.linkedIn}
                imageSrc={`${process.env.PUBLIC_URL}/images/linkedin_icon-icons.com_65929 (1).png`}
              />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent:{md:'right',xs:'center'}  }} size={{ md: 4, xs: 6 }}>
            <ClickableImage
                link={userData?.socialLinks.twitter}
                imageSrc={`${process.env.PUBLIC_URL}/images/twitter-x-icon-png.png`}
              />
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactDetail;
