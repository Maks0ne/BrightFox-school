import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC, useState } from 'react';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Menu, MenuItem, Typography } from '@mui/material';

import NavButton from '@/components/ui/NavButton';
import { useLocalizedPath } from '@/hooks/useLocalHelper';

export const CourseButton: FC = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const { localizedPath } = useLocalizedPath();

  const t = useTranslations('Navigation');
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  return (
    <>
      <NavButton onClick={handleMenuOpen} color="inherit">
        {t('courses')}
        {menuAnchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
      </NavButton>
      <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Link href={`${localizedPath}/courses/individual`}>
            <Typography
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s, background-color 0.2s',
                fontSize: '1rem',
              }}
            >
              {t('singleNav')}
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href={`${localizedPath}/courses/group`}>
            <Typography
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s, background-color 0.2s',
                fontSize: '1rem',
              }}
            >
              {t('groupNav')}
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href={`${localizedPath}/courses/pair`}>
            <Typography
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s, background-color 0.2s',
                fontSize: '1rem',
              }}
            >
              {t('pairNav')}
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
