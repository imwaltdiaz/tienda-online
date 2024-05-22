import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';
import GenerarOrdenes from '../admin/Rellenar_ordenes';
import base_datos from '../admin/ordenes.json';
export default function Lista_Ordenes(){
    const navigate = useNavigate();
    const columunas = [
      { field: 'id', headerName: 'ID', width: 50 },
      { field: 'usuario', headerName: 'Usuario', width: 100 },
      { field: 'fecha', headerName: 'Fecha de orden', width: 100 },
      { field: 'total', headerName: 'Total', width: 250 },
      { field: 'correo', headerName: 'Correo', width: 150 },
      { field: 'estado', headerName: 'Estado', width: 150 },
      { field: 'acciones', headerName: 'Acciones', width: 150 }
    ];

    useEffect(() => {
      const datosGenerados = GenerarOrdenes(base_datos, navigate);
      setDatos(datosGenerados);
    }, [navigate]);

    const [datos, setDatos] = useState([]);

    return(
        <>
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
        >
          <TitleBar title={'Ordenes'} />
          <TextField id='Orders' placeholder='Buscar por nombre o apellido de usuario o numero de orden' variant='outlined' 
            sx={{
              paddingTop: "15px",
              paddingBottom: "30px",
              height: '45px',
              width: '77vw',
            }}
          >
          </TextField>
            <DataTable2 columnas={columunas} datos={datos}/>
        </Stack>
      </>
    );  
}