import { CabeceraAdmin } from "../common/CabeceraAdmin";
import Container from "@mui/material/Container";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import Typography from "@mui/material/Typography";

export function Dashboard() {
  const card0 = (
    <React.Fragment>
      <CardContent
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "100px",
          width: "200px",
          backgroundColor: "#E4E4E5"

        }}
      >
        <Typography variant="h2" component="div">
          68
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Órdenes el dia de hoy
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card1 = (
    <React.Fragment>
      <CardContent
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "100px",
          width: "200px",
          backgroundColor: "#E4E4E5"
        }}
      >
        <Typography variant="h2" component="div">
          12
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Usuarios nuevos
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "100px",
          width: "200px",
          backgroundColor: "#E4E4E5"

        }}
      >
        <Typography variant="h3" component="div">
          S/13.5k
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ingresos de hoy
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <Container>
        <Stack direction="column">
          <CabeceraAdmin></CabeceraAdmin>
          <Stack direction="row" justifyContent="space-between" pt="20px">
            <Card variant="outlined">{card0}</Card>
            <Card variant="outlined">{card1}</Card>
            <Card variant="outlined">{card2}</Card>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
