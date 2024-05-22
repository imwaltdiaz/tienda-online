import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AgregarSerie() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook para la navegación
  const { serie } = location.state || {}; // Maneja el caso donde no hay serie en el state
  const [nombre, setNombre] = useState(serie?.nombre || '');
  const [descripcion, setDescripcion] = useState(serie?.descripcion || '');
  const [productos, setProductos] = useState(serie?.productos || []);

  const handleAddProduct = () => {
    const newProduct = { id: productos.length + 1, descripcion: 'Nuevo Producto' };
    setProductos([...productos, newProduct]);
  };

  const handleRemoveProduct = (product) => {
    setProductos(productos.filter(p => p.id !== product.id));
  };

  const handleGuardarClick = () => {
    navigate('/admin/series'); // Navega de regreso a la página de Series
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="h5" gutterBottom>Agregar Serie</Typography>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" gutterBottom>Agregar Serie</Typography>
          <Box sx={{ border: '1px solid #ccc', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="caption">Imagen Placeholder</Typography>
          </Box>
          <Button variant="contained" component="label" sx={{ marginTop: '10px' }}>
            Agregar Imagen
            <input type="file" hidden />
          </Button>
        </Box>
        <Box sx={{ flex: 2 }}>
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
            multiline
            rows={4}
            sx={{ marginBottom: '10px' }}
          />
          <Typography variant="h6" gutterBottom>Productos en la serie</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <IconButton onClick={handleAddProduct} color="primary">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleGuardarClick}>Guardar</Button>
      </Box>
    </Box>
  );
}
