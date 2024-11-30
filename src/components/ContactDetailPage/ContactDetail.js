import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

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
    github: "https://github.com/jeandupont"
  }
};

const ContactDetail = () => {

  return (
    <Box
      sx={{
        bgcolor: 'background.default', // Utilisation du thème de fond
        p: 3, // Padding général
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh', // Pour occuper toute la hauteur de la page
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Avatar alt={userData.name} src={userData.avatar} sx={{ width: 100, height: 100 }} />
          </Box>
          <Typography variant="h5" gutterBottom color="text.primary">
            {userData.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {userData.position}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ marginTop: 2 }}>
            {userData.company}
          </Typography>

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" color="text.secondary">
              <Phone sx={{ verticalAlign: 'middle', marginRight: 1 }} />
              {userData.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
              <Email sx={{ verticalAlign: 'middle', marginRight: 1 }} />
              {userData.email}
            </Typography>
            {userData.socialLinks && (
              <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                {userData.socialLinks.linkedIn && (
                  <IconButton href={userData.socialLinks.linkedIn} target="_blank">
                    <LinkedIn />
                  </IconButton>
                )}
                {userData.socialLinks.github && (
                  <IconButton href={userData.socialLinks.github} target="_blank">
                    <GitHub />
                  </IconButton>
                )}
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactDetail;
