import CountryInfo from './CountryInfo';

const Results = ({ nb, countryData, weatherData, whichVisible, handleVisibility }) => {
  if (nb > 10) {
    return <div>Too many result, be more specific please.</div>
  }
  else if (nb === 0) {
    return <div>No result found !</div>
  }
  else if (nb === 1) {
    return <CountryInfo country={countryData[0]} weather={weatherData} />
  }
  else {
    return (
      <ul>
        {
          countryData.map(country =>
            <Line
              key={country.cca3}
              country={country}
              weather={weatherData}
              switchVisibility={handleVisibility}
              visible={
                whichVisible === null || whichVisible.cca3 !== country.cca3 ?
                  false : true} />)
        }
      </ul>)
  }
}

const Line = ({ country, weather, visible, switchVisibility }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => switchVisibility(country)}>show</button>
      {visible ? <CountryInfo country={country} weather={weather} /> : null}
    </li>
  )
}

export default Results;