'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { CourseButton } from './CourseButton';
import HeaderDrawer from './Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import logo from '@/app/icon.png';
import LanguageButton from '@/components/ui/LanguageButton';
import NavButton from '@/components/ui/NavButton';
import { useLocalizedPath } from '@/hooks/useLocalHelper';

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
      <Toolbar component="nav" sx={{ height: '7vh', justifyContent: 'space-between' }}>
        <Link href={localizedPath}>
          <Image priority src={logo} alt="Fox" width={50} height={50} />
        </Link>
        <Typography
          variant="body2"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          Bright
          <Typography
            variant="body2"
            component="span"
            sx={{
              color: `${theme.palette.secondary.light}`,
            }}
          >
            Fox
          </Typography>
          School
        </Typography>
        <LanguageButton />
        {isMdUp ? (
          <Box sx={{ display: 'flex' }}>
            <CourseButton />
            <Link href={`${localizedPath}/contacts`}>
              <NavButton>{t('contacts')}</NavButton>
            </Link>
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
