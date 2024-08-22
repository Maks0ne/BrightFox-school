'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/uk') ? 'uk' : 'en';

  const messages = {
    en: {
      title: '404 - Page Not Found',
      description:
        'The page you are looking for might have been removed or is temporarily unavailable.',
      goHome: 'Go to Home',
    },
    uk: {
      title: '404 - Сторінка не знайдена',
      description: 'Сторінка, яку ви шукаєте, можливо, була видалена або тимчасово недоступна.',
      goHome: 'На головну',
    },
  };

  const { title, description, goHome } = messages[locale];
  return (
    <html lang="uk">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            textAlign: 'center',
            color: 'black',
            padding: '20px',
          }}
        >
          <h1>{title}</h1>
          <p style={{ fontSize: '16px' }}>{description}</p>
          <Link
            href="/"
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              border: '1px solid black',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            {goHome}
          </Link>
        </div>
      </body>
    </html>
  );
}
