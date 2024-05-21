import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';

export default function ListaItemCarr({ imagen, nombre, cant, prize, subtot }) {
    return (
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 1500,
          height: 150,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
          display: 'flex', 
          alignItems: 'center', 
          p: 2 
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 120, height: 120, flexShrink: 0 }}> 
          <img
            src="https://blog.bangbranding.com/wp-content/uploads/2016/11/700x511_SliderInterior.jpg"
            alt="imagen"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AspectRatio>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 8, gap: 20, textAlign: 'center' }}> {/* textAlign center */}
          
          <Stack direction="row" spacing={7}>
            <Stack direction="column" spacing={8} id="Name_bot">
              <Typography variant="h6" id="card-description">
                {nombre}
              </Typography>
              <Stack direction="row" spacing={3}>
                <Link href="#">Eliminar</Link>
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'black', borderWidth: '2px' }} />
                <Link href="#">Guardar para después</Link>
              </Stack>
            </Stack>
            <Box display="flex" alignItems="center" gap={9}> 
              <input type="number" defaultValue={cant} style={{ width: '60px', marginRight: '32px' }} />
              <Stack direction="column" spacing={1} mr={8}> 
                <Typography variant="body2">Precio:</Typography>
                <Typography variant="body2">{`S/ ${prize}`}</Typography>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Typography variant="body2">Subtotal:</Typography>
                <Typography variant="body2">{`S/ ${subtot}`}</Typography>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    );
  }