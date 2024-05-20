import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';

export default function ListaItemCarr({ imagen, nombre, fabricante, precio }) {
    return (
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 1785,
          height: 140,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
          display: 'flex', 
          alignItems: 'flex-start',
          mt : 2
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 120, height: 120, flexShrink: 0, mt : 1}}> 
          <img
            src= {imagen}
            alt="imagen"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AspectRatio>
        <CardContent
          sx={{
             display: 'flex', 
             flexDirection: 'column', 
             flexGrow: 8, 
             gap: 2,
             textAlign : 'flex-start',
             justifyContent : 'flex-start',
             mt : 1,
             mx : 5
            }}
        >
          
          <Stack direction="column">
              <Typography variant="h6" id="card-description" fontWeight="bold">
                {nombre}
              </Typography>
              <Typography variant="h6" id="card-description">
                Por: {fabricante}
              </Typography>
              <Typography variant="h4" id="card-description" fontWeight="bold" sx={{marginTop : 1}}>
                S/{precio}
              </Typography>
          </Stack>
        </CardContent>
      </Card>
    );
  }