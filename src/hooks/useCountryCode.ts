import { CountryCode } from 'libphonenumber-js';
import { useEffect, useState } from 'react';

export const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>(undefined);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountryCode(data.country_code.toUpperCase() as CountryCode);
      } catch (error) {
        setCountryCode('UA' as CountryCode);
      }
    };

    fetchCountryCode();
  }, []);

  return countryCode;
};
