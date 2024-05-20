import Stack from '@mui/material/Stack';
import SCollection from '../common/SCollection';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from '../common/header2';
import Footer from '../common/footer';
import SearchBar from '../common/searchBar';
import Button  from '@mui/material';

function Collections(){
    return(
       <>   
            <Header2/>
            <SearchBar/>
            <Box
            //Coleccion de Items
            sx={{
                px : 8,
                pt : 6
            }}
            >
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <SCollection
                    txt="Colección de Items 1: Especiales para regresar al colegio"
                    hiperv="Learn More"
                    src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                    width='400px'
                    height='400px'
                    />
                    <SCollection
                    txt="Colección de Items 2: Especiales para la casa"
                    hiperv="Learn More"
                    src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                    width='400px'
                    height='400px'
                    />
                    <SCollection
                    txt="Colección de Items 3: Especiales para los pequeños"
                    hiperv="Learn More"
                    src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                    width='400px'
                    height='400px'
                    />
                </Stack>
            </Box>

            <Box 
                //Items fila 1
                sx={{
                    px : 8,
                    pt : 8
                }}
            >
                <Stack
                 direction="row"
                 justifyContent="space-between"
                 alignItems="center"
             >
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
             </Stack>
            </Box>

            <Box
                //Items fila 2
                sx={{
                    px : 8,
                    pt : 8
                }}
            >
                <Stack
                 direction="row"
                 justifyContent="space-between"
                 alignItems="center"
             >
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
             </Stack>
            </Box>

            <hr style={{ border: "5px solid black", width: "100%"}} />

            <Typography sx={{fontSize : '4rem'}} id="Nuevos">NUEVOS</Typography>

            <Box
                sx={{
                    px : 8,
                    pt : 8,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <SCollection
                        txt="Magic The Gathering: Colección de Invierno Fase2 2024"
                        hiperv="Learn More"
                        src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                        width='1000px'
                        height='600px'
                    />
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SCollection
                        txt="Magic The Gathering: Colección de Invierno Fase2 2024"
                        hiperv="Learn More"
                        src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                        width='700px'
                        height='300px'
                    />
                    <SCollection
                        txt="Magic The Gathering: Colección de Invierno Fase2 2024"
                        hiperv="Learn More"
                        src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                        width='700px'
                        height='300px'
                    />
                </Stack>
                </Stack>
            </Box>
                
            <Box
                sx={{
                    px : 8,
                    pt : 8
                }}
            >
                <Stack
                 direction="row"
                 justifyContent="space-between"
                 alignItems="center"
                >
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                 <SCollection
                     txt="Item1"
                     hiperv="Learn More"
                     src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
                     width='150px'
                     height='200px'
                 />
                </Stack>
            </Box>
            <Footer/>
       </>
    );
}

export default Collections;