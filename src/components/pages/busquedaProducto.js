import { Box } from "@mui/material";
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import ListaItemCarr from "../user/ItemBusqueda";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Header2 from '../user/headerU';
import Footer from '../common/footer';
function Busqueda(){
    
    const [selectedValue, setSelectedValue] = useState(1);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return(
        <>
            <Header2/>
            <Box
                sx={{
                    display : 'flex',
                    justifyContent : 'flex-end',
                    mx : 5,
                    alignItems : 'center'
                }}
            >
                <Typography variant="h6" fontWeight="bold" sx={{mr : 2}}>Ordenar Por:</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    onChange={handleChange}
                    sx={{
                        width : '10vw'
                    }}
                >
                    <MenuItem value={1}>Precio</MenuItem>
                    <MenuItem value={2}>Nombre</MenuItem>
                </Select>
                
            </Box>
            <Box
                sx={{
                    width: '95.5%',
                    minHeight: '4vh',
                    display : 'flex',
                    alignItems : 'center',
                    border: '2px solid gray',
                    backgroundColor : 'lightgray',
                    mx : 5,
                    mt : 2
                }}
            >
                <Typography variant="h5">
                    Resultados de busqueda
                </Typography>
            </Box>
            
            <Box
                sx={{
                    mx : 5,
                    mt : 2
                }}
            >
                <ListaItemCarr
                imagen = "https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                nombre = "Voltron Mini Action Voltron Vehicle Force Figure (Standart)"
                fabricante= "Bandai"
                precio = "65.99"
                />
                <ListaItemCarr
                imagen = "https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                nombre = "Saint Seiya HQS Plus Anthena Limited Edition Statue"
                fabricante= "Bandai - Serie: Saint Seiya HQS"
                precio = "185.89"
                />
                <ListaItemCarr
                imagen = "https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                nombre = "Saint Seiya Premium Masterline Dragon Shiryu Final Bronze Cloth 1/4 Scale Statue"
                fabricante= "Prime 1 Studio - Serie: Knights of The Zodiac"
                precio = "4599.69"
                />
                <ListaItemCarr
                imagen = "https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                nombre = "Voltron Mini Action Voltron Vehicle Force Figure (Standart)"
                fabricante= "Bandai"
                precio = "2500.36"
                />
            </Box>
            <Box
                sx={{
                    display : "flex",
                    justifyContent : "flex-end",
                    mx : 5,
                    mt : 50
                }}
            >
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded"/>
                </Stack>
            </Box>
            <Footer/>
        </>
    );
}
export default Busqueda;