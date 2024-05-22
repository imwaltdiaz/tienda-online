import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
import GenerarLista from './Rellenar_usuarios';
import base_datos from './prueba';
export function Lista_Usuarios(){
    const columunas = ["id",50,"Nombre",100,"Apellido",100,"Correo",250,"Fecha de registro",150,"Estado",150,"Acciones", 150]
    const datos = GenerarLista(base_datos)
    return(
        <>
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
        >
          <TitleBar title={'Usuarios registrados'} />
          <TextField id='Users' placeholder='Buscar nombre, lista o correo' variant='outlined' 
            sx={{
              paddingTop: "15px",
              paddingBottom: "30px",
              height: '45px',
              width: '77vw',
            }}
          >
          </TextField>
            <DataTable2 columnas={columunas} datos={datos}/>
        </Stack>
      </>
    );  
}