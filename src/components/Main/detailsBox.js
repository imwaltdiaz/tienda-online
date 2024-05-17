import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";


function DetailsBox(){
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
            <Box
            sx={{
                width: '25%',
                    minHeight: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    pt: 2,
                    border: '2px solid gray',
                    mr: 8,
                    borderRadius: 2
            }}
            >
        </Box>

        </Stack>
        
        
    </>
    );
    
}
export default DetailsBox;