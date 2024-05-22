import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Detalle_Orden(Usuario){
    return(
        <>
        <Header/>
        <TitleBar title={"Detalle de Orden de Nro "+ orden.id}/>
        <Stack
        direction="column"
        justifyContent="flex-start"
        paddingLeft="1vw"
        >
        <TitleBar title={"Datos de compra"}/>
        <Stack
        justifyContent="flex-start"
        paddingLeft="1vw"
        direction="row"
        >
        <Box sx={{
        bgcolor: 'white',
        width: '30vw',
        }}
        >
            Direccion de pedido:
            {Usuario.address}
        </Box >     
        <Box sx={{
        bgcolor: 'white',
        width: '30vw',
        }}>
        <FormControl>
            <FormLabel id="metodo_pago">Pago</FormLabel>
            <RadioGroup
                defaultValue="tarjeta"
                name="eleccion_pago"
            >
                <FormControlLabel value="qr" control={<Radio />} label="Pago con codigo QR" />
                <FormControlLabel value="tarjeta" control={<Radio />} label="Pago con tajeta de credito" />
            </RadioGroup>
        </FormControl>
        Tarjeta de credito que termina en ****0456
        </Box>   
        </Stack>
        <TitleBar title={"Metodo de envio"}/>    
        <Stack
        justifyContent="flex-start"
        paddingLeft="1vw"
        direction= 'row'
        >
        <Box sx={{
        bgcolor: 'white',
        width: '77vw',
        height: '45px',
        direction: 'row'
        }}>
        <FormControl>
            <RadioGroup
                defaultValue="economico"
                name="eleccion_envio"
            >
                <FormControlLabel value="economico" control={<Radio />} label="Economico Aereo - S/10" />
                <FormControlLabel value="prioritario" control={<Radio />} label="Envio Prioritario - S/17" />
            </RadioGroup>
        </FormControl>    
        </Box>
        </Stack>
        <Stack
        justifyContent="flex-start"
        paddingLeft="1vw"
        direction="row"
        >
        <Box sx={{
        bgcolor: 'white',
        width: '30vw',
        }}>
            Items en Pedido:
                1 x Juego de Cartas Pokemon   S/50
                2 x Juego de Cartas Magic     S/50
        </Box>
        <Box sx={{
        bgcolor: 'white',
        width: '30vw',
        }}>
        Resumen en Orden:
            SubTotal:   S/100.00
            Envio:      S/17.00
            Impuestos:  S/18.00
            Total:      S/135.00
            <Button variant='outlined'>Cancelar Pedido</Button>    
        </Box>
        </Stack>
        </Stack>
        <footer/>
        </>
    );
}