import * as React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import { Container, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
export function Detalle_Usuario(User){
    const columnas = ["id", 100, "Fecha de orden",150, "Total", 150, "Productos", 150, "Estado", 200, "Acciones"]
    return(
        <>
            <Stack
                direction="column"
                justifyContent="flex-start"
                paddingLeft="1vw"
                spacing={0}
            >
            <TitleBar title={"Detalle de usuario registrado"}/>
            <TitleBar title={"  "+User.id+"    "+User.name+"     "+User.email+"    "+User.date}/>
            <TitleBar title={"Ordenes recientes, maximo 10"}/>
            <DataTable2 columnas={columnas} datos={}/>
            </Stack>
        </>
    );
}