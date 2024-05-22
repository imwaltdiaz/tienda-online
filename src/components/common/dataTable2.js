import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function DataTable2({ columnas, datos, altura = '61.5vh', ancho = '77vw' }) {
  const columns = columnas.map((col, index) => ({
    field: col.field,
    headerName: col.headerName,
    width: col.width,
  }));

  return (
    <Box sx={{ height: altura, width: ancho }}>
      <DataGrid
        rows={datos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </Box>
  );
}
