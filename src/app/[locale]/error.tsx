'use client';

import { usePathname } from 'next/navigation';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const pathname = usePathname();
  const locale = pathname.startsWith('/uk') ? 'uk' : 'en';

  const messages = {
    en: {
      title: '500 - Internal Server Error',
      description: 'Something went wrong. Please try again later.',
      retry: 'Try again',
    },
    uk: {
      title: '500 - Внутрішня помилка сервера',
      description: 'Щось пішло не так. Спробуйте пізніше.',
      retry: 'Спробувати ще раз',
    },
  };

  const { title, description, retry } = messages[locale];

  return (
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
      <button
        onClick={() => reset()}
        style={{ marginTop: '20px', padding: '10px 20px', border: '1px solid black' }}
      >
        {retry}
      </button>
    </div>
  );
}
