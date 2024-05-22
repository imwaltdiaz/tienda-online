import { Button } from '@mui/material';

function GenerarLista(lista, navigate) {
  const datosGenerados = lista.map((item, index) => ({
    id: index + 1,
    nombre: item.name,
    apellido: item.lastName,
    correo: item.email,
    fecha: item.date,
    estado: "Activo",
    botones: (
      <Button onClick={() => navigate(`/detalle_usuario/${index + 1}`, { state: { ordenes: item.ordenes } })}>
        Ver
      </Button>
    )
  }));

  return datosGenerados;
}

export default GenerarLista;
