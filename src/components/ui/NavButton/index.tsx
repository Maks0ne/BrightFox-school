import { FC } from 'react';

import { Button, ButtonProps } from '@mui/material';

const NavButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        '&:hover': {
          color: 'secondary.main',
          transform: 'scale(1.05)',
        },
        transition: 'transform 0.2s, background-color 0.2s',
        fontSize: '0.9rem',
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
