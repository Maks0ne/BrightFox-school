import { FC, ReactNode } from 'react';

import Header from '../Header';
import Main from '../Main';

import { Box } from '@mui/material';

interface IWrapperProps {
  children: ReactNode;
}
const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Main>{children}</Main>
    </Box>
  );
};

export default Wrapper;
