import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({
  onClick,
  children,
  color = 'lavender'
}) {
  return (
    <Button
      className="customButton"
      onClick={onClick}
      variant="outlined"
      sx={{ background: color, }}>
      {children}
    </Button>
  );
}
