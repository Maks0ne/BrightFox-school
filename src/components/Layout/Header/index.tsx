'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AppBar, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

import logo from '@/app/icon.png';
import LanguageButton from '@/components/ui/LanguageButton';
import NavButton from '@/components/ui/NavButton';
import { useLocalizedPath } from '@/hooks/localHelper';
import theme from '@/theme';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { localizedPath } = useLocalizedPath();
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      component="header"
      sx={{
        position: 'sticky',
      }}
    >
      <Toolbar sx={{ height: '7vh' }}>
        <Link href={localizedPath}>
          <Image priority src={logo} alt="Fox" width={50} height={50} />
        </Link>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
          Bright
          <Typography
            variant="body2"
            component="span"
            sx={{ color: `${theme.palette.secondary.light}` }}
          >
            Fox
          </Typography>
          School
        </Typography>
        <LanguageButton />
        <NavButton>About</NavButton>
        <NavButton onClick={handleMenuClick}>Services</NavButton>
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
        <NavButton>Contact</NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
