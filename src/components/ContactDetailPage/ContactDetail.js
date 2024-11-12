import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ContactDetail = () => {
  const { id } = useParams(); // Récupérer l'ID de la carte NFC scannée
  const [contact, setContact] = useState(null);

 

  if (!contact) {
    return <Typography>Chargement...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{contact?.name}</Typography>
      <Typography variant="body1">Téléphone: {contact?.phone}</Typography>
      <Typography variant="body1">Email: {contact?.email}</Typography>
      {/* Afficher d'autres informations du contact selon les données */}
    </Box>
  );
};

export default ContactDetail;
