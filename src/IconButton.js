import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtons({ onClick }) {
  return (
    <Stack>
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}