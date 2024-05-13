//Crea componente DrawerDev
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function DrawerDev() {
  return (
    <Container
      //añade un padding en top
      sx={{
        paddingTop: "20px",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        spacing={2}
        alignItems="left"
        maxWidth={150}
        backgroundColor="#f5f5f5"
        sx={{
          padding: "30px",
        }}
      >
        <Typography variant="body1" component="h1" align="left">
          Admin
        </Typography>
        <Stack
          //añade padding left
          spacing={2}

          sx={{
            paddingLeft: "20px",
            
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Usuarios registrados
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Productos
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Órdenes
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Productos mas vendidos
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Series
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default DrawerDev;
