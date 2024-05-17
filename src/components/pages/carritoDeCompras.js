import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';




export default function ItemsCarro() {
  return (
    <><><Typography variant="h4" component="p">
          2. Items en tu Carrito de Compras
      </Typography></><Box component="section" sx={{ p: 2, border: '1px solid black', background :'#C2C1C1'}}>
                Items Disponible para Envio
          </Box></>
  );
}


