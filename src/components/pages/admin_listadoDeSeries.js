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
        justifyContent="flex-start"
        alignItems="flex-start"
        paddingLeft="2vw"
      >
        <Box
          sx={{
            width: '15.80vw',
            height: '76vh', 
            bgcolor: '#F6F6F6',
          }}
        >
        </Box>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="space-around"
          paddingLeft="2vw"
        >
          <TitleBar title={'Listado de Series'} />
          <TextField id='Serie' label='Ingresar nombre, descripcion o ID' variant='outlined' 
            sx={{
              paddingTop: "15px",
              paddingBottom: "30px",
              height: '45px',
              width: '77vw',
            }}
          >
          </TextField>
          <Box
            sx={{
              width: '100%',
              height: '55vh',
              bgcolor: '#F6F6F6',
            }}
          >
            
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default ListadoDeSeries;
