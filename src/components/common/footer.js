import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import ListFooter from "./listFooter";

function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #e0e0e0",
        bgcolor: "#f9f9f9",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" component="p" fontWeight="bold">
              LA TIENDITA DEL ABUELO
            </Typography>

            <Typography variant="body2" color="textSecondary">
              © 2010 - 2020
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Privacy - Terms
            </Typography>
          </Stack>
          <ListFooter
            title="CUENTA"
            option1="Login"
            option2="Registro"
            option3="Carrito"
          />

          <ListFooter
            title="Productos"
            option1="Más vendidos"
            option2="Nuevos"
            option3="Ofertas"
          />
          <ListFooter
            title="Ayuda"
            option1="Acerca de Nosotros"
            option2="Política de Envío"
            option3="FAQ"
          />
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Link href="">
                <FacebookIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="">
                <InstagramIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="">
                <TwitterIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="">
                <YouTubeIcon />
              </Link>
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
