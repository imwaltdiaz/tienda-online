import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
import GenerarLista from '../admin/Rellenar_usuarios';
import base_datos from '../admin/usuarios.json';

export default function Lista_Usuarios() {
  const columnas = ["id", 50, "Nombre", 100, "Apellido", 100, "Correo", 250, "Fecha de registro", 150, "Estado", 150, "Acciones", 150];
  const datos = GenerarLista(base_datos);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        paddingLeft="1vw"
        sx={{ marginBottom: "20px" }}
      >
        <TitleBar title={'Usuarios registrados'} />
        <TextField 
          id='Users' 
          placeholder='Buscar nombre, lista o correo' 
          variant='outlined'
          sx={{
            paddingTop: "15px",
            paddingBottom: "30px",
            height: '45px',
            width: '77vw',
          }}
        />
        <DataTable2 columnas={columnas} datos={datos} />
      </Stack>
    </>
  );
}
