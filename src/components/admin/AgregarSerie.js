import * as React from 'react';
import { Container, Stack, TextField, Typography } from '@mui/material';
import TitleBar from '../common/titleBar';
import DataTable2 from '../common/dataTable2';

export function AgregarSerie() {
    return(
        <>
            <Stack
                direction="column"
                justifyContent="flex-start"
                paddingLeft="1vw"
            >
                <TitleBar title={'Agregar Serie'} />
                <TextField id='Nombre' label='Nombre' variant='outlined' 
                    sx={{
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        height: '45px',
                        width: '77vw',
                    }}
                >
                </TextField>
                <TextField id='Descripcion' label='Descripcion' variant='outlined' 
                    sx={{
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        height: '45px',
                        width: '77vw',
                    }}
                >
                </TextField>
                <TextField id='FechaCreacion' label='Fecha de Creacion' variant='outlined' 
                    sx={{
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        height: '45px',
                        width: '77vw',
                    }}
                >
                </TextField>
                <TextField id='NroProductos' label='Nro. Productos' variant='outlined' 
                    sx={{
                        paddingTop: "15px",
                        paddingBottom: "30px",
                        height: '45px',
                        width: '77vw',
                    }}
                >
                </TextField>
            </Stack>
        </>
    );
}
