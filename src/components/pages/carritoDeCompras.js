import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Footer from '../common/footer';
import Header from '../common/header';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import ListaItemCarr from '../common/ObjCarrito';

export default function ItemsCarro() {
  return (
    <>
    <Header/>
      <Typography variant="h4" component="p">
        Items en tu Carrito de Compras
      </Typography>
      <Box component="section" sx={{ p: 2, border: '1px solid black', background: '#C2C1C1' }}>
        Items Disponible para Envio
      </Box>
    </>
  );
}

export function Compil() {
  return (
    <>
      <ListaItemCarr
        imagen="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
        nombre="nombre1"
        cant="cant"
        prize="prize"
        subtot="subtot"
      />
    </>
  );
}
export function BtnPago() {
  return (
    <><>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '50px', marginBottom: '20px' }}>
        <Typography variant="h5" component="p" alignItems={"flex-end"}>
          Total: S/ 100
        </Typography>
        <button>Checkout</button>
      </Box>
      <Box component="section" sx={{ p: 1, border: '1px solid black', background: '#C2C1C1', marginTop: '20px' }}>
        Datos de compra
      </Box>

    </><Footer /></>
  );
}




