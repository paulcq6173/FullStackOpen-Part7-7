import axios from 'axios';

const getCountryData = async (name) => {
  console.log('starting fetch data...');
  let response;

  try {
    response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    console.log(`currentCountry:`, response);
  } catch (error) {
    response = error.response.data.message;

    return response;
  }

  return response;
};

export { getCountryData };
