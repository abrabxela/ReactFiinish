import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(prop) {
  const {value} = {...prop};

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating name="read-only" value={value} readOnly max={10} precision={0.1}/>
      
    </Box>
  );
}