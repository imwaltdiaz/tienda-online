import Stack from '@mui/material/Stack';
import SCollection from '../user/SCollection';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from '../user/headerU';
import Footer from '../common/footer';
import SearchBar from '../user/searchBar';
import AppBar from '@mui/material/AppBar';

function Principal(){
    return(
       <>   
            <Header2/>
            <SearchBar/>
            <Box
            //Coleccion de Items
            sx={{
                pt : 6,
                mx : 8,
            }}
            >
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                
                >
                    <SCollection
                    txtL1="Colección de Items 1: Especiales"
                    txtL2="para regresar al colegio"
                    hiperv="Learn More"
                    src="https://www.businessempresarial.com.pe/wp-content/uploads/2023/02/Campana-escolar-Tottus-780x470.jpeg"
                    width='25vw'
                    height='50vh'
                    />
                    <SCollection
                    txtL1="Colección de Items2: Especiales"
                    txtL2="para la casa"
                    hiperv="Learn More"
                    src="https://rumah.com.pe/cdn/shop/files/Portada-30---westinghouse-extend.png?v=1691519615&width=3000"
                    width='25vw'
                    height='50vh'
                    />
                    <SCollection
                    txtL1="Colección de Items3: Especiales"
                    txtL2="para los pequeños"
                    hiperv="Learn More"
                    src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/f17a596c-8cd8-4e89-b824-022c8e4ab261___8dfc1b35a8ec759156cd07d5a9b97fc3.jpg"
                    width='25vw'
                    height='50vh'
                    />
                </Stack>
            </Box>

            <Box 
                //Items fila 1
                sx={{
                    pt: 6,
                    mx : 8,
                    justifyContent : 'center'
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SCollection
                        txtL1="Item1"
                        hiperv="Learn More"
                        src="https://corporacionliderperu.com/47149-large_default/cocinero-aceite-bt-x-900-ml.jpg"
                        width='12vw'
                        height='30vh'
                    />
                    <SCollection
                        txtL1="Item1"
                        hiperv="Learn More"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhuhQlqzEXcCynTkXOZhHEeYPKyJBBuVZYl1buLtZMg&s"
                        width='12vw'
                        height='30vh'
                    />
                    <SCollection
                        txtL1="Item1"
                        hiperv="Learn More"
                        src="https://electroluxpe.vtexassets.com/arquivos/ids/159279/Blender_EBS20_Perspective_Electrolux_1000x1000.jpg?v=637888545873470000"
                        width='12vw'
                        height='30vh'
                    />
                    <SCollection
                        txtL1="Item1"
                        hiperv="Learn More"
                        src="https://falabella.scene7.com/is/image/FalabellaPE/gsc_115244582_1055792_1?wid=1500&hei=1500&qlt=70"
                        width='12vw'
                        height='30vh'
                    />
                    <SCollection
                        txtL1="Item1"
                        hiperv="Learn More"
                        src="https://besgul.pe/wp-content/uploads/2022/10/Mochila-3-Piezas-a.jpeg"
                        width='12vw'
                        height='30vh'
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
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://vegaperu.vtexassets.com/arquivos/ids/165560/210001.jpg?v=638423078966730000"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://plazavea.vteximg.com.br/arquivos/ids/561008-450-450/20130448.jpg?v=637427417082570000"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                    txtL1="Item1"
                     hiperv="Learn More"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMO63qalbID4AxdCopW60yPctR4fSHedULxfiyDr94g&s"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/l/o/lonchera-kipit-acolchada-azul-acero-63483-default-1.jpg"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://plazavea.vteximg.com.br/arquivos/ids/24844118-512-512/358217.jpg"
                     width='12vw'
                     height='30vh'
                 />
             </Stack>
            </Box>

            <AppBar position="static"
                sx = {{
                    backgroundColor: 'black',
                    padding: '10px',
                    marginTop : '100px',
                    marginBottom: '50px'
                }}
            >
            </AppBar>

            <Typography id="Nuevos" sx={{fontSize : '4rem', ml : 8} }>NUEVOS</Typography>

            <Box 
                sx={{
                    mx : 8,
                    pt : 8,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <SCollection
                        txtL1="Magic The Gathering: Colección de Invierno Fase2 2024"
                        txtL2="Nueva Temporada"
                        hiperv="Learn More"
                        src="https://images.ctfassets.net/s5n2t79q9icq/6QPwg3EEdBnhHeIGwonKTf/364e43fdd14542e3c2d4f485317823ef/uxyci7dshzjknw_Collector_EN.png"
                        width='50vw'
                        height='60vh'
                    />
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SCollection
                        txtL1="GI Joe Classified Series Big Boa, Airborne & More"
                        hiperv="Learn More"
                        src="https://i0.wp.com/toy-wizards.com/wp-content/uploads/2023/12/gijoe-wave-mutt-copy.jpg?fit=1200%2C602&ssl=1"
                        width='40vw'
                        height='30vh'
                    />
                    <SCollection
                        txtL1="Spawn 30 Anniversary"
                        hiperv="Learn More"
                        src="https://cdn11.bigcommerce.com/s-hlbgbzrg7y/images/stencil/1280x1280/products/1491/16535/Bundle__01368.1708534935.png?c=1"
                        width='40vw'
                        height='30vh'
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
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStr7calOehHvhMaus6_ed7XUaiEG8scT4-d9SPI8Xq7Q&s"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://pbs.twimg.com/media/FircqQOXEAACPmx.jpg"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://realsportperu.com/wp-content/uploads/2021/08/NEGRO-TRIANGULO_1-scaled.jpg"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://promart.vteximg.com.br/arquivos/ids/6673886-1000-1000/1000240429.jpg?v=638083792851630000"
                     width='12vw'
                     height='30vh'
                 />
                 <SCollection
                     txtL1="Item1"
                     hiperv="Learn More"
                     src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19031549_1/w=1500,h=1500"
                     width='12vw'
                     height='30vh'
                 />
                </Stack>
            </Box>
            <Footer/>
       </>
    );
}

export default Principal;
