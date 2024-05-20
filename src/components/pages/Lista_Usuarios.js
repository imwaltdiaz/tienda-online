import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Usuarios(){
    
    const colum = ["ID",200,"Nombre",300,"Apellido",300,"Correo",150,"Fecha de registro",150,"Estado",90,"Acciones", 90];
    const ejem = ["1", "Jaime", "Vilchez", "20215864@aloe.ulima.edu.pe", "19/05/2024", "Activo", "Activar/Desactivar"];
    return(
        <>
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
        >
          <TitleBar title={'Usuarios registrados'} />
          <input type="text" id='Users' placeholder='Buscar nombre, lista o correo' variant='outlined' 
            sx={{
              paddingTop: "15px",
              paddingBottom: "30px",
              height: '45px',
              width: '77vw',
            }}
          >
          </input>
            <DataTable2 columnas={colum} datos={ejem}/>
        </Stack>
      </>
    );
}