const geoLocation = require('./utils/geocode');
const weatherForecast = require('./utils/weatherforecast');

const searchLocation = process.argv[2];

if (searchLocation) {
  geoLocation.geoCode(searchLocation, (error, geoCodeData) => {
    if (error) {
      return console.log(error);
    }
    weatherForecast.forecast(geoCodeData.lat, geoCodeData.long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
    console.log(geoCodeData.location);
    console.log('Forecast: ', forecastData)
    });
  });
} else {
  console.log('Please enter a location')
}

