import { useState, useEffect } from 'react';

import ErrorBox from './components/ErrorBox';
import Filter from './components/Filter';
import Results from './components/Results';
import * as countryService from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(null);
  const [detailedCountry, setDetailedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const showErrorMsg = () => {
    setErrorMsg('Error while fetching data');
    setTimeout(() => { setErrorMsg('') }, 3000);
  }

  const handleVisibility = (country) => {
    if(!detailedCountry || country.cca3 !== detailedCountry.cca3) {
      setDetailedCountry(country);
    }
    else {
      setDetailedCountry(null);
    }
  }

  const filterChange = e => {
    const newVal = e.target.value;
    const newCountryList = countries.filter(
      country => country.name.common.toLowerCase().includes(newVal.toLowerCase())
    );

    
    if(newCountryList.length === 1) {
      setDetailedCountry(newCountryList[0])
    }

    setFilteredCountries(newCountryList);
    setFilterValue(newVal);
  }

  useEffect(() => {
    async function fetchAll() {
      await countryService
        .getAll()
        .then(data => data.length > 0 ? setCountries(data) : showErrorMsg())
    }
    fetchAll();
  }, []);

  useEffect(() => {
    async function fetchWeather(city) {
      await countryService.getWeather(city).then(data => {
        if (!data) {
          showErrorMsg();
        }
        setWeather(data);
      })
    }

    if (detailedCountry) {
      fetchWeather(detailedCountry.capital[0]);
    }

  }, [detailedCountry])

  return (
    <>
      {
        errorMsg !== '' ? <ErrorBox msg={errorMsg} /> : null
      }
      <Filter value={filterValue} handleChange={filterChange} />
      {
        filterValue !== '' ?
          <Results
            nb={filteredCountries.length}
            countryData={filteredCountries}
            weatherData={weather}
            handleVisibility={handleVisibility}
            whichVisible={detailedCountry}
          /> :
          null
      }
    </>
  )
}

export default App;