import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import Typography from "@mui/material/Typography";

export default function Agregar() {
  return (
    <>
      <Container>
        <Container
          //añadele bacground color
          sx={{
            backgroundColor: "#E4E4E5",
            padding: "10px",
          }}
        >
          <span><b>Agregar Producto</b></span>
        </Container>
        
      </Container>
    </>
  );
}