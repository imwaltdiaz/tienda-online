////////////////////////////////////////////////////////////////////////
// Deprecated /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Deprecated /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Deprecated /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const datos = ["1", "2", "3","4","5"];

export default function DataTable({columnas}) {
  /*function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  {rows.map((row) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}
    >
      {columnas.map((columna) => (
        <TableCell key={columna} align="right">
          {row[columna.toLowerCase()]}
        </TableCell>
      ))}
    </TableRow>
  ))}*/

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columnas.map((columna) => (
            <TableCell key={columna}>{columna}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {datos.map((dato, index) => (
          <TableRow key={index}>
            {columnas.map((columna) => (
              <TableCell key={columna} align="right">
                {dato[columna.toLowerCase()]}
              </TableCell>
            ))}
            <TableCell>
              <button>Editar</button>
              <button>Eliminar</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
