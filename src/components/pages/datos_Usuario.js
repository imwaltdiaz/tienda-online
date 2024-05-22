import * as React from "react";
import TitleBar from "../common/titleBar";
import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importa el hook

export default function Datos_Usuario() {
  const navigate = useNavigate(); // Inicializa el hook

  const handleGuardarClick = () => {
    // Aquí puedes añadir cualquier lógica adicional antes de la navegación
    navigate("/admin"); // Navega a la ruta /admin
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-start" paddingLeft="1vw">
        <Stack
          direction="column"
          justifyContent="flex-start"
          paddingLeft="1vw"
          paddingTop="20px"
          spacing={5}
        >
          <TitleBar title={"Login del Admin"} />
          <Stack
            display="flex"
            direction="column"
            justifyItems="center"
            alignItems="center"
            spacing={5}
          >
            <TextField
              id="nombre"
              placeholder="Nombre"
              variant="outlined"
            ></TextField>
            <TextField
              id="apellido"
              placeholder="Apellido"
              variant="outlined"
            ></TextField>
            <TextField
              id="correo"
              placeholder="Correo"
              variant="outlined"
            ></TextField>
            <Button
              variant="contained"
              onClick={handleGuardarClick} // Añade el onClick
            >
              Guardar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
