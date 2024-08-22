'use client';

import { Form, FormikProvider, useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Box, Button, CircularProgress, MenuItem, Typography } from '@mui/material';

import { FormikTextField } from '@/components/FormikComponents/FormikTextField';
import { useCountryCode } from '@/hooks/useCountryCode';
import { fetchContactForm } from '@/lib/api/fetchContactForm';
import { useContactCourseFormValidation } from '@/utils/validation/contactCourseForm';

const ContactCourseForm: FC = () => {
  const [message, setMessage] = useState<string>('');
  const t = useTranslations('formSubmitting');

  const courseOptions = [
    { label: t('courseOptions.standart'), value: 'standart course' },
    { label: t('courseOptions.it'), value: 'it course' },
    { label: t('courseOptions.premium'), value: 'premium course' },
    { label: t('courseOptions.children'), value: 'children course' },
    { label: t('courseOptions.native'), value: 'native course' },
  ];
  const countryCode = useCountryCode();
  const validationSchema = useContactCourseFormValidation();

  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', course: '' },
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
        <FormikTextField label={t('courseLabel')} name="course" margin="normal" select>
          {courseOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </FormikTextField>

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

export default ContactCourseForm;
