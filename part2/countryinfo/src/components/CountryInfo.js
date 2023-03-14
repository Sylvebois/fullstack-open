const CountryInfo = ({ country, weather }) => {
  return (<div>
    <h2>{country.name.official}</h2>
    <p>
      Capital : {country.capital[0]}<br />
      Area : {country.area}
    </p>
    <h3>Languages : </h3>
    <ul>
      {Object.entries(country.languages).map(data => <li key={data[0]}>{data[1]}</li>)}
    </ul>
    <img src={country.flags.svg} alt={country.flags.alt} width="200" />
    {
      weather ?
        <WeatherInfo
          city={country.capital[0]}
          temp={weather.main.temp}
          windSpeed={weather.wind.speed}
          iconId={weather.weather[0].icon}
          iconDescr={weather.weather[0].description}
        /> :
        null
    }

  </div>)
}

const WeatherInfo = ({ city, temp, windSpeed, iconId, iconDescr }) =>
  <>
    <h3>Weather in {city}</h3>
    <p>Temperature : {temp} Celsius</p>
    <img
      src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
      alt={iconDescr}
    />
    <p>Wind : {windSpeed} m/s</p>
  </>

export default CountryInfo;