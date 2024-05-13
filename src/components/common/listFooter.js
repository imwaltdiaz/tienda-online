import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function ListFooter({ title, option1, option2, option3 }) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body2" component="p" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {option1}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {option2}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {option3}
      </Typography>
    </Stack>
  );
}

export default ListFooter;
