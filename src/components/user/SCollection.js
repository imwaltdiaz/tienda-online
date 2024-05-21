import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import Box from "@mui/material/Typography";

function SCollection({txtL1,txtL2,hiperv,src,width,height}){
    return(
        <Stack
            direction = "column"
            alignItems = "start"
        >
            <Box 
                component="img"
                src= {src}
                alt="imagen"
                sx={{
                    maxWidth : {width},
                    height : {height},
                }}
            />
            <Typography variant='h4' pt={4}>
                {txtL1}<br/>{txtL2}
            </Typography>
            <Link href="/detalles" target="_blank" rel="noopener" variant='h6' sx={{pt : 2, textDecoration : 'none', color : 'black'}}>
                {hiperv}
            </Link>
        </Stack>
    );
}
export default SCollection;