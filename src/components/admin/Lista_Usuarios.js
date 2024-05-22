import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
import GenerarLista from '../admin/Rellenar_usuarios';
import base_datos from '../admin/usuarios.json';

export default function Lista_Usuarios() {
  const navigate = useNavigate();

  const columnas = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'nombre', headerName: 'Nombre', width: 100 },
    { field: 'apellido', headerName: 'Apellido', width: 100 },
    { field: 'correo', headerName: 'Correo', width: 250 },
    { field: 'fecha', headerName: 'Fecha de registro', width: 150 },
    { field: 'estado', headerName: 'Estado', width: 150 },
    { field: 'botones', headerName: 'Acciones', width: 150 }
  ];

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datosGenerados = GenerarLista(base_datos, navigate);
    setDatos(datosGenerados);
  }, [navigate]);

  return (
    <Stack direction="column" justifyContent="flex-start" paddingLeft="1vw">
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
  );
}
