//Crea componente DrawerDev
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function DrawerDev() {
  return (
    <Container
      //añade un padding en top
      sx={{
        paddingTop: "20px",

      }}
      style = {
        {
          width: "340px",
          margin: 0
        }
      }
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
        <Link variant="body1"  align="left" href="#">
          Admin
        </Link>
        <Stack
          // añade padding left
          spacing={2}
          sx={{
            paddingLeft: "20px",
          }}
        >
          <Link variant="body2" color="textSecondary" href="/dashboard">
            Dashboard
          </Link>
          <Link variant="body2" color="textSecondary" href="#">
            Usuarios registrados
          </Link>
          <Link variant="body2" color="textSecondary" href="/productos">
            Productos
          </Link>
          <Link variant="body2" color="textSecondary" href="#">
            Órdenes
          </Link>
          <Link variant="body2" color="textSecondary" href="#">
            Productos mas vendidos
          </Link>
          <Link variant="body2" color="textSecondary" href="/series">
            Series
          </Link>
        </Stack>
      </Stack>
      
    </Container>
  );
}

export default DrawerDev;
