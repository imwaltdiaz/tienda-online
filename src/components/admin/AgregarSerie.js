import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';

export function AgregarSerie() {
  const location = useLocation();
  const { serie } = location.state;
  const [nombre, setNombre] = useState(serie.nombre);
  const [descripcion, setDescripcion] = useState(serie.descripcion);
  const [productos, setProductos] = useState(serie.productos || []);
  
  const handleAddProduct = (product) => {
    setProductos([...productos, product]);
  };

  const handleRemoveProduct = (product) => {
    setProductos(productos.filter(p => p.id !== product.id));
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="h6">Agregar Serie</Typography>
      <Box>
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          fullWidth
          sx={{ marginBottom: '10px' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant="h6">Productos en la serie</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>{producto.id}</TableCell>
                  <TableCell>{producto.descripcion}</TableCell>
                  <TableCell>
                    <Button color="secondary" onClick={() => handleRemoveProduct(producto)}>Remover</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={() => handleAddProduct({ id: productos.length + 1, descripcion: 'Nuevo Producto' })}>
          +
        </Button>
      </Box>
      <Button variant="contained" color="primary">Guardar</Button>
    </Box>
  );
}
