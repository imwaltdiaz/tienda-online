import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function Detalle_Orden(orden){
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
        <Box></Box> 
        <Box></Box>
        
        </Stack>
            



        </Stack>
        </>
    );
}
