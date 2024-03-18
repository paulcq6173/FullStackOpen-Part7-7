import React, { useState, useEffect } from 'react';
import useCountry from './hooks/useCountry';
import useField from './hooks/useField';

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (typeof country === 'string') {
    return <div>not found...</div>;
  }

  const commonName = country.data[0].name.common;

  return (
    <div>
      <h3>{commonName}</h3>
      <div>capital {country.data[0].capital[0]} </div>
      <div>population {country.data[0].population}</div>
      <img
        src={country.data[0].flags.png}
        height="100"
        alt={`flag of ${country.data.name}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField('text');
  const [name, setName] = useState('');
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
