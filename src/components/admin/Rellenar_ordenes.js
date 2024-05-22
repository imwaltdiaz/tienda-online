import { Button } from '@mui/material';

function GenerarOrdenes(lista, navigate) {
  const datosGenerados = lista.map((item, index) => ({
    id: item.id,
    usuario: item.name,
    fecha: item.date,
    correo: item.email,
    total: item.total,
    estado: "Activo",
    botones: (
      <Button onClick={() => navigate(`/detalle_orden/${index + 1}`, { state: { ordenes: item.ordenes } })}>
        Ver
      </Button>
    )
  }));
  return datosGenerados;
}
export default GenerarOrdenes;