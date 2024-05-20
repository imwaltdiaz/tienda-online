import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const NuevaCuenta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    confirmarPassword: ''
  });
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, apellido, correo, password, confirmarPassword } = formData;

    if (password !== confirmarPassword) {
      setMensajeError('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos enviados:', { nombre, apellido, correo, password });

    setFormData({
      nombre: '',
      apellido: '',
      correo: '',
      password: '',
      confirmarPassword: ''
    });
    setMensajeError('');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registrar una nueva cuenta
        </Typography>
        {mensajeError && <Typography color="error">{mensajeError}</Typography>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: '400px', mx: 'auto', mt: 2 }}
        >
          <TextField
            label="Nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Correo electrónico"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirmar Contraseña"
            type="password"
            name="confirmarPassword"
            value={formData.confirmarPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Crear nueva cuenta
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NuevaCuenta;
