import { FC, ReactNode } from 'react';

import { Box, Divider, Typography } from '@mui/material';

interface ICoursePageTabProps {
  children: ReactNode;
  title: string;
  description: string;
}
const CoursePageTab: FC<ICoursePageTabProps> = ({ children, description, title }) => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          color: 'secondary.main',
        }}
        variant="h2"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '5rem',
          fontWeight: 600,
        }}
        variant="subtitle1"
      >
        {description}
      </Typography>
      <Divider sx={{ margin: '4rem 0', borderColor: 'primary.main' }} variant="middle" />
      <Box
        sx={{
          display: 'flex',
          gap: '2.5rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CoursePageTab;
