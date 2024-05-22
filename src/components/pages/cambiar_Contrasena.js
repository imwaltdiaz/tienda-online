import * as React from 'react';
import TitleBar from '../common/titleBar';
import DrawerDev from '../admin/DrawerDev';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Cambiar_Contrasena() {
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
          <TitleBar title={'Cambiar contrasena'}/>
          <Stack
            display="flex"
            direction="column"
            justifyItems="center"
            alignItems="center"
            spacing={5}
          >
            <TextField id='actual' placeholder='Actual' variant='outlined'></TextField>
            <TextField id='nuevo' placeholder='Nuevo' variant='outlined'></TextField>
            <TextField id='repetir' placeholder='Repetir' variant='outlined'></TextField>
            <Button variant="contained">Guardar</Button>
            
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}