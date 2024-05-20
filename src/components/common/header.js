import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="static"
      sx = {{
        color: '#0F9CDC',
        padding: '20px',
        marginBottom: '20px'
      }}
    >
      TIENDA
    </AppBar>

  )
}
export default Header;

