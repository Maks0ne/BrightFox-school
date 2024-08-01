import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

interface IMainProps {
  children: ReactNode;
}
const Main: FC<IMainProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Main;
