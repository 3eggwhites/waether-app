const geoLocation = require('./utils/geocode');
const weatherForecast = require('./utils/weatherforecast');

const searchLocation = process.argv[2];

if (searchLocation) {
  geoLocation.geoCode(searchLocation, (error, {lat, long, location} = {}) => { // used es6 object destructing to extract only required data from the geoCode function return object
    if (error) {
      return console.log(error);
    }
    weatherForecast.forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
    console.log(location);
    console.log('Forecast: ', forecastData)
    });
  });
} else {
  console.log('Please enter a location')
}

