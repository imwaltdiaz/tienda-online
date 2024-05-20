import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export default function Usuarios() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'Nombre', headerName: 'Nombre', width: 300 },
    { field: 'Apellido', headerName: 'Apellido', width: 300 },
    { field: 'Correo', headerName: 'Correo', width: 150 },
    { field: 'FechaDeRegistro', headerName: 'Fecha de registro', width: 150 },
    { field: 'Estado', headerName: 'Estado', width: 90 },
    { field: 'Acciones', headerName: 'Acciones', width: 90 }
  ];

  const rows = [
    { id: '1', Nombre: 'Jaime', Apellido: 'Vilchez', Correo: '20215864@aloe.ulima.edu.pe', FechaDeRegistro: '19/05/2024', Estado: 'Activo', Acciones: 'Activar/Desactivar' }
  ];

  return (
    <>
      <Stack direction="column" justifyContent="flex-start" paddingLeft="1vw">
        <TitleBar title={'Usuarios registrados'} />
        <input
          type="text"
          id='Users'
          placeholder='Buscar nombre, lista o correo'
          variant='outlined'
          sx={{
            paddingTop: "15px",
            paddingBottom: "30px",
            height: '45px',
            width: '77vw'
          }}
        />
        <DataTable2 columnas={columns} datos={rows} />
      </Stack>
    </>
  );
}
