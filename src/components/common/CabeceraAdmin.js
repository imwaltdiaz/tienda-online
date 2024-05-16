// CabeceraAdmin.js
import React from 'react';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function CabeceraAdmin() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "#E4E4E5", pl: 2, pr: 2 }}
    >
      <h2>Dashboard</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Cambiar fecha o periodo" />
      </LocalizationProvider>
    </Stack>
  );
}
