import { FC } from 'react';

import { Button, ButtonProps } from '@mui/material';

const ActionButton: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Button
      sx={{
        display: 'block',
        padding: '1rem 2rem',
        border: '2px solid',
        borderRadius: '16px',
        borderColor: 'secondary.main',
        backgroundColor: '#ff88001f',
        transition: 'background-color 0.5s',
        fontSize: '1rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        ...props.sx,
        '&:hover': {
          backgroundColor: '#ff880047',
        },
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
