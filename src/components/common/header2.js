import { Box, Typography, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Link as MuiLink } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
function Header2() {
  return (
    <>
      <AppBar position="static"
        sx = {{
          color: '#fff',
          padding: '20px',
          marginBottom: '20px'
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{fontWeight : 'bold'}}>
            TIENDA
          </Typography>
          <Button color="inherit" href="#Nuevos">Mas vendidos</Button>
          <Button color="inherit" href="/home">Nuevos</Button>
          <Button color="inherit" href="/home">Ofertas</Button>
        </Toolbar>
      </AppBar>
    </>

  )
}
export default Header2;

