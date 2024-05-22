import { useState, useEffect } from "react";
function GenerarLista([lista]) {
  let [datos, setDatos] = useState([]);
  useEffect(() => {
    const num = lista.length;
    let datosGenerados = [];
    for (let i = 0; i < num; i++) {
      const Id = i + 1;
        /*
      const nombre = lista[i].name;
      const apellido = lista[i].lastName;
      const correo = lista[i].email;
      const fecha = lista[i].date;
      const estado = "Activo";
      const botones = [];
      */
      const nombre = lista[i][1];
      const apellido = lista[i][2];
      const correo = lista[i][3];
      const fecha = lista[i][4];
      const estado = "Activo";
      const botones = "Desactivar / Ver";
      datosGenerados.push({ Id, nombre, apellido, correo, fecha, estado, botones });
    }
    setDatos(datosGenerados);
  }, [lista]); 
  return datos;
}
export default GenerarLista;

