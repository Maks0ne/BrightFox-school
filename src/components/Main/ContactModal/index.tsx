'use client';

import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, IconButton, Typography } from '@mui/material';

import ContactCourseForm from '@/components/Forms/ContactCourseForm';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}
const ContactModal: FC<ContactModalProps> = ({ open, onClose }) => {
  const t = useTranslations('contactModal');

  //Fixed scroll to tabindex
  useEffect(() => {
    const elements = document.querySelectorAll('body > *:not(#modal-root)');
    if (open) {
      elements.forEach((el) => {
        (el as HTMLElement).setAttribute('inert', 'true');
      });
    } else {
      elements.forEach((el) => {
        (el as HTMLElement).removeAttribute('inert');
      });
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '16px',
          overflowX: 'hidden',
          padding: '1.5rem',
          '@media (min-width:1700px)': {
            maxWidth: 'sm',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography fontWeight={600} variant="body2" mb={2}>
          {t('tryFreeLesson')}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 10,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: 'primary.light',
            borderRadius: '16px',
          }}
        >
          <ContactCourseForm />
        </Box>

        <Typography sx={{ mt: 2, textAlign: 'center' }} fontWeight={600} variant="body2">
          {t('questionsContact')}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default ContactModal;
