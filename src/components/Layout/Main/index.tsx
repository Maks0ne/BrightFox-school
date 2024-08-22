import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

interface IMainProps {
  children: ReactNode;
}
const Main: FC<IMainProps> = ({ children }) => {
  return (
    <Box component="main" sx={{ minHeight: '80vh' }}>
      {children}
    </Box>
  );
};

export default Main;
