'use client';

import Image from 'next/image';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import logo from '@/app/icon.png';
import theme from '@/theme';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          position: 'sticky',
        }}
      >
        <Toolbar sx={{ height: '7vh' }}>
          <Image priority src={logo} alt="logo" width={60} height={60} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bright
            <Typography
              variant="h6"
              component="span"
              sx={{ color: `${theme.palette.secondary.light}` }}
            >
              Fox
            </Typography>
            School
          </Typography>
          <Button>Home</Button>
          <Button>About</Button>
          <Button onClick={handleMenuClick}>Services</Button>
          <Menu
            sx={{
              '& .MuiPaper-root': {
                background: `${theme.palette.secondary.dark}`,
                width: '250px',
                height: '150px',
              },
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem sx={{ color: theme.palette.grey[200] }} onClick={handleMenuClose}>
              Service 1
            </MenuItem>
            <MenuItem sx={{ color: theme.palette.grey[200] }} onClick={handleMenuClose}>
              Service 2
            </MenuItem>
            <MenuItem sx={{ color: theme.palette.grey[200] }} onClick={handleMenuClose}>
              Service 3
            </MenuItem>
          </Menu>
          <Button>Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
