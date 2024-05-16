import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';

function ListadoDeSeries() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          sx={{
            width: '15.80%',
            height: '76vh', 
            bgcolor: '#F6F6F6',
          }}
        >
        </Box>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="space-around"
        >
          <TitleBar title={'Listado de Series'} />
          <TextField id='Serie' label='Ingresar nombre, descripcion o ID' variant='outlined'></TextField>
          <Box>

          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default ListadoDeSeries;
