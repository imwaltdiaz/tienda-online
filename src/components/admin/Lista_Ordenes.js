import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Lista_Ordenes(){
    const columunas = ["id",50,"Usuario",50,"Fecha de orden",200,"Total",50,"Correo",50,"Estado",50,"Acciones", 50]
    const datos = [1, "Jorge Salas xd", "30/05/2024", "S/500", "BotenASalas@gmail.com", "Pendiente", "Ver",
                   2, "Nicole", "26/01/2023", "S/300", "hollowedRino@gmail.com", "Entregado", "Ver"]
    return(
        <>
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
        >
          <TitleBar title={'Ordenes'} />
          <TextField id='Orders' placeholder='Buscar por nombre o apellido de usuario o numero de orden' variant='outlined' 
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