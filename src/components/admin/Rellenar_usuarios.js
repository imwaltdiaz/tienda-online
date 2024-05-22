import { useState, useEffect } from "react";
import { Detalle_Orden } from "../pages/Detalle_Orden";
import { Detalle_Usuario } from "../pages/Detalle_Usuarios";
function GenerarLista(lista) {
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
      const botones = <boton  onClick={Detalle_Usuario(lista[i].ordenes)}>Ver</boton>;
      datosGenerados.push({ Id, nombre, apellido, correo, fecha, estado, botones});
    }
    setDatos(datosGenerados);
  }, [lista]); 
  return datos;
}
export default GenerarLista;

