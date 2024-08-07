import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

import { useLocalizedPath } from '@/hooks/localHelper';
import theme from '@/theme';

interface HeaderDrawerProps {
  open: boolean;
  onClose: () => void;
}

const HeaderDrawer: React.FC<HeaderDrawerProps> = ({ open, onClose }) => {
  const { localizedPath } = useLocalizedPath();
  const t = useTranslations('Navigation');

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.background.default,
        height: '100%',
        overflow: 'auto',
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0.5rem',
          position: 'relative',
        }}
      >
        <IconButton sx={{ position: 'absolute', top: 20 }} onClick={onClose}>
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <List>
        <ListItem component={Link} href={localizedPath}>
          <ListItemText primary={t('home')} primaryTypographyProps={{ fontSize: '2rem' }} />
        </ListItem>
        <ListItem component={Link} href="/about">
          <ListItemText primary={t('courses')} primaryTypographyProps={{ fontSize: '2rem' }} />
        </ListItem>
        <ListItem component={Link} href="/contact">
          <ListItemText primary={t('contacts')} primaryTypographyProps={{ fontSize: '2rem' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 250,
          height: '100%',
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default HeaderDrawer;
