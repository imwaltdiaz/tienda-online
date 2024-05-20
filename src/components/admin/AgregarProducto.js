import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function AgregarProducto() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ p: 3, width: "85vw", pr: 5 }}>
        <Typography
          variant="span"
          component="p"
          gutterBottom
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            fontWeight: "bold",
            mb: "20px",
          }}
        >
          Agregar Producto
        </Typography>
        <form>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column "
              justifyContent="space-evenly"
              gap="30px"
              alignItems="center"
            >
              <Box
                sx={{
                  width: "380px",
                  height: 200,
                  border: "1px solid #ddd",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              ></Box>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{
                  width: "250px",
                }}
              >
                Agregar Imagen
                <input type="file" hidden />
              </Button>
            </Stack>
            <Stack direction="column " alignItems="left" width="100%" ml="40px">
              <label>Nombre</label>
              <TextField
                label="Nombre"
                fullWidth
                margin="normal"
                size="small"
                sx={{
                  marginTop: '10px',
                }}
              />
              <label>Descripción</label>
              <TextField
                label="Descripcion"
                fullWidth
                //hazle tamaño altura mas grande
                multiline
                rows={2}
                margin="normal"
                size="big"
                sx={{
                  marginTop: '10px',
                }}
              />
              <label>Características</label>
              <TextField
                label="Descripcion"
                fullWidth
                //hazle tamaño altura mas grande
                multiline
                rows={4}
                margin="normal"
                size="big"
                sx={{
                  marginTop: '10px',
                }}
              />
              
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  );
}
