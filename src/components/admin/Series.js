import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Series() {
  const columnas = ["id",200,"firstName",300,"lastName",130,"age",90];
  const datos = [1, 'Snow', 'Jon', 35, 2, 'Lannister', 'Cersei', 42, 3, 'Lannister', 'Jaime', 45, 4, 'Stark', 'Arya', 16, 5, 'Targaryen', 'Daenerys', null, 6, 'Melisandre', null, 150, 7, 'Clifford', 'Ferrara', 44, 8, 'Frances', 'Rossini', 36, 9, 'Roxie', 'Harvey', 65]

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        paddingLeft="2vw"
      >
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
              '& .Cabecera': {
                backgroundColor: '#F6F6F6',
              },
            }}
          >
            <DataTable2 columnas={columnas} datos={datos}/>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

