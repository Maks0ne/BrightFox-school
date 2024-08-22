import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Typography } from '@mui/material';

const WelcomeTitle: FC = () => {
  const t = useTranslations('WelcomeTitle');

  return (
    <Box sx={{ padding: '0 1rem', margin: '4rem 0' }}>
      <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box component="span" sx={{ color: 'secondary.main', paddingRight: '0.3rem' }}>
          BrightFox School
        </Box>
        {t('title')}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {t('subtitle')}
      </Typography>
    </Box>
  );
};

export default WelcomeTitle;
