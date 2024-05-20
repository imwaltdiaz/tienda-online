//sx={{ p: 3, width: "85vw" }}
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const Agregar = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [marca, setMarca] = useState("");
  const [serie, setSerie] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipo, setTipo] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos al servidor
    console.log({
      nombre,
      descripcion,
      caracteristicas,
      marca,
      serie,
      precio,
      tipo,
      stock,
      imagen,
    });
  };

  return (
    <Box sx={{ p: 3, width: "85vw", pr: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Agregar Producto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: 200,
                          border: "1px solid #ddd",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        {imagenPreview ? (
                          <img
                            src={imagenPreview}
                            alt="Vista previa"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                          />
                        ) : (
                          <Typography color="textSecondary">
                            Vista previa de la imagen
                          </Typography>
                        )}
                      </Box>
                      <Button variant="contained" component="label" fullWidth>
                        Agregar Imagen
                        <input
                          type="file"
                          hidden
                          onChange={handleImageChange}
                        />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="p" gutterBottom>
                      Nombre
                    </Typography>
                    <TextField
                      label="Nombre"
                      fullWidth
                      margin="normal"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                    <Typography variant="p" gutterBottom>
                      Descripción
                    </Typography>
                    <TextField
                      label="Descripción"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <Typography variant="p" gutterBottom>
                      Características
                    </Typography>
                    <TextField
                      label="Características"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      value={caracteristicas}
                      onChange={(e) => setCaracteristicas(e.target.value)}
                    />
                    {/* aqui va otro grid */}
                    <Grid item xs={3}>
                      <Typography variant="p" gutterBottom>
                        Marca
                      </Typography>
                      <TextField
                        label="Marca"
                        fullWidth
                        margin="normal"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="p" gutterBottom>
                        Serie
                      </Typography>
                      <TextField
                        label="Serie"
                        fullWidth
                        margin="normal"
                        value={serie}
                        onChange={(e) => setSerie(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="p" gutterBottom>
                        Precio
                      </Typography>
                      <TextField
                        label="Precio"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        InputProps={{ startAdornment: "S/" }}
                      />
                    </Grid>

                    <Typography variant="p" gutterBottom>
                      Stock
                    </Typography>
                    <TextField
                      label="Stock"
                      fullWidth
                      margin="normal"
                      type="number"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                    <Typography variant="p" gutterBottom>
                      Tipo
                    </Typography>
                    <TextField
                      label="Tipo"
                      fullWidth
                      margin="normal"
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Guardar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Agregar;
