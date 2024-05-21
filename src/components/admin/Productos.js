import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Productos() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        paddingLeft="1vw"
      >
        <TitleBar title={'Productos'} />
        <TextField id='Serie' placeholder='Ingresar nombre, descripcion o ID' variant='outlined' 
          sx={{
            paddingTop: "15px",
            paddingBottom: "30px",
            height: '45px',
            width: '77vw',
          }}
        >
        </TextField>
          {/* <DataTable2 columnas={columnas} datos={datos}/> */}
      </Stack>
    </>
  );
}
