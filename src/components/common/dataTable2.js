import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function DataTable2({columnas,datos}) {
  const nColumnas = columnas.length;
  const columns = [];

  for (let i = 0; i < nColumnas-1; i+=2) {
    columns.push({ field: columnas[i],headerClassName: "Cabecera", headerName: columnas[i], width: columnas[i+1] });
  }
  
  const nFilas = Math.floor(datos.length / (nColumnas/2));
  const rows = [];
  for (let i = 0; i < nFilas; i++) {
    let row = {};
    for (let j = 0; j < nColumnas/2; j++) {
      row[columns[j].field] = datos[i*nColumnas/2+j];
    }
    rows.push(row);
  }

  return (
    <div style={{ height: '61.5vh', width: '77vw'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
