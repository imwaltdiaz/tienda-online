import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import IconButton from '@mui/material/IconButton';
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
          <Button href="/" variant="h1" sx={{fontWeight : 'bold', fontSize : '30px'}}>
            TIENDA
          </Button>
          <Button color="inherit" href="/busqueda" sx={{mx : '20px'}}>Mas vendidos</Button>
          <Button color="inherit" href="#Nuevos" sx={{mx : '20px'}}>Nuevos</Button>
          <Button color="inherit" href="/busqueda" sx={{mx : '20px'}}>Ofertas</Button>
          <Box sx={{flexGrow : 1}}/>
          <IconButton color="withe" href="/carritoDeCompras">
            <LocalGroceryStoreIcon/>
          </IconButton>
          <Button color ="inherit" href="#" sx={{mx : '20px'}}>Ayuda</Button>
          <Button color ="inherit" href="#" sx={{mx : '20px'}}>Mi Cuenta</Button>
          
        </Toolbar>
      </AppBar>
    </>

  )
}
export default Header2;

