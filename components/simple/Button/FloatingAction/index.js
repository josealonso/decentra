import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export function FloatingActionButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{marginLeft: '80vw'}}>
      <Fab size="small" color="secondary" direction={"right"} aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}