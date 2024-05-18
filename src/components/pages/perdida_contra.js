import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailSent(true);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Ingrese su correo para recuperar contraseña
        </Typography>
        {!emailSent ? (
          <form onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Enviar
            </Button>
          </form>
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Se ha enviado un correo electrónico para restablecer tu contraseña.
          </Typography>
        )}
        <Box sx={{ mt: 2 }}>
          <Link href="/login" variant="body2">
            Regresar a Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
