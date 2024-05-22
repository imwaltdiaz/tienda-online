import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Footer from '../common/footer';
import Header from '../common/header';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';


export default function ItemsCheckOut() {
  return (
    <>
      <Header/>
      <Typography variant="h5" component="p">   
        ¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "Completar la orden" al final de la página
      </Typography>
      <Box component="section" sx={{ p: 1, border: '1px solid black', background :'#C2C1C1'}}>
        Datos de compra
      </Box>
      <Box display={'flex'} justifyContent={'space-evenly'}>
        <BoxDireccion/>
        <BoxPago/>
      </Box>
      <MetodoEnvio/>
      <Box display={'flex'} justifyContent={'space-evenly'}>
        <BoxItem/>
        <BoxResOrd/>
      </Box>
      <Footer/>
    </>
  );
}


export function BoxDireccion() {
  return (
    <Box
      height={450}
      width={500}
      my={2}
      display="flex"
      flexDirection="column"
      alignItems="right"
      justifyContent="space-between"
      gap={2}
      p={2}
      sx={{ border: '2px solid grey' }}
    >            
      <FormLabel><b>Dirección de Envío*</b></FormLabel>

      <TextField id="outlined-basic1" label="Línea 1" variant="outlined" />
      <TextField id="outlined-basic2" label="Línea 2" variant="outlined" />
      <TextField id="outlined-basic3" label="Distrito" variant="outlined" />
      <TextField id="outlined-basic4" label="Ciudad" variant="outlined" />
      <TextField id="outlined-basic5" label="País" variant="outlined" />
    </Box>
  );
}

export function MetodoEnvio(){
  return(
    <>  
    <Box component="section" sx={{ p: 1, border: '1px solid black', background :'#C2C1C1'}}>
      Método de envío
    </Box>
    <FormControl component="fieldset">
      <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControlLabel value="outlined" control={<Radio />} label="Económico Aéreo - S/10.00" />
        <FormControlLabel value="soft" control={<Radio />} label="Envío prioritario (5 a 10 días) - S/17.00" />
      </RadioGroup>
    </FormControl>
  </>
  );
}

export function BoxPago() {
  return (
    <Box
      height={450}
      width={500}
      my={2}
      display="flex"
      flexDirection="column"
      alignItems="right"
      justifyContent="space-between"
      gap={2}
      p={2}
      sx={{ border: '2px solid grey' }}
    >

      <FormControl>
      <FormLabel><b>Pago *</b></FormLabel>

        <RadioGroup defaultValue="outlined" name="radio-buttons-group">
          <FormControlLabel value="outlined" control={<Radio />} label="Pago con código QR" />
          <FormControlLabel value="soft" control={<Radio />} label="Pago con Tarjeta de Crédito" />
        </RadioGroup>
      </FormControl>
      <TextField label="Número de Tarjeta" variant="outlined" />
      <TextField label="Nombre en Tarjeta" variant="outlined" />
      <Box
        sx={{
        display: 'flex',
        gap: 2, // Espacio entre los elementos
    }}
    >
        <TextField type="date" label="" variant="outlined" />
        <TextField label="CVV" variant="outlined" />
        </Box>

      <br/>
    </Box>
  );
}
export function BoxItem({nombre,precio}) {
    return (
      <Box
        height={300}
        width={500}
        my={2}
        display="flex"
        flexDirection="column"
        alignItems="right"
        justifyContent="space-between"
        gap={2}
        p={2}
        sx={{ border: '2px solid grey' }}
      >            
        <FormLabel><b>Items en Pedido</b></FormLabel>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box display="flex" flexDirection="row" justifyContent="space-around" width="60%">
          <Stack direction="column" spacing={3}>
            <Typography variant="body1">{nombre}</Typography>
            <Typography variant="body1">{nombre}</Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography variant="body1">{`S/ ${precio}`}</Typography>
            <Typography variant="body1">{`S/ ${precio}`}</Typography>
          </Stack>
        </Box>
        </Box>  
      </Box>
    );
  }

export function BoxResOrd({ subtotal, envio, impuestos, total }) {
  return (
    <>
    <Box
      height={300}
      width={500}
      my={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap={2}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <FormLabel><b>Resumen de Orden</b></FormLabel>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box display="flex" flexDirection="row" justifyContent="space-around" width="60%">
          <Stack direction="column" spacing={3}>
            <Typography variant="body1">Subtotal:</Typography>
            <Typography variant="body1">Envío:</Typography>
            <Typography variant="body1">Impuestos:</Typography>
            <Typography variant="body1">Total:</Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography variant="body1">{`S/ ${subtotal}`}</Typography>
            <Typography variant="body1">{`S/ ${envio}`}</Typography>
            <Typography variant="body1">{`S/ ${impuestos}`}</Typography>
            <Typography variant="body1">{`S/ ${total}`}</Typography>
          </Stack>
        </Box>
        <Button variant="contained" color="primary">
          Completar orden
        </Button>
      </Box>
    </Box>
    </>
  );
}

  