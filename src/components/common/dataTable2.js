import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function DataTable2({columnas,datos}) {
  const nColumnas = columnas.length;
  const columns: GridColDef[] = [];

  for (let i = 0; i < nColumnas-1; i+=2) {
    columns.push({ field: columnas[i],headerClassName: "Cabecera", headerName: columnas[i], width: columnas[i+1] });
  }

  /*const columnas: GridColDef[] = [
    { field: 'id', headerName: 'ID',  },
    { field: 'firstName', headerName: 'First name',  },
    { field: 'lastName', headerName: 'Last name',  },
    {
      field: 'age',
      headerName: 'Age',
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];*/
  
  const nFilas = Math.floor(datos.length / (nColumnas/2));
  console.log(nFilas);
  console.log(nColumnas);
  console.log(datos.length);
  /*const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];*/
  const rows = [];
  for (let i = 0; i < nFilas; i++) {
    let row = {};
    for (let j = 0; j < nColumnas/2; j++) {
      row[columns[j].field] = datos[i*nColumnas/2+j];
    }
    rows.push(row);
  }

  return (
    <div style={{ height: 400, width: '100%'}}>
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
