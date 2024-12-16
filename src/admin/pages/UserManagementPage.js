import React from 'react';
import UserTable from '../components/UserTable';
import { Box, Button } from '@mui/material';

const UserManagementPage = () => {
  return (
    <Box>
      <Box>
         <Button
           variant="contained"
           color="primary"
         >
            Nouvel utilisateur
         </Button>
      </Box>
      <UserTable />
    </Box>
  );
};

export default UserManagementPage;
