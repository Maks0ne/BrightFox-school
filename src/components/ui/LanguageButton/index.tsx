import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@mui/material';

import engIcon from '@/assets/icons/England.png';
import ukrIcon from '@/assets/icons/Ukraine.png';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';

const LanguageButton: FC = () => {
  const { isEnglish, switchLocalePath } = useLocaleSwitcher();
  const currentIcon = isEnglish ? ukrIcon : engIcon;

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link href={switchLocalePath}>
        <Button
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 16px',
            borderRadius: '4px',
            textTransform: 'none',
          }}
        >
          <Image
            src={currentIcon}
            width={24}
            height={24}
            alt={isEnglish ? 'Українська' : 'English'}
            style={{ marginRight: '8px' }}
          />
          {isEnglish ? 'UA' : 'EN'}
        </Button>
      </Link>
    </div>
  );
};

export default LanguageButton;
