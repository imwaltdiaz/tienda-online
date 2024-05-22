import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/joy/Link";
import Footer from "../common/footer";
import Header from "../common/header";
import { Stack } from "@mui/material";
import SCollection from "../user/SCollection";

export default function TermPed() {
  return (
    <>
      <Header />
      <Typography variant="h5" component="p" sx={{ textAlign: "center" }}>
        Muchas gracias por su pedido!
      </Typography>
      <Typography variant="body1" component="p" sx={{ textAlign: "center" }}>
        Puedes ver el detalle y estado de tu pedido ingresando a{" "}
        <Link href="#">tu cuenta</Link>
      </Typography>

      <Typography variant="h5" component="p" pt={20}>
        También te podría interesar...
      </Typography>
      <Box
        //Items fila 1
        sx={{
          px: 8,
          pt: 6,
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
            width="150px"
            height="200px"
          />
          <SCollection
            txt="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="150px"
            height="200px"
          />
          <SCollection
            txt="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="150px"
            height="200px"
          />
          <SCollection
            txt="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="150px"
            height="200px"
          />
          <SCollection
            txt="Item1"
            hiperv="Learn More"
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            width="150px"
            height="200px"
          />
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
