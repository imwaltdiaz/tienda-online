import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="static"
      sx = {{
        color: '#fff',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      TIENDA
    </AppBar>

  )
}
export default Header;

