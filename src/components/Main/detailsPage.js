import DetailsBox from "./detailsBox";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Header2 from '../common/header2';
import Footer from '../common/footer';
import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

function Details(){
    
    return(
        <>
            <Header2/>
            <Typography sx={{fontSize : '2rem', px : 8}}>Titulo del Producto:</Typography>

            <br/>
            <Typography sx={{fontSize : '1.5rem', px : 8}}>Por: -Serie:</Typography>

            <hr style={{ border: "5px solid black", width: "93%" }} />

            <DetailsBox/>

            <Typography variant="body1" component="p" fontWeight="bold" px={8} pt={2}>Descripcion:</Typography>
            <Typography variant="body1" component="p" px={8} pt={2}>
                Descripcion del producto
            </Typography>
            
            <Box
                sx={{
                    backgroundColor : 'lightgray',
                    px : 8
                }}
            >
                <Typography variant="body1" component="p" fontWeight="bold"pt={2}>Caracteristicas del producto:</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Mide 18centimetros" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Hecho de PVC" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="De la serie Voltron" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Articulado" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="15piezas distintas"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Combinable con otras figuras" />
                    </ListItem>
                </List>
            </Box>
  
            <Footer/>
        </>
        
    );
}
export default Details;