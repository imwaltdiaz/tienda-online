import { Box, Button, TextField } from "@mui/material";

function SearchBar(){
    return(
        <Box
            sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                gap : 1,
                marginTop : 2,
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Buscar productos por nombre..."
                sx={{width : 2300}}
            />
            <Button variant="contained" href="/busqueda" sx={{backgroundColor : 'gray', color : 'white', width : '5%', height : '4vh'}}>Buscar</Button>
        </Box>
    );
}

export default SearchBar;