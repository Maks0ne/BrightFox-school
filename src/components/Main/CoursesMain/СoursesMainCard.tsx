import Link from 'next/link';
import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';

interface CoursesMainCardProps {
  title: string;
  text: string;
}
const CoursesMainCard: FC<CoursesMainCardProps> = ({ title, text }) => {
  return (
    <Box
      sx={{
        width: '45%',
        height: '45%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '12px',
        position: 'relative',
        padding: '2rem',
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body1">{text}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button>Детальнише...</Button>
      </Box>
    </Box>
  );
};
export default CoursesMainCard;
