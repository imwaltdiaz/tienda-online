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
          }}
        >
          Agregar Producto
        </Typography>
        <form>
          <Grid container spacing={2}
            sx = {
              {
                mt: '5px',
              }
            }>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: "90%",
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
                  maxWidth: "50%",
                }}
              >
                Agregar Imagen
                <input
                  type="file"
                  hidden
                  //añadele maximo de tamaño
                />
              </Button>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
