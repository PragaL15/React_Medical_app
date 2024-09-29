import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function ColorChips() {
  return (
      <Chip label="Date" color="success" sx={{ position: 'absolute', bottom: 0, ml: 2 }}/>
  );
}
