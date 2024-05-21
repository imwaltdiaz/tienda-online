import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
import Grid from '@mui/material/Grid';

export function AgregarSerie() {
  const columnas = ["id",15,"Descripcion",30,"Acciones",0];
  const datos = [1, "Manga Dragon Ball Vol 1", "Remover", 2, "Manga Dragon Ball Vol 2", "Remover", 3, "Manga Dragon Ball Vol 3", "Remover", 4, "Manga Dragon Ball Vol 4", "Remover", 5, "Manga Dragon Ball Vol 5", "Remover", 6, "Manga Dragon Ball Vol 6", "Remover", 7, "Manga Dragon Ball Vol 7", "Remover", 8, "Manga Dragon Ball Vol 8", "Remover", 9, "Manga Dragon Ball Vol 9", "Remover", 10, "Manga Dragon Ball Vol 10", "Remover"]
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        paddingLeft="1vw"
        paddingTop="20px"
      >
        <TitleBar title={'Agregar serie'}/>
        <Stack
          direction="row"
          justifyContent="space-between"
          paddingTop="10px"
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={5}
          >
            <Grid 
              sx={{
                width: '25vw',
                height: '50vh',
                border: '1px solid black',
              }}
            ></Grid>
            <Button variant="contained">Guardar</Button>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={5}
            
          >
            <Stack>
              <Typography>Nombre</Typography>
              <TextField id='nombre' label='Nombre' variant='outlined'
                sx={{
                  height: '45px',
                  width: '40vw',
                }}
              ></TextField>
            </Stack>
            <Stack>
              <Typography>Descripcion</Typography>
              <TextField id='nombre' label='Nombre' variant='outlined'
                sx={{
                  height: '45px',
                  width: '40vw',
                }}
              ></TextField>
            </Stack>
            <Stack>
              <TitleBar title={'Productos de la serie'} width={'40vw'}/>
              <DataTable2 columnas={columnas} datos={datos} altura={'24vh'} ancho={'40vw'}/>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}