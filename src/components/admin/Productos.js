import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, Button
} from '@mui/material';

export default function Productos({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((product) =>
    product.id.toString().includes(searchTerm) ||
    product.detalle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.serie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper>
      <TextField
        label="Buscar por ID, serie o detalle"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearch}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Serie</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Fecha de Registro</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.detalle}</TableCell>
                <TableCell>{product.serie}</TableCell>
                <TableCell>{product.precio}</TableCell>
                <TableCell>{product.fechaRegistro}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.estado}</TableCell>
                <TableCell>
                  <Button color="primary">Ver</Button>
                  <Button color="secondary">Desactivar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
