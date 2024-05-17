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
                placeholder="Buscar"
                sx={{width : 900}}
            />
            <Button 
            variant="contained"
            dx={{
                backgroundColor : 'gray',
                color : 'white'
            }}
            >Buscar</Button>
        </Box>
    );
}

export default SearchBar;