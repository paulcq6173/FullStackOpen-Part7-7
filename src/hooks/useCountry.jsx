import { useEffect, useState } from 'react';
import { getCountryData } from '../services/countryService';

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name.replace(' ', '') === '') {
      return;
    }
    async function fetchData() {
      const data = await getCountryData(name);
      setCountry(data);
    }

    fetchData();
  }, [name]);

  return country;
};

export default useCountry;
