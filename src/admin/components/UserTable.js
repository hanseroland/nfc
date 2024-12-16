import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nom', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    renderCell: (params) => (
      <div>
        <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
          Modifier
        </Button>
        <Button variant="outlined" color="error">
          Supprimer
        </Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com' },
  { id: 2, name: 'Alice Martin', email: 'alice.martin@example.com' },
];

const UserTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default UserTable;
