import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import Box from "@mui/material/Typography";

function SCollection({txt,hiperv,src,width,height}){
    return(
        <Stack
            direction = "column"
            justifyContent = "space-between"
            alignItems = "start"
        >
            <Box 
                component="img"
                src= {src}
                alt="imagen"
                sx={{
                    maxWidth : {width},
                    height : {height}    
                }}
            />
            <Typography variant="body2">
                {txt}
            </Typography>
            <Link href="#" target="_blank" rel="noopener">
                {hiperv}
            </Link>
        </Stack>
    );
}
export default SCollection;