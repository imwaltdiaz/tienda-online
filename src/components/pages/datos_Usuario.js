import * as React from 'react';
import TitleBar from '../common/titleBar';
import DrawerDev from '../admin/DrawerDev';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export function Datos_Usuario() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        paddingLeft="1vw"
      >
        <DrawerDev/>
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
          paddingTop="20px"
          spacing={5}
        >
          <TitleBar title={'Datos de Registro'}/>
          <Stack
            display="flex"
            direction="column"
            justifyItems="center"
            alignItems="center"
            spacing={5}
          >
            <TextField id='nombre' placeholder='Nombre' variant='outlined'></TextField>
            <TextField id='apellido' placeholder='Apellido' variant='outlined'></TextField>
            <TextField id='correo' placeholder='Correo' variant='outlined'></TextField>
            <Button variant="contained">Guardar</Button>
            
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}