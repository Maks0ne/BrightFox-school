'use client';

import { Form, FormikProvider, useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { FormikTextField } from '@/components/FormikComponents/FormikTextField';
import { useCountryCode } from '@/hooks/useCountryCode';
import { fetchContactForm } from '@/lib/api/fetchContactForm';
import { useContactFormValidation } from '@/utils/validation/contactForm';

const ContactForm: FC = () => {
  const [message, setMessage] = useState<string>('');
  const t = useTranslations('formSubmitting');

  const countryCode = useCountryCode();
  const validationSchema = useContactFormValidation();

  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', message: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await fetchContactForm(values);
        setMessage(t('submitSuccess'));
        resetForm();
      } catch (error) {
        if (error instanceof Error) {
          setMessage(t('submitError'));
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} autoComplete="on">
        <FormikTextField label={t('nameLabel')} name="name" margin="normal" />

        <MuiTelInput
          label={t('phoneLabel')}
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue('phone', value)}
          defaultCountry={countryCode}
          error={Boolean(formik.errors.phone && formik.touched.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
          margin="normal"
        />

        <FormikTextField label={t('emailLabel')} name="email" margin="normal" />
        <FormikTextField
          label={t('messageLabel')}
          name="message"
          margin="normal"
          multiline
          rows={4}
        ></FormikTextField>

        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={formik.isSubmitting}
            fullWidth
            sx={{
              margin: '2rem 0',
              width: '60%',
              backgroundColor: 'secondary.main',
              fontWeight: 900,
              padding: '1rem',
            }}
          >
            {formik.isSubmitting ? t('loading') : t('submitButton')}
          </Button>
          {formik.isSubmitting && <CircularProgress />}
          {message && (
            <Typography
              variant="body2"
              color={message.includes(t('submitSuccess')) ? 'secondary.main' : 'red'}
              sx={{ textAlign: 'center' }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default ContactForm;
