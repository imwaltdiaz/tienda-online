//Crea componente DrawerDev
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function DrawerDev() {
  return (
    <Container
      //añade un padding en top
      //añade max width de 250px

      sx={{
        paddingTop: "20px",
        width: "340px",
        margin: 0


      }
      }
    >
      <Box
        sx={{
          width: '15vw',
          height: '76vh', 
          bgcolor: '#F6F6F6',
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="left"
          sx={{
            paddingTop: "20px",
            paddingLeft: "20px",
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
            <Link variant="body2" color="textSecondary" href="/lista-usuarios">
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
      </Box>
    </Container>
  );
}

export default DrawerDev;
