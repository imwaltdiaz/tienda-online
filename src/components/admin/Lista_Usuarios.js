import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Lista_Usuarios(){
    const columunas = ["id",50,"Nombre",50,"Apellido",200,"Correo",50,"Fecha de registro",50,"Estado",50,"Acciones", 50]
    const datos = [1, "Jaime", "Vilchez", "20215864@aloe.ulima.edu.pe", "19/05/2024", "Activo", "Activar/Desactivar", 
    2, "Gabriel", " Castañeda", "205051525@gmail.com", "18/06/2023", "Activo", "Activar/Desactivar"]
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