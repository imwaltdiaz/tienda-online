import * as React from 'react';
import TitleBar from '../common/titleBar';
import DrawerDev from '../admin/DrawerDev';
import { Stack, TextField, Button } from '@mui/material';

export default function CambiarContrasena() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        paddingLeft="1vw"
      >
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
