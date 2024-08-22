import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

import theme from '@/theme';

interface ContainerProps {
  children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        margin: '0 auto 5rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '1700px',
        padding: '0 2rem',
        [theme.breakpoints.down('xl')]: {
          maxWidth: '1160px',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
