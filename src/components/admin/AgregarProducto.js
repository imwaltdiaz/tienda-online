import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

function generateShortId() {
  return Math.floor(Math.random() * 90000) + 10000; // Generar un número entre 10000 y 99999
}

export default function AgregarProducto() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [product, setProduct] = useState({
    id: generateShortId(), // Generar un ID único para cada producto
    detalle: '',
    descripcion: '',
    caracteristicas: '',
    marca: '',
    serie: '',
    precio: '',
    fechaRegistro: new Date().toLocaleDateString(),
    stock: 0,
    estado: 'Activo'
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const existingProducts = JSON.parse(localStorage.getItem('productos')) || [];
    if (existingProducts.find(p => p.id === product.id)) {
      // Editar producto existente
      const updatedProducts = existingProducts.map(p => p.id === product.id ? product : p);
      localStorage.setItem('productos', JSON.stringify(updatedProducts));
    } else {
      // Añadir nuevo producto
      localStorage.setItem('productos', JSON.stringify([...existingProducts, product]));
    }

    // Redirigir a la tabla de productos
    navigate('/productos');
  };

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
          {location.state && location.state.product ? 'Editar Producto' : 'Agregar Producto'}
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
                  justifyContent:"center",
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
                name="detalle"
                label="Nombre"
                fullWidth
                margin="normal"
                size="small"
                sx={{ marginTop: "10px" }}
                onChange={handleChange}
                value={product.detalle}
              />
              <label>Descripción</label>
              <TextField
                name="descripcion"
                label="Descripción"
                fullWidth
                multiline
                rows={2}
                margin="normal"
                size="big"
                sx={{ marginTop: "10px" }}
                onChange={handleChange}
                value={product.descripcion}
              />
              <label>Características</label>
              <TextField
                name="caracteristicas"
                label="Características"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                size="big"
                sx={{ marginTop: "10px" }}
                onChange={handleChange}
                value={product.caracteristicas}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Stack direction="column">
                  <label>Marca</label>
                  <TextField
                    name="marca"
                    label="Marca"
                    fullWidth
                    multiline
                    rows={1}
                    margin="normal"
                    size="small"
                    sx={{ marginTop: "10px" }}
                    onChange={handleChange}
                    value={product.marca}
                  />
                </Stack>

                <Stack direction="column">
                  <label>Serie</label>
                  <TextField
                    name="serie"
                    label="Serie"
                    fullWidth
                    multiline
                    rows={1}
                    margin="normal"
                    size="small"
                    sx={{ marginTop: "10px" }}
                    onChange={handleChange}
                    value={product.serie}
                  />
                </Stack>
                <Stack direction="column">
                  <label>Precio</label>
                  <TextField
                    name="precio"
                    label="S/"
                    fullWidth
                    multiline
                    rows={1}
                    margin="normal"
                    size="small"
                    sx={{ marginTop: "10px" }}
                    onChange={handleChange}
                    value={product.precio}
                  />
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
                gap="20px"
              >
                <Stack direction="column">
                  <label>Stock</label>
                  <TextField
                    name="stock"
                    label="Stock"
                    fullWidth
                    multiline
                    rows={1}
                    margin="normal"
                    size="small"
                    sx={{ marginTop: "10px" }}
                    onChange={handleChange}
                    value={product.stock}
                  />
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                width="100%"
                gap="20px"
                sx={{
                  borderTop: "1px",
                  marginTop: "20px",
                  paddingTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{ width: "250px" }}
                >
                  Guardar
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  );
}
