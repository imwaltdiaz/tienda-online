import React, { useState } from 'react';
import { Container, Typography, Box, Link, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Pagination } from '@mui/material';
import Header from '../common/header';
import Footer from '../common/footer';

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState('inicio');
  const [page, setPage] = useState(1);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'ordenes-recientes':
        const ordersPerPage = 4;
        const orders = [
          { order: 'Orden x3 Items(Juego de cartas, juego de cartas..)', date: 'orden Nro. 12345232', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x4 Items(Pokemon Red, Pokemon Blue, Ghost of Tsushima..)', date: 'orden Nro. 12345232', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x4 Items(Pokemon Red, Pokemon Blue, Ghost of Tsushima..)', date: 'orden Nro. 12345232', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x4 Items(Pokemon Red, Pokemon Blue, Ghost of Tsushima..)', date: 'orden Nro. 12345232', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x5 Items(Legend of Zelda, Super Mario, Animal Crossing..)', date: 'orden Nro. 12345233', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x6 Items(Final Fantasy, Dragon Quest, Resident Evil..)', date: 'orden Nro. 12345234', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x7 Items(Metal Gear Solid, Silent Hill, Castlevania..)', date: 'orden Nro. 12345235', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x8 Items(Assassin\'s Creed, Far Cry, Watch Dogs..)', date: 'orden Nro. 12345236', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x9 Items(The Witcher, Cyberpunk, Bloodborne..)', date: 'orden Nro. 12345237', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x10 Items(Mass Effect, Dragon Age, Anthem..)', date: 'orden Nro. 12345238', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
          { order: 'Orden x11 Items(GTA V, RDR2, Max Payne..)', date: 'orden Nro. 12345239', status: 'Ver Detalle', detail: 'Fecha: 12 de febrero de 2022 - Total: S/122.00', enviado: 'Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru' },
        ];
        
        const startIndex = (page - 1) * ordersPerPage;
        const endIndex = startIndex + ordersPerPage;
        const displayedOrders = orders.slice(startIndex, endIndex);
        
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Órdenes recientes
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
              <Table sx={{ border: 'none' }}>
                <TableBody>
                  {displayedOrders.map((row, index) => (
                    <TableRow key={index} sx={{ border: 'none' }}>
                      <TableCell sx={{ border: 'none' }}>
                        <Typography variant="body1">{row.order}</Typography>
                        <Typography variant="body2" color="textSecondary">{row.detail}</Typography>
                        <Typography variant="body2" color="textSecondary">{row.enviado}</Typography>
                      </TableCell>
                      <TableCell sx={{ border: 'none' }}>{row.date}</TableCell>
                      <TableCell sx={{ border: 'none' }}>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Pagination
                count={Math.ceil(orders.length / ordersPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Box>
          </Box>
        );
      case 'datos-registro':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Datos de registro
            </Typography>
            <Typography variant="body1">
              Aquí puedes ver y actualizar tus datos de registro.
            </Typography>
          </Box>
        );
      case 'cambiar-password':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Cambiar contraseña
            </Typography>
            <Typography variant="body1">
              Aquí puedes cambiar tu contraseña.
            </Typography>
          </Box>
        );
      default:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Bienvenido a tu cuenta
            </Typography>
            <Typography variant="body1">
              Aquí puedes ver y gestionar tu información personal y tus órdenes recientes.
            </Typography>
          </Box>
        );
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', mt: 4 }}>
          <Box sx={{ width: '250px', mr: 4 }}>
            <Typography variant="h6" gutterBottom>
              Mi cuenta
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component="button" variant="body1" sx={{ mb: 1 }} onClick={() => setSelectedSection('ordenes-recientes')}>
                Órdenes recientes
              </Link>
              <Link component="button" variant="body1" sx={{ mb: 1 }} onClick={() => setSelectedSection('datos-registro')}>
                Datos de registro
              </Link>
              <Link component="button" variant="body1" onClick={() => setSelectedSection('cambiar-password')}>
                Cambiar contraseña
              </Link>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {renderContent()}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
