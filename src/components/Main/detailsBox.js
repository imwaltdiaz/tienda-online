import { Box, Button, Stack, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';

function DetailsBox(){
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - 1,0));
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    
    return(
        <>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"

        >
            <Box
                sx={{
                    width: '60%',
                    minHeight: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    pt: 2,
                    border: '2px solid gray',
                    ml: 8,
                    borderRadius: 2
                }}
            >
            </Box>
            <Box sx={{ 
                width: '25%', 
                height: '70vh', 
                display: 'flex', 
                flexDirection: 'column', 
                mx : 8
                }}>
            <Box sx={{ 
                width: '100%', 
                height: '10%', 
                border: '2px solid gray',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center'
                }}
            >
                <Typography variant="h4">DISPONIBLE</Typography>
                
            </Box>
            <Box sx={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'lightgray',
                border: '2px solid gray',
                display : 'flex',
                justifyContent : 'center',
                textAlign : 'center',
                pt : 2
                }}
            >
                <Stack
                    direction="column" spacing={4}
                >
                    <Typography variant="h3" fontWeight="bold">S/88.99</Typography>
                    <Button variant="contained">AÑADIR AL CARRITO</Button>
                    <Typography variant="h6" fontWeight="bold">Cantidad:</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            padding: '10px',
                            width: '150px',
                        }}
                    >
                        <Button variant="contained" onClick={handleDecrement} sx={{ minWidth: '30px', marginRight: '10px' }}>
                            -
                        </Button>
                        <Typography variant="h6" sx={{ minWidth: '30px', textAlign: 'center' }}>
                            {count}
                        </Typography>
                        <Button variant="contained" onClick={handleIncrement} sx={{ minWidth: '30px', marginLeft: '10px' }}>
                            +
                        </Button>
                    </Box>
                    <Link href="#">Ver metodos disponibles</Link>
                </Stack>
            </Box>
        </Box>
        </Stack>
        </>
    );
    
}
export default DetailsBox;