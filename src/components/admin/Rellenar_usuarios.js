import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

function GenerarLista(lista) {
  const navigate = useNavigate();
  let [datos, setDatos] = useState([]);
  
  useEffect(() => {
    const num = lista.length;
    let datosGenerados = [];
    for (let i = 0; i < num; i++) {
      const Id = i + 1;
      const nombre = lista[i].name;
      const apellido = lista[i].lastName;
      const correo = lista[i].email;
      const fecha = lista[i].date;
      const estado = "Activo";
      const botones = (
        <Button onClick={() => navigate(`/detalle_usuario/${Id}`, { state: { ordenes: lista[i].ordenes } })}>
          Ver
        </Button>
      );
      datosGenerados.push({ Id, nombre, apellido, correo, fecha, estado, botones });
    }
    setDatos(datosGenerados);
  }, [lista, navigate]);

  return datos;
}

export default GenerarLista;
