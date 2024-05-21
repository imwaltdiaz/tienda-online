import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/joy/Link';

function ListFooter({ title, option1, option2, option3, ref1, ref2, ref3 }) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body2" component="p" fontWeight="bold">
        {title}
      </Typography>
      <Link variant="body2" color="textSecondary" href={ref1}>
        {option1}
      </Link>
      <Link variant="body2" color="textSecondary" href={ref2}>
        {option2}
      </Link>
      <Link variant="body2" color="textSecondary" href={ref3}>
        {option3}
      </Link>
    </Stack>
  );
}

export default ListFooter;
