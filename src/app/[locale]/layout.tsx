import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';

import './globals.scss';

import Wrapper from '@/components/Layout/Wrapper';
import ThemeProviderWrapper from '@/theme/themeProvider';

const inter = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BrightFox School',
  description: 'BrightFox School - школа англійської мови.',
  metadataBase: new URL('https://eng-school.vercel.app/'),
  openGraph: {
    images: [
      {
        url: '/icon.png',
        width: 200,
        height: 200,
        alt: 'Bright Fox School',
      },
    ],
  },
  twitter: {
    title: 'BrightFox School',
    description: 'BrightFox School - школа англійської мови.',
    images: [
      {
        url: '/icon.png',
        width: 200,
        height: 200,
        alt: 'Bright Fox School',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <ThemeProviderWrapper>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <Wrapper>{children}</Wrapper>
          </NextIntlClientProvider>
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
