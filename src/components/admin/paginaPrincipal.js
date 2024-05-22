import Stack from "@mui/material/Stack";
import SCollection from "../user/SCollection";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../user/headerU";
import Footer from "../common/footer";
import SearchBar from "../user/searchBar";
import AppBar from "@mui/material/AppBar";

function Principal() {
  return (
    <>
      <Header2 />
      <SearchBar />
      <Box
        //Coleccion de Items
        sx={{
          pt: 6,
          mx: 8,
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
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="25vw"
            height="50vh"
          />
          <SCollection
            txtL1="Colección de Items2: Especiales"
            txtL2="para la casa"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="25vw"
            height="50vh"
          />
          <SCollection
            txtL1="Colección de Items3: Especiales"
            txtL2="para los pequeños"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="25vw"
            height="50vh"
          />
        </Stack>
      </Box>

      <Box
        //Items fila 1
        sx={{
          pt: 6,
          mx: 8,
          justifyContent: "center",
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
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
        </Stack>
      </Box>

      <Box
        //Items fila 2
        sx={{
          px: 8,
          pt: 8,
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
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
        </Stack>
      </Box>

      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          padding: "10px",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      ></AppBar>

      <Typography id="Nuevos" sx={{ fontSize: "4rem", ml: 8 }}>
        NUEVOS
      </Typography>

      <Box
        sx={{
          mx: 8,
          pt: 8,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <SCollection
            txtL1="Magic The Gathering: Colección de Invierno Fase2 2024"
            txtL2="Nueva Temporada"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="50vw"
            height="60vh"
          />
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <SCollection
              txtL1="GI Joe Classified Series Big Boa, Airborne & More"
              hiperv="Learn More"
              src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
              width="40vw"
              height="30vh"
            />
            <SCollection
              txtL1="Spawn 30 Anniversary"
              hiperv="Learn More"
              src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
              width="40vw"
              height="30vh"
            />
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          px: 8,
          pt: 8,
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
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
          <SCollection
            txtL1="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="12vw"
            height="30vh"
          />
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default Principal;
