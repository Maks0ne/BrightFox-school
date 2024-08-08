'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import HeaderDrawer from './Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import logo from '@/app/icon.png';
import LanguageButton from '@/components/ui/LanguageButton';
import NavButton from '@/components/ui/NavButton';
import { useLocalizedPath } from '@/hooks/localHelper';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { localizedPath } = useLocalizedPath();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const t = useTranslations('Navigation');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar component="header" sx={{ position: 'sticky' }}>
      <Toolbar component="nav" sx={{ height: '7svh', justifyContent: 'space-between' }}>
        <Link href={localizedPath}>
          <Image priority src={logo} alt="Fox" width={50} height={50} />
        </Link>
        <Typography
          variant="body2"
          component="div"
          sx={{
            flexGrow: 1,
            [theme.breakpoints.down('md')]: {
              fontSize: '12px',
            },
          }}
        >
          Bright
          <Typography
            variant="body2"
            component="span"
            sx={{
              color: `${theme.palette.secondary.light}`,
              [theme.breakpoints.down('md')]: {
                fontSize: '12px',
              },
            }}
          >
            Fox
          </Typography>
          School
        </Typography>
        <LanguageButton />
        {isMdUp ? (
          <Box sx={{ display: 'flex' }}>
            <NavButton>{t('courses')}</NavButton>
            <NavButton>{t('contacts')}</NavButton>
          </Box>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ width: '24px', height: '24px' }} />
          </IconButton>
        )}
      </Toolbar>
      <HeaderDrawer open={drawerOpen} onClose={handleDrawerToggle} />
    </AppBar>
  );
};

export default Header;
